import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const offers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1732185833802-0aa2e5101ca8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMHNjZW5lcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
    title: "Flat 40% OFF on Domestic Hotels",
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
      "https://media.istockphoto.com/id/1406865705/photo/top-down-aerial-view-of-tropical-palm-tree-canopies-in-the-lush-green-jungle.webp?a=1&b=1&s=612x612&w=0&k=20&c=gFf8iw9cK8UCx1mqG2tpFUenmxZz8oVjR0Ijxbg7gnc=",
    title: "Explore International Holiday Deals 🌏",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1687549949102-fd170305af5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhcmslMjBzY2VuZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    title: "Travel Smarter — Save Big on Packages 💼",
  },
];

const OfferSlider = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop
          className="rounded-xl overflow-hidden shadow-md"
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <div className="relative w-full h-[250px] md:h-[380px] rounded-xl overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0  flex items-center justify-center">
                  <h2 className="text-white text-xl md:text-3xl font-semibold drop-shadow-lg">
                    {offer.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OfferSlider;
