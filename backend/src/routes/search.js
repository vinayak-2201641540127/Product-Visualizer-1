import express from "express";
import multer from "multer";
import { searchProducts } from "../controllers/searchController.js";

const router = express.Router();
const upload = multer();

router.post("/", upload.single("file"), searchProducts);

export default router;
