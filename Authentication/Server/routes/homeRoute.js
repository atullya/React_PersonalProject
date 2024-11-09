const express = require("express");
const authMiddleware = require("../middleware/authmiddleware");
const router = express.Router();

router.get("/home", authMiddleware, (req, res) => {
  const { email, userId, role } = req.userInfo;
  res.json({
    message: "Welcome to Home Page",
    user: {
      _id: userId,
      email,
      role,
    },
  });
});

module.exports = router;
