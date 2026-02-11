const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Vendor", vendorSchema);
