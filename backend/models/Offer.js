import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  title: String,
  discount: String,
  image: String,
  code: String,
  expiry: String,
});

export default mongoose.model("Offer", OfferSchema);
