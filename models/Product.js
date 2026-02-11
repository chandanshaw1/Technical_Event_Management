const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  vendorId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: "available" }
});

module.exports = mongoose.model("Product", productSchema);
