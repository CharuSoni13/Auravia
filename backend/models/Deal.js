import mongoose from "mongoose";

const DealSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
});

export default mongoose.model("Deal", DealSchema);
