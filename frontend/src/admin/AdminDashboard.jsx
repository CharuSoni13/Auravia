import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminSectionCard from "./AdminSectionCard";
import { Gift, Tag, Plane, Globe } from "lucide-react";

// 🧱 Add Pages
import AddDeal from "./AddDeal";
import AddInternational from "./AddInternational";
import AddOffer from "./AddOffer";
import AddPopular from "./AddPopular";
import AddSale from "./AddSale";
import AddTheme from "./AddTheme";
import AddVisaFree from "./AddVisaFree";

const AdminDashboard = () => {
  const [data, setData] = useState({
    offers: 0,
    deals: 0,
    international: 0,
    sale: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [res1, res2, res3, res4] = await Promise.all([
          axios.get("/api/offers"),
          axios.get("/api/deals"),
          axios.get("/api/international"),
          axios.get("/api/sales"),
        ]);

        setData({
          offers: res1.data.length,
          deals: res2.data.length,
          international: res3.data.length,
          sale: res4.data.length,
        });
      } catch (err) {
        console.error("Error fetching counts:", err);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-100">
        <AdminNavbar />
        <div className="p-6">
          <Routes>
            <Route
              path="/"
              element={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <AdminSectionCard title="Total Offers" count={data.offers} icon={<Gift />} />
                  <AdminSectionCard title="Total Deals" count={data.deals} icon={<Tag />} />
                  <AdminSectionCard title="International Trips" count={data.international} icon={<Globe />} />
                  <AdminSectionCard title="Sale Packages" count={data.sale} icon={<Plane />} />
                </div>
              }
            />
            <Route path="add-deal" element={<AddDeal />} />
            <Route path="add-international" element={<AddInternational />} />
            <Route path="add-offer" element={<AddOffer />} />
            <Route path="add-popular" element={<AddPopular />} />
            <Route path="add-sale" element={<AddSale />} />
            <Route path="add-theme" element={<AddTheme />} />
            <Route path="add-visafree" element={<AddVisaFree />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
