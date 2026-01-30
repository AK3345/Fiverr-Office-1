import React, { useState } from "react";

const services = [
  {
    title: "Product Strategy & Experience Design",
    desc: "Design and build what’s next with help from Method, a SoftEdge company.",
  },
  {
    title: "Digital Business Transformation",
    desc: "Advance your digital transformation journey with scalable digital platforms.",
  },
  {
    title: "Intelligence Engineering",
    desc: "Leverage data and AI to transform products, operations, and outcomes.",
  },
  {
    title: "Software Product Engineering",
    desc: "Create high-value products faster with AI-powered and human-driven engineering.",
  },
  {
    title: "Technology Modernization",
    desc: "Modernize legacy systems using cloud-native and microservices approaches.",
  },
  {
    title: "Embedded Engineering & IT/OT Transformation",
    desc: "Develop embedded software, hardware, IoT, and IT/OT solutions.",
  },
  {
    title: "Cloud & DevOps Engineering",
    desc: "Accelerate innovation through cloud-native architectures and DevOps pipelines.",
  },
  {
    title: "Data Engineering & Analytics",
    desc: "Build scalable data platforms to enable advanced analytics and insights.",
  },
  {
    title: "AI & Machine Learning Solutions",
    desc: "Design, train, and deploy AI models that drive intelligent decision-making.",
  },
  {
    title: "Digital Experience Platforms",
    desc: "Create personalized, omnichannel digital experiences for customers.",
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "Protect digital assets with secure-by-design architectures and compliance solutions.",
  },
  {
    title: "Quality Engineering & Testing",
    desc: "Ensure reliability and performance through automated and AI-driven testing.",
  },
  {
    title: "Platform & API Engineering",
    desc: "Build scalable platforms and APIs to support ecosystem-driven growth.",
  },
  {
    title: "Enterprise Application Modernization",
    desc: "Re-architect enterprise applications to improve agility and scalability.",
  },
  {
    title: "Sustainability & Green Engineering",
    desc: "Develop energy-efficient, sustainable digital solutions for the future.",
  },
];

const VISIBLE_DESKTOP = 4;

const ServicesCarousel = () => {
  const [index, setIndex] = useState(0);

  const maxIndex = services.length - VISIBLE_DESKTOP;

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const progress =
    ((index + VISIBLE_DESKTOP) / services.length) * 100;

  return (
    <section className="min-h-screen bg-[#ecfeff] flex items-center">
      <div className="w-full px-8">

        {/* HEADER */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore our services
          </h2>
          <p className="mt-6 lg:mt-0 max-w-xl text-lg text-gray-600">
            Unlock the power of data, design, and engineering to fuel innovation
            and drive meaningful outcomes for your business.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden max-w-[1600px] mx-auto">
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / VISIBLE_DESKTOP)}%)`,
              width: `${(services.length * 100) / VISIBLE_DESKTOP}%`,
            }}
          >
            {services.map((item, i) => (
              <div
                key={i}
                className="w-[25%] bg-white rounded-[32px] p-10 shadow-md hover:shadow-xl transition flex flex-col justify-between min-h-[420px]"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-10 inline-flex items-center gap-2 text-cyan-600 font-medium hover:gap-3 transition"
                >
                  Learn More <span className="text-xl">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="max-w-7xl mx-auto flex items-center justify-between mt-14 px-2">

          {/* PROGRESS */}
          <div className="flex-1 mr-8 h-[3px] bg-cyan-100 rounded">
            <div
              className="h-full bg-cyan-500 rounded transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* ARROWS */}
          <div className="flex gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-12 h-12 rounded-full border border-cyan-300 text-cyan-600 hover:bg-cyan-50 disabled:opacity-30"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="w-12 h-12 rounded-full border border-cyan-300 text-cyan-600 hover:bg-cyan-50 disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesCarousel;
