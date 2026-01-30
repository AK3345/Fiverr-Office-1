import React from "react";

const FinalCTA = () => {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">

          {/* LEFT TEXT */}
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Let’s start <br />
              engineering impact <br />
              together.
            </h2>

            <p className="mt-8 text-lg text-gray-600 max-w-xl">
              SoftEdge provides unique experience and expertise at the
              intersection of data, design, and engineering.
            </p>
          </div>

          {/* CTA BUTTON */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-4 bg-cyan-500 hover:bg-cyan-600 transition text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Get in touch
              <span className="bg-white text-cyan-600 rounded-full w-10 h-10 flex items-center justify-center text-xl">
                →
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
