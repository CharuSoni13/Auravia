import express from "express";
import VisaFree from "../models/VisaFree.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const visaFree = await VisaFree.find();
    res.json(visaFree);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const visa = await VisaFree.findById(req.params.id);
    res.json(visa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const newVisa = new VisaFree(req.body);
    await newVisa.save();
    res.json({ message: "Visa-free country added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    await VisaFree.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Visa-free country updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await VisaFree.findByIdAndDelete(req.params.id);
    res.json({ message: "Visa-free country deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
