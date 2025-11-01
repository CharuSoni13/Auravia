import express from "express";
import International from "../models/International.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const destinations = await International.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const destination = await International.findById(req.params.id);
    res.json(destination);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newDestination = new International(req.body);
    await newDestination.save();
    res.json({ message: "International destination added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    await International.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "International destination updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await International.findByIdAndDelete(req.params.id);
    res.json({ message: "International destination deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
