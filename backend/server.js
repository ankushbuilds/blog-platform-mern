const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectToMongoDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

// 🔥 CORS FIX (IMPORTANT for Vercel + mobile + production)
app.use(
  cors({
    origin: [
      "https://blog-platform-mern-9q76.vercel.app",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// 🔥 Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 DB connection
connectToMongoDB();

// 🔥 Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// 🔥 Health check route (important for Render)
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running 🚀",
  });
});

// 🔥 Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});