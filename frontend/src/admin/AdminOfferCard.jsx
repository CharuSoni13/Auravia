import React from "react";
import { Trash2, Pencil } from "lucide-react";

const AdminOfferCard = ({ offer, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={offer.image}
        alt={offer.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
      <p className="text-gray-500 text-sm mb-2">{offer.discount}</p>
      <p className="text-sm text-gray-400">Code: {offer.code}</p>
      <p className="text-sm text-gray-400 mb-3">Expiry: {offer.expiry}</p>
      <div className="flex justify-between mt-2">
        <button
          onClick={() => onEdit(offer)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <Pencil size={16} /> Edit
        </button>
        <button
          onClick={() => onDelete(offer._id)}
          className="flex items-center gap-2 text-red-600 hover:text-red-800"
        >
          <Trash2 size={16} /> Delete
        </button>
      </div>
    </div>
  );
};

export default AdminOfferCard;
