const express = require("express");
const router = express.Router();

const {
  createService,
  getServices,
} = require("../controllers/serviceController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createService);
router.get("/", protect, getServices);

module.exports = router;