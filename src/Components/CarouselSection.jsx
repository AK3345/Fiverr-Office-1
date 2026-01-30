import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://www.globallogic.com/wp-content/uploads/2025/03/home_bnnr-img-300x169.jpg",
    title: "Discover SoftEdge VelocityAI: Intelligence Built for Impact",
  },
  {
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    title: "Engineering Digital Platforms for the Future",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Transforming Businesses with AI & Data",
  },
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Innovation at the Intersection of Design & Engineering",
  },
];

const CarouselSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg h-[500px]">
          <img
            src={slides[current].img}
            alt=""
            className="w-full h-full object-cover transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-8 left-8 max-w-xl">
            <h2 className="text-white text-2xl md:text-3xl font-semibold leading-snug">
              {slides[current].title}
            </h2>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-between mt-6">

          {/* PROGRESS BAR */}
          <div className="flex-1 mr-6 h-[3px] bg-gray-300 rounded overflow-hidden">
            <div
              className="h-full bg-cyan-500 transition-all duration-500"
              style={{ width: `${((current + 1) / slides.length) * 100}%` }}
            />
          </div>

          {/* ARROWS */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-cyan-50 transition"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-cyan-50 transition"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CarouselSection;
