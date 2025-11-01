import React from "react";
import { LogOut } from "lucide-react";

const AdminNavbar = ({ onLogout }) => {
  return (
    <nav className="flex justify-between items-center bg-blue-800 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold tracking-wide">Admin Dashboard</h1>
      <button
        onClick={onLogout}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-md transition"
      >
        <LogOut size={18} /> Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;
