const Medication = require("../models/Medication");

// Create Medication
const createMedication = async (req, res) => {
  try {
    const medication = await Medication.create(req.body);

    res.status(201).json(medication);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Medications
const getMedications = async (req, res) => {
  try {
    const medications = await Medication.find().populate("patient");

    res.status(200).json({
      count: medications.length,
      medications,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMedication,
  getMedications,
};