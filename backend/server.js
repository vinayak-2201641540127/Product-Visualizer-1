import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import searchRoutes from "./src/routes/search.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use("/api/search", searchRoutes);


connectDB().then(() => {
  app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
});
