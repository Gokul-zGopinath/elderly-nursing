const express = require("express");
const router = express.Router();

const {
  createPatient,
  getPatients,
} = require("../controllers/patientController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createPatient);
router.get("/", protect, getPatients);

module.exports = router;