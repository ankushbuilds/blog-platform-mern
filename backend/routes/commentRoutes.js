const express = require("express");

const {
  createComment,
  getComments,
  deleteComment,
} = require("../controllers/commentController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create comment
router.post("/", protect, createComment);

// Get comments of a post
router.get("/:postId", getComments);

// Delete comment
router.delete("/:id", protect, deleteComment);

module.exports = router;