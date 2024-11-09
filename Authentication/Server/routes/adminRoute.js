const express = require("express");
const authMiddleware = require("../middleware/authmiddleware");
const isAdminUser = require("../middleware/adminmiddleware");
const adminControls = require("../controllers/adminController");
const router = express.Router();

router.get("/welcome", authMiddleware, isAdminUser, adminControls);

module.exports = router;
