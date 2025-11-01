import React, { useEffect, useState } from "react";
import {
  Plane,
  Hotel,
  Home,
  Car,
  Gift,
  HelpCircle,
  User,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* 🌐 Logo Section */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo.png"
            alt="Auravia Logo"
            className="h-10 w-auto object-contain scale-110"
          />
          <span className="text-2xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            Aura<span className="text-gray-900">via</span>
          </span>
        </Link>

        {/* 🧭 Center Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-700">
          <Link
            to="/flights"
            className="flex items-center gap-1.5 hover:text-yellow-600 transition"
          >
            <Plane className="h-5 w-5 text-yellow-600" /> Flights
          </Link>
          <Link
            to="/hotels"
            className="flex items-center gap-1.5 hover:text-yellow-600 transition"
          >
            <Hotel className="h-5 w-5 text-yellow-600" /> Hotels
          </Link>
          <Link
            to="/homestays"
            className="flex items-center gap-1.5 hover:text-yellow-600 transition"
          >
            <Home className="h-5 w-5 text-yellow-600" /> Homestays
          </Link>
          <Link
            to="/cabs"
            className="flex items-center gap-1.5 hover:text-yellow-600 transition"
          >
            <Car className="h-5 w-5 text-yellow-600" /> Cabs
          </Link>
          <Link
            to="/offers"
            className="flex items-center gap-1.5 hover:text-yellow-600 transition"
          >
            <Gift className="h-5 w-5 text-yellow-600" /> Offers
          </Link>

          {/* ✅ Only visible to Admin */}
          {user?.role === "admin" && (
            <Link
              to="/admin-dashboard"
              className="flex items-center gap-1.5 hover:text-yellow-600 transition"
            >
              <Home className="h-5 w-5 text-yellow-600" /> Admin Dashboard
            </Link>
          )}
        </div>

        {/* 👤 Right Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/help"
            className="hidden md:flex items-center gap-1.5 text-gray-700 hover:text-yellow-600 transition"
          >
            <HelpCircle className="h-5 w-5 text-yellow-600" /> Help
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-700">
                Welcome,{" "}
                <span className="text-yellow-600 font-semibold">
                  {user.name}
                </span>
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-red-600 border border-red-500 px-3 py-1 rounded-full hover:bg-red-50 transition"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-1.5 rounded-full hover:shadow-md transition"
            >
              <User className="h-5 w-5" /> Login / Signup
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
