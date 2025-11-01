import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema({
  title: String,
  discount: String,
  image: String,
  expiry: String,
});

export default mongoose.model("Sale", SaleSchema);
