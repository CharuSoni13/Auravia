import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { Pencil, Trash2 } from "lucide-react";

const AddDeal = () => {
  const [deals, setDeals] = useState([]);
  const [form, setForm] = useState({ title: "", location: "", price: "", image: "" });

  const fetchDeals = async () => {
    const res = await axios.get("/api/deals");
    setDeals(res.data);
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/deals/add", form);
    setForm({ title: "", location: "", price: "", image: "" });
    fetchDeals();
  };

  const handleDelete = async (id) => {
    await axios.get(`/api/deals/delete/${id}`);
    fetchDeals();
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <AdminNavbar />
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Deal</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="border p-2 rounded-md"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Add Deal
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {deals.map((d) => (
              <div key={d._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <img src={d.image} alt={d.title} className="h-40 w-full object-cover rounded-md" />
                <h3 className="mt-2 text-lg font-semibold">{d.title}</h3>
                <p className="text-gray-500">{d.location}</p>
                <p className="text-blue-600 font-semibold mt-1">₹{d.price}</p>
                <div className="flex justify-between mt-2">
                  <button className="flex items-center text-blue-600 gap-1">
                    <Pencil size={16} /> Edit
                  </button>
                  <button onClick={() => handleDelete(d._id)} className="flex items-center text-red-600 gap-1">
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDeal;
