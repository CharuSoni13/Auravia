import React from "react";
import { Calendar, MapPin, Filter, Search, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSection = () => {
  const offers = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      title: "Book Maldives Packages Including Stay & Activities 🌴",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      title: "Get ₹1000 Cashback on Flights ✈️",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1700828284504-02bd8d5fb2d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      title: "Explore International Holiday Deals 🌏",
    },
  ];

  return (
    <>
      {/* 🌍 Full-Screen Hero Section */}
      <section
        className="relative w-full h-110 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1686063717140-1cd04ce5f76e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1920')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Search Box */}
        <div className="relative z-10 bg-white/95 backdrop-blur-sm w-[95%] md:w-[85%] lg:w-[75%] xl:w-[70%] border-2 border-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Find Your Next Destination ✈️
          </h1>

          {/* Search Form */}
          <form className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full">
            {/* From */}
            <div>
              <label className="text-sm text-gray-600 font-medium">From</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="New Delhi"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* To */}
            <div>
              <label className="text-sm text-gray-600 font-medium">To</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Goa"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Departure */}
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Departure
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <input type="date" className="w-full outline-none text-sm" />
              </div>
            </div>

            {/* Return */}
            <div>
              <label className="text-sm text-gray-600 font-medium">Return</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <input type="date" className="w-full outline-none text-sm" />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Guests
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <Users className="h-4 w-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="2 Adults, 1 Child"
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* Filters */}
            <div>
              <label className="text-sm text-gray-600 font-medium">
                Filters
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <Filter className="h-4 w-4 text-gray-400 mr-2" />
                <select className="w-full outline-none text-sm bg-transparent">
                  <option>All</option>
                  <option>Luxury</option>
                  <option>Budget</option>
                  <option>5 Star</option>
                </select>
              </div>
            </div>
          </form>

          {/* Search Button (Inside Box, Centered at Bottom) */}
          <div className="flex justify-center mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* 🌅 Offer Slider Below */}
      <section className="relative z-0 -mt-10 pb-16 h-[200px]">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className="relative w-full h-[260px] md:h-[380px]">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-white text-xl md:text-3xl font-semibold text-center drop-shadow-md px-4">
                      {offer.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
