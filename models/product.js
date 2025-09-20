const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  category: String,
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
