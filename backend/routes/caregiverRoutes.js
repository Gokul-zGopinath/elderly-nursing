const express = require("express");
const router = express.Router();

const {
  createCaregiver,
  getCaregivers,
} = require("../controllers/caregiverController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createCaregiver);
router.get("/", protect, getCaregivers);

module.exports = router;