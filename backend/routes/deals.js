import express from "express";
import Deal from "../models/Deal.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const deals = await Deal.find();
    res.json(deals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);
    res.json(deal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newDeal = new Deal(req.body);
    await newDeal.save();
    res.json({ message: "Deal added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    await Deal.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Deal updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await Deal.findByIdAndDelete(req.params.id);
    res.json({ message: "Deal deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
