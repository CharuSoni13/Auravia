import React from "react";
import { MapPin, Car, Clock, ShieldCheck, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CabPage = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/cab-results");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🏁 Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            Book Your <span className="text-yellow-600">Cabs</span> Instantly
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Affordable and reliable rides for every destination — from city tours to airport transfers, we’ve got you covered.
          </p>
        </div>

        {/* 🚘 Booking Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-16 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Find a Cab</h2>

          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">Pickup Location</label>
              <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
                <MapPin className="text-yellow-600 mr-2" />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  className="w-full focus:outline-none text-gray-700"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Drop Location</label>
              <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
                <MapPin className="text-yellow-600 mr-2" />
                <input
                  type="text"
                  placeholder="Enter drop location"
                  className="w-full focus:outline-none text-gray-700"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Pickup Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Pickup Time</label>
              <input
                type="time"
                className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none"
                required
              />
            </div>

            <div className="col-span-full text-center mt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-md transition-all"
              >
                Search Cabs
              </button>
            </div>
          </form>
        </div>

        {/* 🌟 Why Choose Us Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: Car, title: "Comfortable Rides", desc: "Clean and well-maintained cars for a smooth travel experience." },
            { icon: Clock, title: "On-Time Service", desc: "We ensure punctual pickups so you’re never late for your plans." },
            { icon: ShieldCheck, title: "Safe & Secure", desc: "Verified drivers and 24×7 support for your safety and comfort." },
            { icon: Phone, title: "24/7 Support", desc: "Our support team is available around the clock to assist you." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
              <item.icon className="mx-auto text-yellow-600 h-10 w-10 mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabPage;
