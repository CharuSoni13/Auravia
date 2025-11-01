import express from "express";
import Popular from "../models/Popular.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const popular = await Popular.find();
    res.json(popular);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const place = await Popular.findById(req.params.id);
    res.json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newPlace = new Popular(req.body);
    await newPlace.save();
    res.json({ message: "Popular destination added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    await Popular.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Popular destination updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await Popular.findByIdAndDelete(req.params.id);
    res.json({ message: "Popular destination deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
