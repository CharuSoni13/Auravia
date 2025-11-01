import React from "react";

const HotelsPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800">
      {/* -------------- HERO SECTION -------------- */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <h1 className="text-5xl font-extrabold mb-4">Book Your Dream Stay 🏨</h1>
          <p className="text-lg mb-8">Find the best hotels, villas, and resorts at unbeatable prices.</p>
          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition-all">
            Explore Hotels
          </button>
        </div>
      </section>

      {/* -------------- SEARCH FORM -------------- */}
      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-[-50px] z-20 relative border border-blue-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Search Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="City / Hotel Name"
            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
          />
          <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400">
            <option>1 Room, 2 Adults</option>
            <option>2 Rooms, 4 Adults</option>
            <option>3 Rooms, 6 Adults</option>
          </select>
          <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400">
            <option>Any Budget</option>
            <option>Below ₹3000</option>
            <option>₹3000 - ₹7000</option>
            <option>₹7000 and above</option>
          </select>
          <button className="bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-all">
            Search Hotels
          </button>
        </div>
      </section>

      {/* -------------- FEATURED HOTELS -------------- */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Featured Hotels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "The Taj Palace, Delhi",
              img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?auto=format&fit=crop&w=800&q=80",
              price: "₹9,999/night",
            },
            {
              name: "The Oberoi, Mumbai",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
              price: "₹11,499/night",
            },
            {
              name: "Leela Palace, Udaipur",
              img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
              price: "₹8,499/night",
            },
          ].map((hotel, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-white"
            >
              <img
                src={hotel.img}
                alt={hotel.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{hotel.price}</p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------- HOTEL OFFERS -------------- */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Hotel Offers & Deals
          </h2>
          <p className="text-gray-600 mb-10">
            Save more when you book your stays through us!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Flat 15% Off on Luxury Stays",
                code: "STAY15",
              },
              {
                title: "Weekend Offer: ₹500 Cashback",
                code: "WEEKEND500",
              },
              {
                title: "Early Bird Offer: Save ₹1000",
                code: "EARLY1000",
              },
            ].map((offer, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-6 border border-blue-200"
              >
                <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Use Code:{" "}
                  <span className="font-bold text-blue-700">{offer.code}</span>
                </p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------- TESTIMONIALS -------------- */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-700">
          What Guests Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Simran Kaur",
              quote:
                "Amazing experience! Booked a resort in Goa at half the price.",
            },
            {
              name: "Rahul Mehta",
              quote:
                "Super easy booking process and excellent customer support.",
            },
            {
              name: "Ananya Singh",
              quote: "Loved the hotel recommendations and exclusive discounts.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 border border-blue-100"
            >
              <p className="italic mb-3">“{t.quote}”</p>
              <h4 className="font-semibold text-blue-700">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* -------------- CTA SECTION -------------- */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Relax in Style?
        </h2>
        <p className="mb-6 text-blue-100">
          Discover top-rated hotels and book your next stay now.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition-all">
          Start Booking
        </button>
      </section>
    </div>
  );
};

export default HotelsPage;
