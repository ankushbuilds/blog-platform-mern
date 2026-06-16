const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectToMongoDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

// ✅ Allowed Origins
const allowedOrigins = [
  "https://blog-platform-mern-rho.vercel.app",
  "https://blog-platform-mern-drab.vercel.app",
  "https://blog-platform-mern-9q76.vercel.app",
  "http://localhost:5173",
];

// ✅ CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// ✅ Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running 🚀",
  });
});

// ✅ Start Server only after DB connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectToMongoDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();