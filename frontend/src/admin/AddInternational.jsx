import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { Trash2 } from "lucide-react";

const AddInternational = () => {
  const [destinations, setDestinations] = useState([]);
  const [form, setForm] = useState({ country: "", duration: "", price: "", image: "" });

  const fetchData = async () => {
    const res = await axios.get("/api/international");
    setDestinations(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/international/add", form);
    setForm({ country: "", duration: "", price: "", image: "" });
    fetchData();
  };

  const handleDelete = async (id) => {
    await axios.get(`/api/international/delete/${id}`);
    fetchData();
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 bg-gray-100">
        <AdminNavbar />
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Add International Destination</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <input
              type="text"
              placeholder="Country"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Duration"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
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
              Add Destination
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {destinations.map((d) => (
              <div key={d._id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg">
                <img src={d.image} alt={d.country} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-lg font-semibold mt-2">{d.country}</h3>
                <p className="text-gray-500">{d.duration}</p>
                <p className="text-blue-600 font-semibold mt-1">₹{d.price}</p>
                <button
                  onClick={() => handleDelete(d._id)}
                  className="flex items-center gap-1 text-red-600 mt-2"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInternational;
