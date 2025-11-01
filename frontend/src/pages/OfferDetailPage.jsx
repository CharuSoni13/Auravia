import React from "react";
import { useParams, Link } from "react-router-dom";

const OfferDetailPage = () => {
  const { id } = useParams();

  const offers = [
    {
      id: "1",
      title: "✨ Festive Flight Sale",
      desc: "Up to 40% off on domestic and international flights. Limited period offer!",
      details:
        "Enjoy up to 40% off on all domestic and international flights booked before 15th November. Valid for select airlines and destinations only. Offer applicable on one-way and round-trip bookings made via Auravia.",
      code: "FLYFEST40",
      image:
        "https://images.unsplash.com/photo-1519582191076-c3e0b55d5740?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "2",
      title: "🏨 Hotel Weekend Deal",
      desc: "Stay 3 nights, pay for 2! Exclusive offer on top hotels and resorts.",
      details:
        "Get an extra night free on weekend stays at premium hotels. Applicable to bookings made before the end of the month.",
      code: "STAY3PAY2",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: "3",
      title: "🚗 Cab Ride Discount",
      desc: "Flat 25% off on outstation rides booked this weekend.",
      details:
        "Enjoy flat 25% off on all outstation cab bookings. Valid for trips over 100km. Weekend special offer only!",
      code: "CAB25",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=60",
    },
  ];

  const offer = offers.find((o) => o.id === id);

  if (!offer) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Offer not found 😕
        </h2>
        <Link to="/offers" className="text-blue-600 underline">
          Back to Offers
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-6 md:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={offer.image}
          alt={offer.title}
          className="h-72 w-full object-cover"
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {offer.title}
          </h1>
          <p className="text-gray-600 mb-5">{offer.desc}</p>
          <p className="text-gray-700 mb-6">{offer.details}</p>

          <div className="flex items-center justify-between">
            <span className="bg-gray-100 border border-dashed border-gray-400 px-4 py-2 rounded-lg text-blue-600 font-semibold">
              Code: {offer.code}
            </span>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>

          <Link
            to="/offers"
            className="block mt-6 text-blue-600 hover:underline text-sm"
          >
            ← Back to all offers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferDetailPage;
