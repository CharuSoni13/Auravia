import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const tabs = ["Holidays", "All Offers", "Hotels", "Flights", "Bus", "Bank Offers", "Activities"];

const offers = [
  {
    title: "The Year’s Biggest Deals",
    desc: "on flights, stays, packages, buses, cabs, trains & more.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Up to 25% OFF*",
    desc: "on holiday packages",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Goa, Rajasthan and Dubai",
    desc: "Grab up to 50% OFF* on flights, stays & more",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  },
  {
    title: "Luggage Partner: Grab Up to 70% OFF*",
    desc: "on Skybags.",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHVnZ2FnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    title: "Adventure Awaits: Flights & Hotels",
    desc: "Book now and get visa assistance",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "#Elite Travel Offers",
    desc: "Explore luxury stays and premium experiences",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=400&q=80",
  },
];

const OffersSection = () => {
  const [activeTab, setActiveTab] = useState("Holidays");
  const scrollRef = useRef(null);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });

  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Offers</h2>
          <div className="flex items-center gap-3">
            <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
              VIEW ALL <ArrowRight size={18} />
            </button>
            <div className="flex gap-2 ml-2">
              <button
                onClick={scrollLeft}
                className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
              >
                <ChevronLeft className="text-blue-500" size={20} />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
              >
                <ChevronRight className="text-blue-500" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-lg font-medium relative ${
                activeTab === tab
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative flex bg-white rounded-xl shadow-sm border hover:shadow-md transition p-4 h-[180px]"
            >
              {/* T&C Label */}
              <span className="absolute top-2 right-3 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-[2px] rounded-md">
                T&C’S APPLY
              </span>

              <img
                src={offer.image}
                alt={offer.title}
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0 mt-6"
              />

              {/* Text content */}
              <div className="ml-4 flex flex-col justify-between w-full text-left mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {offer.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-red-500 my-1"></div>
                  <p className="text-gray-600 text-sm">{offer.desc}</p>
                </div>
                <div className="mt-3 text-right">
                  <button className="text-blue-600 hover:underline font-semibold text-sm">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
