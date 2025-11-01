import React, { useEffect, useState } from "react";
import axios from "axios";

const SaleSection = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/sales").then((res) => setSales(res.data));
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Special Sales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sales.map((s) => (
          <div key={s._id} className="shadow-lg rounded-lg overflow-hidden bg-white">
            <img src={s.image} alt={s.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
              <a href={s.link} className="text-blue-600 font-semibold mt-2 block">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaleSection;
