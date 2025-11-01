import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// ✅ Import all routes (only once each)
import authRoutes from "./routes/auth.js";
import salesRoutes from "./routes/sales.js";
import dealsRoutes from "./routes/deals.js";
import visaFreeRoutes from "./routes/visaFree.js";
import themesRoutes from "./routes/themes.js";
import internationalRoutes from "./routes/international.js";
import offersRoutes from "./routes/offers.js";
import popularRoutes from "./routes/Popular.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ✅ Use routes (clean and consistent)
app.use("/auth", authRoutes);
app.use("/sales", salesRoutes);
app.use("/deals", dealsRoutes);
app.use("/visafree", visaFreeRoutes);
app.use("/themes", themesRoutes);
app.use("/international", internationalRoutes);
app.use("/offers", offersRoutes);
app.use("/popular", popularRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
