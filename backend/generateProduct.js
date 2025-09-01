import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

// 50 categories
const categories = [
  "tshirt", "jeans", "shoes", "watch", "bag", "sunglasses", "sneakers", "gloves", "jacket", "hat",  "dress", "hoodie",
   "boots", "belt", "scarf", "suit", "blazer", "kurta", "saree", "lehenga", "tie",
  "handbag", "wallet", "ring", "necklace", "bracelet", "earrings", "laptop", "mobile", "tablet", "headphones",
  "camera", "tv", "speaker", "keyboard", "mouse", "gaming console", "book", "notebook", "pen", "bottle",
  "cup", "chair", "table", "lamp", "sofa", "bed", "car", "bike", "helmet", 
];

const fetchImages = async () => {
  let products = [];

  for (let cat of categories) {
    console.log(`Fetching images for: ${cat}`);
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: cat, per_page: 20 },
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` }
    });

    res.data.results.forEach((img, i) => {
      products.push({
        name: `${cat} ${i + 1}`,
        category: cat,
        image_url: img.urls.small
      });
    });

    await new Promise(r => setTimeout(r, 1000));
  }

  fs.writeFileSync("product_data/products.json", JSON.stringify(products, null, 2));
  console.log(`products.json generated with ${products.length} items`);
};

fetchImages().catch(err => console.error("Error generating products:", err.message));
