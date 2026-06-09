const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectToMongoDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

// ✅ MUST be FIRST
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ✅ THEN DB CONNECT
connectToMongoDB();

// ✅ THEN ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});