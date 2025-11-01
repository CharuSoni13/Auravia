import React from "react";

const HomestaysPage = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-gray-800">
      {/* -------------- HERO SECTION -------------- */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <h1 className="text-5xl font-extrabold mb-4">Feel at Home Anywhere 🏡</h1>
          <p className="text-lg mb-8">
            Discover cozy, affordable, and unique homestays around the world.
          </p>
          <button className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-100 transition-all">
            Explore Homestays
          </button>
        </div>
      </section>

      {/* -------------- SEARCH FORM -------------- */}
      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-[-50px] z-20 relative border border-emerald-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-emerald-700">
          Search Homestays
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="City / Area"
            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400"
          />
          <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400">
            <option>2 Guests</option>
            <option>4 Guests</option>
            <option>6 Guests</option>
          </select>
          <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-400">
            <option>Any Budget</option>
            <option>Below ₹3000</option>
            <option>₹3000 - ₹7000</option>
            <option>₹7000 and above</option>
          </select>
          <button className="bg-emerald-600 text-white rounded-lg py-3 font-semibold hover:bg-emerald-700 transition-all">
            Search Homestays
          </button>
        </div>
      </section>

      {/* -------------- FEATURED HOMESTAYS -------------- */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-emerald-700">
          Featured Homestays
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Mountain View Cottage, Manali",
              img: "https://images.unsplash.com/photo-1613977257365-9f73b6b1cd73?auto=format&fit=crop&w=800&q=80",
              price: "₹2,999/night",
            },
            {
              name: "Riverside Villa, Rishikesh",
              img: "https://images.unsplash.com/photo-1600585154511-163f1b6c22c4?auto=format&fit=crop&w=800&q=80",
              price: "₹3,499/night",
            },
            {
              name: "Goan Beach Shack Stay",
              img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80",
              price: "₹4,299/night",
            },
          ].map((stay, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-white"
            >
              <img
                src={stay.img}
                alt={stay.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{stay.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{stay.price}</p>
                <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------- HOMESTAY OFFERS -------------- */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-emerald-700">
            Special Offers on Homestays
          </h2>
          <p className="text-gray-600 mb-10">
            Save big when you book cozy homestays for your next getaway!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Flat 20% Off on Hill Station Stays",
                code: "HILL20",
              },
              {
                title: "₹1000 Cashback on Weekend Bookings",
                code: "WEEKEND1000",
              },
              {
                title: "Early Bird: Save ₹500",
                code: "EARLY500",
              },
            ].map((offer, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-6 border border-emerald-200"
              >
                <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Use Code:{" "}
                  <span className="font-bold text-emerald-700">{offer.code}</span>
                </p>
                <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition-all">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------- TESTIMONIALS -------------- */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-emerald-700">
          What Guests Loved
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Sharma",
              quote:
                "Beautiful homestay surrounded by nature! Hosts were so welcoming.",
            },
            {
              name: "Aman Verma",
              quote:
                "Perfect stay for digital detox. Peaceful environment and tasty food.",
            },
            {
              name: "Neha Gupta",
              quote:
                "Loved the experience! Will definitely book again through Auravia.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border border-emerald-100"
            >
              <p className="italic mb-3">“{t.quote}”</p>
              <h4 className="font-semibold text-emerald-700">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* -------------- CTA SECTION -------------- */}
      <section className="bg-emerald-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Find Your Perfect Homestay
        </h2>
        <p className="mb-6 text-emerald-100">
          Book stays that feel like home, anywhere in the world.
        </p>
        <button className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg hover:bg-emerald-100 transition-all">
          Start Booking
        </button>
      </section>
    </div>
  );
};

export default HomestaysPage;
