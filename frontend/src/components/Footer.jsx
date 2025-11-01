import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#fffaf4] text-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-200 pb-10">
        
        {/* 1️⃣ Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Auravia</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Discover, explore, and plan your perfect getaway with Auravia.
            From breathtaking destinations to exclusive offers, we make travel dreams come true.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-yellow-600 cursor-pointer transition">Home</li>
            <li className="hover:text-yellow-600 cursor-pointer transition">About Us</li>
            <li className="hover:text-yellow-600 cursor-pointer transition">Destinations</li>
            <li className="hover:text-yellow-600 cursor-pointer transition">Offers</li>
            <li className="hover:text-yellow-600 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* 3️⃣ Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-yellow-600 cursor-pointer transition">FAQ</li>
            <li className="hover:text-yellow-600 cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-yellow-600 cursor-pointer transition">Terms & Conditions</li>
            <li className="hover:text-yellow-600 cursor-pointer transition">Travel Guides</li>
          </ul>
        </div>

        {/* 4️⃣ Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h3>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <Mail className="w-4 h-4 text-yellow-600" /> support@auravia.com
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2 mt-1">
            <Phone className="w-4 h-4 text-yellow-600" /> +91 98765 43210
          </p>

          <div className="flex items-center gap-4 mt-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-yellow-600 transition" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-yellow-600 transition" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-yellow-600 transition" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-yellow-600 transition" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-800">Auravia</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
