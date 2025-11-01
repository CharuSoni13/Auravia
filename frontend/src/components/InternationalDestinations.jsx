import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
  {
    name: "Europe",
    price: "Starting at ₹14,800 Per person",
    image: "https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXVyb3BlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Maldives",
    price: "Starting at ₹14,800 Per person",
    image: "https://media.istockphoto.com/id/1348963437/photo/foot-path-to-jetty.webp?a=1&b=1&s=612x612&w=0&k=20&c=BIFdGYKgBUhCi6MPrwjsfLjn2-RpZMLzAe4V7zEV0p4=",
  },
  {
    name: "Dubai",
    price: "Starting at ₹14,800 Per person",
    image: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1YmFpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Bali",
    price: "Starting at ₹14,800 Per person",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Japan",
    price: "Starting at ₹14,800 Per person",
    image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Thailand",
    price: "Starting at ₹14,800 Per person",
    image: "https://plus.unsplash.com/premium_photo-1661962432490-6188a6420a81?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Vietnam",
    price: "Starting at ₹14,800 Per person",
    image: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
  },
];

const InternationalDestinations = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8 relative overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              International Destinations!
            </h2>
            <p className="text-gray-600 mt-1 text-lg">
              From Bucket List to Boarding Pass!
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
            >
              <ChevronLeft className="text-blue-500" size={22} />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
            >
              <ChevronRight className="text-blue-500" size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="flex-none w-56 bg-white rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-1 transition"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {dest.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{dest.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalDestinations;
