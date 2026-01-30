import React from "react";

const industries = [
  "Private Equity",
  "Retail & Consumer",
  "Communications & Network Providers",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Industrial & Energy",
  "Media & Entertainment",
  "Mobility",
  "Technology",
];

const IndustriesSection = () => {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Small label */}
        <p className="text-sm text-gray-500 mb-6">
          Our industries
        </p>

        {/* Big text */}
        <h2 className="text-[2.2rem] md:text-[3rem] leading-snug font-medium text-gray-500 max-w-6xl">
          {industries.map((item, index) => (
            <span key={item}>
              <span className="hover:text-cyan-600 cursor-pointer transition">
                {item}
              </span>
              {index !== industries.length - 1 && (
                <span className="mx-3 text-gray-400">·</span>
              )}
            </span>
          ))}
        </h2>

      </div>
    </section>
  );
};

export default IndustriesSection;
