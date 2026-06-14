const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    console.log("AUTH HEADERS:", req.headers.authorization);

  try {
    let token;

    // Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // Token missing
    if (!token) {
      return res.status(401).json({
        message: "No token, authorization denied",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request
    req.user = decoded;

    next();
  } catch (error) {
    return       res.status(401).json({
      message: "Token is not valid",
    });
  }
};

module.exports = protect;