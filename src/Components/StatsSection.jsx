import React from "react";

const StatsSection = () => {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage:
          "url('https://www.globallogic.com/wp-content/themes/globallogic/images/counter_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[28px] shadow-xl p-12 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">

          {/* Stat 1 */}
          <div>
            <div className="text-5xl font-bold text-gray-900">67</div>
            <div className="mt-3 text-lg text-gray-700">
              product engineering centers
            </div>
          </div>

          {/* Stat 2 (highlighted) */}
          <div className="bg-cyan-50 rounded-2xl p-6">
            <div className="text-5xl font-bold text-cyan-600">583</div>
            <div className="mt-3 text-lg text-gray-700">
              active clients
            </div>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-5xl font-bold text-gray-900">32,000+</div>
            <div className="mt-3 text-lg text-gray-700">
              professionals in 26 countries
            </div>
          </div>

          {/* Stat 4 */}
          <div>
            <div className="text-5xl font-bold text-gray-900">2,100+</div>
            <div className="mt-3 text-lg text-gray-700">
              product releases per year
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
