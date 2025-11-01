import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const holidayThemes = [
  {
    id: 1,
    title: "PILGRIMAGE",
    image:
      "https://images.unsplash.com/photo-1615253043703-04abd1cbfc6f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    tags: ["Uttar Pradesh", "South India", "Gujarat"],
  },
  {
    id: 2,
    title: "GROUP TOURS",
    image:
      "https://plus.unsplash.com/premium_photo-1687279092468-66de180d47f0?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    tags: ["Europe", "Australia", "Sri Lanka"],
  },
  {
    id: 3,
    title: "LUXE HOLIDAYS",
    image:
      "https://images.unsplash.com/photo-1617365210284-aeae91b10483?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    tags: ["Beach", "Cultural", "Island", "Hill"],
  },
  {
    id: 4,
    title: "FAMILY & KIDS",
    image:
      "https://media.istockphoto.com/id/1227552766/photo/summer-holidays-are-happy-days.webp?a=1&b=1&s=612x612&w=0&k=20&c=f6hq2QpSMb6ifqWujUHcdgSrMKC53KoO1SCPAqMPeX8=",
    tags: ["Domestic", "International"],
  },
  {
    id: 5,
    title: "ADVENTURE",
    image:
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900",
    tags: ["Trekking", "Water Sports"],
  },
];

const HolidayByTheme = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < holidayThemes.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-[#fffaf4] py-12 rounded-2xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center relative">
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0 relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] bg-cover"></div>
          <img
            src="https://plus.unsplash.com/premium_photo-1673957802750-0cc6d052c6d9?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900"
            alt="Explore Holidays"
            className="relative mx-auto md:mx-0 w-60 h-60 object-cover rounded-full"
          />
          <div className="relative mt-4">
            <h3 className="text-gray-700 font-semibold text-lg">EXPLORE</h3>
            <h2 className="text-4xl font-extrabold text-gray-800">HOLIDAYS</h2>
            <h4 className="text-gray-700 font-semibold text-lg mb-3">
              BY THEME
            </h4>
            <p className="text-gray-500 text-sm">
              Pick from our specially curated packages
            </p>
          </div>
        </div>

        {/* Right Section with Cards */}
        <div className="md:w-2/3 overflow-hidden relative">
          {/* Left Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}

          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 270}px)` }}
          >
            {holidayThemes.map((theme) => (
              <div
                key={theme.id}
                className="min-w-[250px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 flex flex-col justify-between"
              >
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-40 object-cover rounded-t-xl"
                />

                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-md font-bold text-gray-800 mb-2">
                      {theme.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {theme.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="border border-blue-500 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-4 text-blue-600 font-semibold text-sm hover:underline self-center">
                    VIEW MORE
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {currentIndex < holidayThemes.length - 3 && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HolidayByTheme;
