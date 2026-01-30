import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const timelineData = [
  {
    time: "07:00 am",
    title: "Check email",
    desc: "Enabling 1.8B active email users",
    prev: "10:30",
    next: "08:20",
    theme: "day",
  },
  {
    time: "08:20 am",
    title: "Navigate best route to the office",
    desc: "Mapping the commute for millions of users",
    prev: "07:00",
    next: "08:45",
    theme: "day",
  },
  {
    time: "08:45 am",
    title: "Grab coffee",
    desc: "Creating memorable consumer experiences",
    prev: "08:20",
    next: "09:00",
    theme: "day",
  },
  {
    time: "09:00 am",
    title: "Join a call",
    desc: "Improving internet experience",
    prev: "08:45",
    next: "10:00",
    theme: "day",
  },
  {
    time: "10:00 am",
    title: "Pay bills",
    desc: "Connecting people with financial resources",
    prev: "09:00",
    next: "01:00",
    theme: "day",
  },
  {
    time: "01:00 pm",
    title: "Book a vacation",
    desc: "Enabling 109M travelers with loyalty programs",
    prev: "10:00",
    next: "03:30",
    theme: "day",
  },
  {
    time: "03:30 pm",
    title: "Schedule prescription pick up",
    desc: "Helping 27M patients with 236M prescriptions",
    prev: "01:00",
    next: "05:20",
    theme: "day",
  },
  {
    time: "05:20 pm",
    title: "Pick up pet from the vet",
    desc: "Supporting over 100K veterinarians",
    prev: "03:30",
    next: "07:20",
    theme: "day",
  },
  {
    time: "07:20 pm",
    title: "Check glucose levels",
    desc: "Providing care for 1.5M diabetes patients",
    prev: "05:20",
    next: "08:00",
    theme: "night",
  },
  {
    time: "08:00 pm",
    title: "Stream your favorite show",
    desc: "Powering top services for 60M+ active users",
    prev: "07:20",
    next: "10:30",
    theme: "night",
  },
  {
    time: "10:30 pm",
    title: "Sleep tight",
    desc: "Enhancing sleep quality for 14M+ people globally",
    prev: "08:00",
    next: "07:00",
    theme: "night",
  },
];

export default function ImpactTimeline() {
  const [index, setIndex] = useState(0);
  const current = timelineData[index];
  const isNight = current.theme === "night";

  const next = () => setIndex((index + 1) % timelineData.length);
  const prev = () =>
    setIndex((index - 1 + timelineData.length) % timelineData.length);

  return (
    <section
      className={`min-h-screen transition-colors duration-700 flex flex-col justify-center
      ${isNight ? "bg-[#0f172a] text-white" : "bg-[#ecfeff] text-gray-900"}`}
    >
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          We have a profound impact on everyday life
        </h2>
        <p className="text-lg opacity-80">
          Every day, billions of people connect with products, platforms, and
          services that we helped design and engineer.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-5xl mx-auto w-full px-6">
        {/* TIMES */}
        <div className="flex justify-between text-sm opacity-70 mb-6">
          <span>{current.prev}</span>
          <span>{current.next}</span>
        </div>

        {/* CURVE */}
        <div className="relative h-40">
          <svg
            viewBox="0 0 1000 200"
            className="absolute w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 Q500,20 1000,120"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="3"
            />
          </svg>

          {/* CENTER ICON */}
          <div className="absolute left-1/2 top-[40px] -translate-x-1/2 bg-white text-cyan-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            {isNight ? <Moon size={22} /> : <Sun size={22} />}
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-center mt-[-30px]">
          <h3 className="text-5xl font-bold mb-2">{current.time}</h3>
          <p className="text-lg font-semibold mb-2">{current.title}</p>
          <p className="opacity-80">{current.desc}</p>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center items-center gap-10 mt-16">
          <button
            onClick={prev}
            className="text-2xl hover:scale-110 transition"
          >
            ←
          </button>

          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-100">
            {timelineData.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition ${
                  i === index ? "bg-cyan-500 scale-125" : "bg-cyan-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="text-2xl hover:scale-110 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
