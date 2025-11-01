import mongoose from "mongoose";

const VisaFreeSchema = new mongoose.Schema({
  country: String,
  description: String,
  image: String,
});

export default mongoose.model("VisaFree", VisaFreeSchema);
