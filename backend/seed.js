import fs from "fs";
import axios from "axios";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./src/models/productModel.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const FLASK_API_URL = process.env.FLASK_API_URL;

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    const rawData = fs.readFileSync("./product_data/products.json");
    const products = JSON.parse(rawData);

    for (let product of products) {
      // Call ML service to get embedding
      const response = await axios.post(FLASK_API_URL, { url: product.image_url });
      const embedding = response.data.embedding;

      // Save
      const newProduct = new Product({
        name: product.name,
        category: product.category,
        image_url: product.image_url,
        embedding: embedding
      });

      await newProduct.save();
      console.log(`Inserted: ${product.name}`);
    }

    console.log(" All products inserted successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error(" Error seeding DB:", err);
    mongoose.disconnect();
  }
};

seedDB();
