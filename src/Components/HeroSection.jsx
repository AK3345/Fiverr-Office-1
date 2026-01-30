import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://www.globallogic.com/wp-content/uploads/2025/03/home_bnnr-img-300x169.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/65 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Impact
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          We design and engineer digital products and platforms that help
          businesses innovate faster and create meaningful impact.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition">
            ▶ Watch video
          </button>

          <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-100 text-cyan-700 font-semibold hover:bg-cyan-200 transition">
            Get to know us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
