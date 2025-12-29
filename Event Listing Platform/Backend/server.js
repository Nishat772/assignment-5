import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import blogRoutes from "./routes/blog.routes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/blogs", blogRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Blog API Running...");
});

// Start Server
app.listen(8000, () => console.log("Server running on port 8000"));
