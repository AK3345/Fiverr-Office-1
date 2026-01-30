import React from "react";

const caseStudies = [
  {
    title: "Data-driven decision making",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  },
  {
    title: "Digital transformation at scale",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
    active: true,
  },
  {
    title: "Customer experience innovation",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
  },
  {
    title: "Global operations enablement",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800",
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-[#f8feff] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
            Discover how we’re engineering impact with clients around the world
          </h2>

          <div className="max-w-md">
            <p className="text-gray-600 mb-4">
              We work with the world’s largest and most innovative companies —
              forging deep collaborations to create intelligent products,
              platforms, and services.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition"
            >
              View all case studies <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-md transition-all duration-300
              ${
                item.active
                  ? "ring-2 ring-cyan-400 scale-105"
                  : "hover:scale-105 hover:ring-1 hover:ring-cyan-300"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
