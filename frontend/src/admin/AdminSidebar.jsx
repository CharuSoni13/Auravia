import React from "react";
import { Home, PlusCircle, Gift, Plane, Globe, Tag, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: <Home size={18} />, path: "/admin" },
  { label: "Add Deal", icon: <PlusCircle size={18} />, path: "/admin/add-deal" },
  { label: "Add International", icon: <Globe size={18} />, path: "/admin/add-international" },
  { label: "Add Offer", icon: <Gift size={18} />, path: "/admin/add-offer" },
  { label: "Add Popular", icon: <Tag size={18} />, path: "/admin/add-popular" },
  { label: "Add Sale", icon: <Plane size={18} />, path: "/admin/add-sale" },
  { label: "Add Theme", icon: <MapPin size={18} />, path: "/admin/add-theme" },
  { label: "Add Visa-Free", icon: <Globe size={18} />, path: "/admin/add-visafree" },
];

const AdminSidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-6 space-y-6">
      <h2 className="text-lg font-semibold tracking-wide mb-4">Admin Panel</h2>
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-yellow-500 transition"
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
