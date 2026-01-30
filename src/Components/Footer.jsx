import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/20 pb-16">

          {/* COLUMN 1 */}
          <div className="space-y-6 text-lg">
            <a href="#" className="block hover:text-cyan-400 transition">
              Services
            </a>
            <a href="#" className="block hover:text-cyan-400 transition">
              Industries
            </a>
            <a href="#" className="block hover:text-cyan-400 transition">
               SoftEdge VelocityAI
            </a>
            <a href="#" className="block hover:text-cyan-400 transition">
              Insights
            </a>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-6 text-lg">
            <a href="#" className="block hover:text-cyan-400 transition">
              About us
            </a>
            <a href="#" className="block hover:text-cyan-400 transition">
              Careers
            </a>
          </div>

          {/* COLUMN 3 – CTA */}
          <div className="space-y-6">
            <p className="text-xl text-white/80 max-w-sm">
              Let’s start engineering impact for your business
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-4 bg-cyan-500 hover:bg-cyan-600 transition text-white px-7 py-3 rounded-full text-base font-semibold"
            >
              Get in touch
              <span className="bg-white text-cyan-600 rounded-full w-9 h-9 flex items-center justify-center text-lg">
                →
              </span>
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 text-sm text-white/70">

          {/* LEFT */}
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-cyan-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Compliance & Disclosures
            </a>
            <span>© 2026 GlobalLogic Inc. All rights reserved.</span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* LANGUAGE */}
            <select className="bg-white/10 text-white px-4 py-2 rounded-full outline-none cursor-pointer">
              <option>Global / English</option>
            </select>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {["in", "x", "ig", "fb"].map((icon) => (
                <span
                  key={icon}
                  className="w-9 h-9 rounded-full bg-white text-gray-900 flex items-center justify-center font-semibold cursor-pointer hover:bg-cyan-400 hover:text-white transition"
                >
                  {icon}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
