import express from "express";
import Offer from "../models/Offer.js";

const router = express.Router();

// Get all offers
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get offer by ID
router.get("/:id", async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    res.json(offer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new offer
router.post("/add", async (req, res) => {
  try {
    const newOffer = new Offer(req.body);
    await newOffer.save();
    res.json({ message: "Offer added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update offer
router.post("/update/:id", async (req, res) => {
  try {
    await Offer.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Offer updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete offer
router.get("/delete/:id", async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.json({ message: "Offer deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
