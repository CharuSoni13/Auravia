import mongoose from "mongoose";

const InternationalSchema = new mongoose.Schema({
  country: String,
  description: String,
  image: String,
});

export default mongoose.model("International", InternationalSchema);
