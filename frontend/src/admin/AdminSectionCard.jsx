import React from "react";

const AdminSectionCard = ({ title, count, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{count}</p>
      </div>
      <div className="text-blue-700">{icon}</div>
    </div>
  );
};

export default AdminSectionCard;
