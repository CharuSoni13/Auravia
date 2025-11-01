import express from "express";
import Sale from "../models/Sale.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const data = await Sale.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Sale.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new
router.post("/add", async (req, res) => {
  try {
    const newItem = new Sale(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update
router.post("/update/:id", async (req, res) => {
  try {
    const updatedItem = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.get("/delete/:id", async (req, res) => {
  try {
    await Sale.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
