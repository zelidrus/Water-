const mongoose = require("mongoose");

const WaterModel = mongoose.model(
  "water",
  mongoose.Schema({
    date: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    liters: {
      type: Number,
      required: true,
    },
  })
);

module.exports = WaterModel;
