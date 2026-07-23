const Caregiver = require("../models/Caregiver");

// Create Caregiver
const createCaregiver = async (req, res) => {
  try {
    const caregiver = await Caregiver.create(req.body);

    res.status(201).json(caregiver);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Caregivers
const getCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();

    res.status(200).json({
      count: caregivers.length,
      caregivers,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCaregiver,
  getCaregivers,
};