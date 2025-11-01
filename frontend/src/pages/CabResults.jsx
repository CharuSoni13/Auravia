import React from "react";
import { Car, Star } from "lucide-react";

const CabResults = () => {
  const cabs = [
    {
      name: "Sedan Cab",
      price: "₹799",
      rating: 4.7,
      desc: "Comfortable ride for up to 4 passengers.",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
    {
      name: "SUV Cab",
      price: "₹1199",
      rating: 4.8,
      desc: "Spacious cab perfect for families and luggage.",
      img: "https://images.unsplash.com/photo-1605559424843-9e4c0d5b69b5",
    },
    {
      name: "Luxury Cab",
      price: "₹1799",
      rating: 4.9,
      desc: "Premium comfort with leather seats and AC.",
      img: "https://images.unsplash.com/photo-1619643475117-b89cc3d00c31",
    },
  ];

  return (
    <section className="min-h-screen bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Available <span className="text-yellow-600">Cabs</span> Near You
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabs.map((cab, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={cab.img}
                alt={cab.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <Car className="text-yellow-600 h-5 w-5" /> {cab.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{cab.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-semibold text-lg">
                    {cab.price}
                  </span>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    {cab.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabResults;
