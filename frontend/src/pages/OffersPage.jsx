import React from "react";
import { Link } from "react-router-dom";

const OffersPage = () => {
  const offers = [
    {
      id: 1,
      title: "✨ Festive Flight Sale",
      desc: "Up to 40% off on domestic and international flights. Limited period offer!",
      details:
        "Enjoy up to 40% off on all domestic and international flights booked before 15th November. Valid for select airlines and destinations only.",
      code: "FLYFEST40",
      image:
        "https://images.unsplash.com/photo-1519582191076-c3e0b55d5740?auto=format&fit=crop&w=900&q=60",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "🏨 Hotel Weekend Deal",
      desc: "Stay 3 nights, pay for 2! Exclusive offer on top hotels and resorts.",
      details:
        "Book your stay for 3 nights and pay only for 2 at over 500+ premium hotels and resorts. Offer valid for weekend bookings.",
      code: "STAY3PAY2",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=60",
      bgColor: "bg-yellow-50",
    },
    {
      id: 3,
      title: "🚗 Cab Ride Discount",
      desc: "Flat 25% off on outstation rides booked this weekend.",
      details:
        "Enjoy flat 25% off on all outstation cab bookings. Offer valid for bookings made between Friday and Sunday.",
      code: "CAB25",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=60",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Exciting Offers & Discounts 🎉
        </h1>
        <p className="text-gray-600 text-lg">
          Grab the best travel deals on flights, hotels, and cab rides.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Link
            key={offer.id}
            to={`/offers/${offer.id}`}
            className={`rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform transform hover:-translate-y-2 ${offer.bgColor}`}
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-3">{offer.desc}</p>
              <span className="inline-block bg-white border border-dashed border-gray-400 px-3 py-1 rounded-lg font-semibold text-blue-600">
                {offer.code}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OffersPage;
