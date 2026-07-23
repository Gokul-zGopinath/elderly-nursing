const mongoose = require("mongoose");

const caregiverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    experienceYears: {
      type: Number,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    availability: {
      type: Boolean,
      default: true,
    },

    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Caregiver", caregiverSchema);