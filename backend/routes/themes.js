import express from "express";
import Theme from "../models/Theme.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.find();
    res.json(themes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const theme = await Theme.findById(req.params.id);
    res.json(theme);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newTheme = new Theme(req.body);
    await newTheme.save();
    res.json({ message: "Theme added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    await Theme.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Theme updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await Theme.findByIdAndDelete(req.params.id);
    res.json({ message: "Theme deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
