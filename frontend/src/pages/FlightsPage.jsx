import React from "react";

const FlightsPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800">
      {/* -------------- HERO SECTION -------------- */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <h1 className="text-5xl font-extrabold mb-4">Find Your Perfect Flight ✈️</h1>
          <p className="text-lg mb-8">Compare fares, book easily, and travel the world without stress.</p>
          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition-all">
            Explore Now
          </button>
        </div>
      </section>

      {/* -------------- SEARCH FORM -------------- */}
      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-[-50px] z-20 relative border border-blue-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Search Flights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input type="text" placeholder="From" className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="To" className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400" />
          <input type="date" className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400" />
          <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400">
            <option>1 Traveller</option>
            <option>2 Travellers</option>
            <option>3 Travellers</option>
          </select>
          <select className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400">
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
          <button className="bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-all">
            Search Flights
          </button>
        </div>
      </section>

      {/* -------------- POPULAR DESTINATIONS -------------- */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { city: "Delhi → Mumbai", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80" },
            { city: "Bangalore → Goa", img: "https://images.unsplash.com/photo-1505739773365-e2270cde41e1?auto=format&fit=crop&w=800&q=80" },
            { city: "Chennai → Dubai", img: "https://images.unsplash.com/photo-1506898667547-42e1b95a8a36?auto=format&fit=crop&w=800&q=80" },
          ].map((d, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src={d.img} alt={d.city} className="w-full h-56 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{d.city}</h3>
                <p className="text-sm text-gray-500">Starting from ₹3,499</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------- OFFERS SECTION -------------- */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Exclusive Flight Offers</h2>
          <p className="text-gray-600 mb-10">Save more on your next trip with our latest flight deals.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Flat 20% Off on Domestic Flights", code: "FLY20" },
              { title: "International Flights Under ₹25,000", code: "INTL25" },
              { title: "Student Discount: ₹1,000 Cashback", code: "STUDENT1000" },
            ].map((offer, i) => (
              <div key={i} className="bg-white shadow-lg rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-500 mb-3">Use Code: <span className="font-bold text-blue-700">{offer.code}</span></p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------- TESTIMONIALS SECTION -------------- */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-700">What Our Travelers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Aarav Sharma", quote: "Booking my Goa flight was seamless and super affordable!" },
            { name: "Priya Mehta", quote: "Loved the easy UI and the quick search results!" },
            { name: "Rohit Gupta", quote: "Got great offers and smooth booking experience." },
          ].map((t, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-6 border border-blue-100">
              <p className="italic mb-3">“{t.quote}”</p>
              <h4 className="font-semibold text-blue-700">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* -------------- CTA SECTION -------------- */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Off?</h2>
        <p className="mb-6 text-blue-100">Plan your next journey and fly with comfort and savings.</p>
        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition-all">
          Start Booking
        </button>
      </section>
    </div>
  );
};

export default FlightsPage;
