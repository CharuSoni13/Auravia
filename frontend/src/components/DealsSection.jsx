import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const deals = [
  {
    id: 1,
    title: "Weekend Escape Offer",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: 2,
    title: "Luxury Spa Retreat",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: 3,
    title: "Family Getaway",
    image:
      "https://images.unsplash.com/photo-1636483022318-19f623b66075?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: 4,
    title: "Honeymoon Special",
    image:
      "https://images.unsplash.com/photo-1519307212971-dd9561667ffb?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: 5,
    title: "Adventure Escape",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: 6,
    title: "Romantic Gateway",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=900",
  },
];

const DealSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < deals.length - 3) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header (same style as SaleSection) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Exclusive Deals & Offers 🌍
          </h2>
          <p className="text-sm text-gray-600 mt-2 md:mt-0">
            Grab your dream vacation deal before it’s gone!
          </p>
        </div>

        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 260}px)` }}
          >
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="min-w-[240px] rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 duration-300"
              >
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-gray-800">
                    {deal.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Book Now</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {currentIndex < deals.length - 3 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </section>
  );
};

export default DealSection;
