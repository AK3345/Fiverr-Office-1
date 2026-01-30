import React from "react";

const ImpactStatement = () => {
  return (
    <section className="bg-[#ecfeff] ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top small text */}
        <p className="max-w-xl text-lg text-gray-700 mb-12">
          <span className="font-medium text-cyan-600">SoftEdge</span>, a Hitachi
          Group Company, is a trusted digital engineering partner to the world’s
          largest and most forward-thinking companies.
        </p>

        {/* Main statement */}
        <h2 className="text-[2.8rem] md:text-[4.2rem] leading-tight font-semibold text-gray-700 max-w-6xl">
          Today, we help transform businesses and refine industries through{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            intelligent products, platforms, and services
          </span>
        </h2>

        {/* CTA */}
        <div className="mt-16 flex justify-end">
          <a
            href="#"
            className="group flex items-center gap-3 text-lg font-medium text-gray-900 transition"
          >
            <span className="group-hover:text-cyan-600 transition">
              Learn more about what sets us apart
            </span>
            <span className="text-2xl text-cyan-500 group-hover:translate-x-1 transition">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ImpactStatement;
