const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);

const protect = require("../middleware/authMiddleware");

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user,
  });
});


module.exports = router;