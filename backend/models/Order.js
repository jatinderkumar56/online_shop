const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    products: [
      {
        productID: { type: String },
        quantity: { type: Number, default: 1 }
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
   address: {
      city: { type: String, required: true },
      country: { type: String, required: true },
      line1: { type: String, required: true },
      line2: { type: String, default: null },
      postal_code: { type: String, required: true },
      state: { type: String, default: null },
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
