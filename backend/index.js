import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";

dotenv.config();
const app = express();

// Allow only the frontend to access the backend
const corsOptions = {
  origin: "https://blog-app-lilac-rho.vercel.app", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions)); 


// API ENDPOINTS
app.use("/images", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
