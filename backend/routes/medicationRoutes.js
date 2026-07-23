const express = require("express");
const router = express.Router();

const {
  createMedication,
  getMedications,
} = require("../controllers/medicationController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createMedication);
router.get("/", protect, getMedications);

module.exports = router;