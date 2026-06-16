const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectToMongoDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

// 🔥 ALLOWED ORIGINS (IMPORTANT)
const allowedOrigins = [
  "https://blog-platform-mern-drab.vercel.app",
  "https://blog-platform-mern-9q76.vercel.app",
  "http://localhost:5173"
];

// 🔥 CORS CONFIG (FIXED FOR credentials + preflight)
app.use(
  cors({
    origin: function (origin, callback) {
      // allow server-to-server or curl (no origin)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔥 HANDLE PRE-FLIGHT REQUESTS
app.options("*", cors());

// 🔥 Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 DB connection
connectToMongoDB();

// 🔥 Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// 🔥 Health check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running 🚀",
  });
});

// 🔥 PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});