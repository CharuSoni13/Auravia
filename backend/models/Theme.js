import mongoose from "mongoose";

const ThemeSchema = new mongoose.Schema({
  themeName: String,
  description: String,
  image: String,
});

export default mongoose.model("Theme", ThemeSchema);
