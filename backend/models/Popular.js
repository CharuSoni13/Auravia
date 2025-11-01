import mongoose from "mongoose";

const PopularSchema = new mongoose.Schema({
  place: String,
  description: String,
  image: String,
});

export default mongoose.model("Popular", PopularSchema);
