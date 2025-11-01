import React from "react";

const destinations = [
  {
    name: "Kashmir",
    desc: "Kashmir Tour Packages, Kashmir Tourism, Kashmir Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Andaman",
    desc: "Andaman Tour Packages, Andaman Tourism, Andaman Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1642498232612-a837df233825?auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Ladakh",
    desc: "Ladakh Tour Packages, Ladakh Tourism, Ladakh Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1635255506105-b74adbd94026?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFkYWtofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "North East",
    desc: "North East Tour Packages, North East India Tourism, North East India Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1606504756251-70aa264f2f62?auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Goa",
    desc: "Goa Tour Packages, Goa Tourism, Goa Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Kerala",
    desc: "Kerala Tour Packages, Kerala Tourism, Kerala Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1575561616684-c82e7ae67e3e?auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Maldives",
    desc: "Maldives Tour Packages, Maldives Tourism, Maldives Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Sri Lanka",
    desc: "Sri Lanka Tour Packages, Sri Lanka Tourism, Sri Lanka Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&q=60&w=900",
  },
  {
    name: "Dubai",
    desc: "Dubai Tour Packages, Dubai Tourism, Dubai Honeymoon Packages",
    image: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
  },
];

const PopularDestinations = () => {
  return (
    <section className="bg-[#f9f9f9] py-12">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-left">
          Popular Destinations
        </h2>

        {/* Each row of destinations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-left"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 shadow-md flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {dest.name}
                </h3>
                <p className="text-gray-700 text-sm leading-snug mt-1">
                  {dest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
