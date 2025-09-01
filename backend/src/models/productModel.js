import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  image_url: String,
  embedding: [Number]   
});

export default mongoose.model("Product", productSchema);
