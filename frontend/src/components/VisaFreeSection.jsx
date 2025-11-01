import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const visaFreeDestinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: 2,
    name: "Thailand",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 3,
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1574223706388-0e0f6f0390b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbmV5bW9vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 4,
    name: "Mauritius",
    image:
      "https://images.unsplash.com/photo-1582574643306-d00ea3f7d49b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWF1cml0aXVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 5,
    name: "Seychelles",
    image:
      "https://images.unsplash.com/photo-1704317653969-0a8a5ea0dd10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2V5Y2hlbGxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    id: 6,
    name: "Fiji",
    image:
      "https://images.unsplash.com/photo-1579264670959-286d7b06f1ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlqaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
];

const VisaFreeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < visaFreeDestinations.length - 3)
      setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header (same as SaleSection) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Visa-Free Destinations ✈️
          </h2>
          <p className="text-sm text-gray-600 mt-2 md:mt-0">
            Explore the world with hassle-free visa destinations!
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
            {visaFreeDestinations.map((place) => (
              <div
                key={place.id}
                className="min-w-[240px] rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 duration-300"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold text-gray-800">
                    {place.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Explore Now</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {currentIndex < visaFreeDestinations.length - 3 && (
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

export default VisaFreeSection;
