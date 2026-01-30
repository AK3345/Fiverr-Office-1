import React from "react";

const FeaturedInsights = () => {
  return (
    <section className="bg-[#ecfeff] h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Featured insights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[calc(70vh-160px)]">

          {/* LEFT – FEATURED */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-lg group h-full">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1400"
              alt="AI & Networks"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Badge */}
            <span className="absolute top-6 left-6 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs">
              Blogs
            </span>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                  AI Platforms
                </span>
                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                  Telecom
                </span>
                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                  Cloud Engineering
                </span>
              </div>

              <p className="text-sm opacity-80 mb-2">
                SoftEdge · 22 January 2026
              </p>

              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Engineering AI-Driven Networks for a Hyperconnected World
              </h3>
            </div>
          </div>

          {/* RIGHT – STACK */}
          <div className="flex flex-col gap-8 h-full">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition h-1/2">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee67f3c6b8e1?q=80&w=900"
                alt="Manufacturing AI"
                className="w-full h-1/2 object-cover"
              />

              <div className="p-5 h-1/2 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                    Blogs
                  </span>

                  <h4 className="text-lg font-semibold text-gray-900 mt-3">
                    Physical AI Transforming Smart Manufacturing
                  </h4>

                  <p className="text-gray-600 text-sm mt-2">
                    How intelligent systems are reshaping industrial operations.
                  </p>
                </div>

                <div className="flex gap-2 text-xs">
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                    Industrial AI
                  </span>
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                    Automation
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition h-1/2">
              <img
                src="https://images.unsplash.com/photo-1581091012184-7c54b8c1d7b5?q=80&w=900"
                alt="Sustainability"
                className="w-full h-1/2 object-cover"
              />

              <div className="p-5 h-1/2 flex flex-col justify-between">
                <div>
                  <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                    Research
                  </span>

                  <h4 className="text-lg font-semibold text-gray-900 mt-3">
                    Sustainable Engineering with Data & AI
                  </h4>

                  <p className="text-gray-600 text-sm mt-2">
                    Driving greener outcomes through intelligent design.
                  </p>
                </div>

                <div className="flex gap-2 text-xs">
                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
                    Sustainability
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
