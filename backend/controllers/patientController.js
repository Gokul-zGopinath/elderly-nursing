const Patient = require("../models/Patient");

// Create Patient
const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create({
      ...req.body,
      userId: req.user._id,
    });

    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({
      userId: req.user._id,
    });

    res.status(200).json({
      count: patients.length,
      patients,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPatient,
  getPatients,
};