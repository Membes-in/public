const mongoose = require("mongoose");
const { Schema } = mongoose;

const visitorSchema = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String },
    phoneNumber: { type: String, required: true },
  },
  { timestamps: true },
);

const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = { Visitor };
