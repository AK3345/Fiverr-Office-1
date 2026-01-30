import React, { useState } from "react";

/* ================= SERVICES ================= */
const ServicesMegaMenu = () => (
  <div className="absolute left-0 right-0 top-full bg-[#f0fdff] border-t border-cyan-100">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-10">
      <div className="col-span-2 grid grid-cols-2 gap-8 text-sm">
        {[
          ["Product Strategy & Experience Design", "Define software-driven value chains."],
          ["Digital Business Transformation", "Advance your digital transformation journey."],
          ["Intelligence Engineering", "Leverage data and AI."],
          ["Software Product Engineering", "Build high-value products faster."],
          ["Technology Modernization", "Reduce risk and maximize impact."],
          ["Embedded Engineering & IT/OT Transformation", "Build IoT solutions."],
        ].map(([title, desc]) => (
          <div key={title}>
            <h4 className="font-semibold hover:text-cyan-600 transition">
              {title}
            </h4>
            <p className="text-xs text-gray-600">{desc}</p>
          </div>
        ))}
      </div>

      <img
        className="rounded-xl object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1580281657521-6c5e1b52a6f7"
        alt=""
      />
    </div>
  </div>
);

/* ================= INDUSTRIES ================= */
const IndustriesMegaMenu = () => (
  <div className="absolute left-0 right-0 top-full bg-[#f0fdff] border-t border-cyan-100">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 gap-x-32 text-lg">
      <div className="divide-y divide-cyan-100">
        {["Private Equity","Financial Services","Industrial & Energy","Mobility","Technology"].map(i => (
          <div key={i} className="py-4 hover:text-cyan-600 cursor-pointer transition">{i}</div>
        ))}
      </div>
      <div className="divide-y divide-cyan-100">
        {["Communications & Network Providers","Healthcare & Life Sciences","Media & Entertainment","Retail & Consumer"].map(i => (
          <div key={i} className="py-4 hover:text-cyan-600 cursor-pointer transition">{i}</div>
        ))}
      </div>
    </div>
  </div>
);

/* ================= INSIGHTS ================= */
const InsightsMegaMenu = () => (
  <div className="absolute left-0 right-0 top-full  bg-[#f0fdff] border-t border-cyan-100">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-10">

      <div className="divide-y divide-cyan-100 text-lg">
        {["Blogs","Reports","Press Releases","Events","Case Studies"].map(i => (
          <div key={i} className="py-4 hover:text-cyan-600 cursor-pointer transition">{i}</div>
        ))}
      </div>

      <div className="col-span-2 grid grid-cols-2 gap-8">
        {[
          {
            title: "Hitachi agrees to acquire German AI firm",
            date: "September 23, 2025",
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          },
          {
            title: "GlobalLogic and Ericsson deploy Private 5G",
            date: "September 10, 2025",
            img: "https://images.unsplash.com/photo-1581091215367-59ab6b2e7f75",
          },
        ].map(card => (
          <div key={card.title} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl">
              <img src={card.img} className="h-40 w-full object-cover group-hover:scale-105 transition" />
              <span className="absolute top-3 left-3 bg-cyan-600 text-white text-xs px-2 py-1 rounded">
                Press Release
              </span>
            </div>
            <p className="text-xs mt-3 text-gray-500">{card.date}</p>
            <h4 className="font-semibold group-hover:text-cyan-600 transition">
              {card.title}
            </h4>
          </div>
        ))}
      </div>

    </div>
  </div>
);

/* ================= ABOUT US ================= */
const AboutMegaMenu = () => (
  <div className="absolute left-0 right-0 top-full bg-[#f0fdff] border-t border-cyan-100">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-12">

      {/* LEFT LIST */}
      <div className="col-span-1 divide-y divide-cyan-100 text-lg">
        {[
          "About GlobalLogic",
          "Leadership",
          "Partners",
          "Sustainability",
          "Locations",
          "Press Room",
          "Events",
        ].map(item => (
          <div
            key={item}
            className="py-4 hover:text-cyan-600 cursor-pointer transition"
          >
            {item}
          </div>
        ))}
      </div>

      {/* RIGHT CARDS */}
      <div className="col-span-2 grid grid-cols-2 gap-8">
        {[
          {
            title: "Hitachi agrees to acquire German data and AI services firm",
            date: "September 23, 2025",
            img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
          },
          {
            title: "GlobalLogic and Ericsson Deploy Private 5G Network",
            date: "September 10, 2025",
            img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
          },
        ].map(card => (
          <div key={card.title} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={card.img}
                className="h-44 w-full object-cover group-hover:scale-105 transition"
              />
              <span className="absolute top-3 left-3 bg-white text-xs px-2 py-1 rounded shadow">
                Press Release
              </span>
            </div>
            <p className="text-xs mt-3 text-gray-500">{card.date}</p>
            <h4 className="font-semibold group-hover:text-cyan-600 transition">
              {card.title}
            </h4>
          </div>
        ))}
      </div>

    </div>
  </div>
);

const CareersMegaMenu = () => (
  <div className="absolute left-0 right-0 top-full bg-[#f0fdff] border-t border-cyan-100">
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="divide-y divide-cyan-100 text-lg">

        {[
          "Careers at GlobalLogic",
          "Open Positions",
          "Benefits",
          "Behind the Impact – Our People Stories",
          "Employee Value Proposition & Culture",
          "Professional Development",
        ].map(item => (
          <div
            key={item}
            className="py-4 hover:text-cyan-600 cursor-pointer transition"
          >
            {item}
          </div>
        ))}

      </div>
    </div>
  </div>
);

/* ================= NAVBAR ================= */
const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <nav
      className="bg-white relative z-50"
      onMouseLeave={() => setActive(null)}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div>
            <div className="text-2xl font-bold text-cyan-600">SoftEdge®</div>
            <div className="text-xs text-gray-500">
              A Digital Innovation Company
            </div>
          </div>

          {/* MENU */}
           <div className="hidden md:flex space-x-2">
            {[
              ["Services", "services"],
              ["Industries", "industries"],
              ["Insights", "insights"],
              ["About Us", "about"],
              ["Careers", "careers"],
            ].map(([label, key]) => (
              <span
                key={label}
                className="nav-link"
                onMouseEnter={() => key && setActive(key)}
              >
                {label}
              </span>
            ))}
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex gap-4 items-center">
            <span className="nav-link">EN ▾</span>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:scale-105 transition">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* DROPDOWNS */}
      {active === "services" && <ServicesMegaMenu />}
      {active === "industries" && <IndustriesMegaMenu />}
      {active === "insights" && <InsightsMegaMenu />}
      {active === "about" && <AboutMegaMenu />}
    {active === "careers" && <CareersMegaMenu />}

       <style jsx>{`
        .nav-link {
          padding: 8px 16px;
          border-radius: 12px;
          cursor: pointer;
          color: #374151;
          transition: all 0.3s;
        }
        .nav-link:hover {
          background: #ecfeff;
          color: #06b6d4;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
