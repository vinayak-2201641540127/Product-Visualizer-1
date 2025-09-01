import axios from "axios";
import Product from "../models/productModel.js";
import { cosineSimilarity } from "../utils/similarity.js";
import FormData from "form-data";

export const searchProducts = async (req, res) => {
    try {
        let embedding;

        // Case 1: Image Upload
        if (req.file) {
            const formData = new FormData();
            formData.append("file", req.file.buffer, req.file.originalname);

            const response = await axios.post(process.env.FLASK_API_URL, formData, {
                headers: formData.getHeaders()
            });

            embedding = response.data.embedding;
        }
        // Case 2: Image URL
        else if (req.body.url) {
            const response = await axios.post(process.env.FLASK_API_URL, { url: req.body.url });
            embedding = response.data.embedding;
        } else {
            return res.status(400).json({ error: "No image provided" });
        }

        
        const products = await Product.find();

        
        const results = products.map(p => ({
            name: p.name,
            category: p.category,
            image_url: p.image_url,
            similarity: cosineSimilarity(embedding, p.embedding)
        }));

        
        results.sort((a, b) => b.similarity - a.similarity);

        const uniqueResults = [];
        const seen = new Set();

        for (const r of results) {
            const normalizedUrl = r.image_url.split("?")[0].replace(/\/$/, "");

            const key = normalizedUrl + "_" + r.similarity.toFixed(4);

            if (!seen.has(key)) {
                uniqueResults.push(r);
                seen.add(key);
            }
        }
        const limit = parseInt(req.body.limit || req.query.limit || 8);
        res.json({ results: uniqueResults.slice(0, limit) });

    } catch (err) {
        console.error("❌ Search failed:", err.message);
        res.status(500).json({ error: "Search failed" });
    }
};


