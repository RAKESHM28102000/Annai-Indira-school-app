import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import {
  FaSchool,
  FaBook,
  FaLanguage,
  FaCalculator,
  FaRunning,
  FaStar,
} from "react-icons/fa";
import About from "./About";
import Gallery from "./Gallery";
import Activities from "./Activities";
import Blog from "./Blog";
import Contact from "./Contact";

/* -------- SECTION TITLE -------- */
const SectionTitle = ({ title }) => (
  <h2
    data-aos="fade-up"
    className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-10 
    bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 
    bg-clip-text text-transparent"
  >
    {title}
  </h2>
);

/* -------- CARD -------- */
const Card = ({ icon, title, desc }) => (
  <div
    data-aos="zoom-in"
    className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl text-center 
    hover:scale-105 hover:shadow-2xl transition duration-300"
  >
    <div className="text-4xl text-yellow-400 mb-4">{icon}</div>
    <h3 className="font-bold text-lg md:text-xl">{title}</h3>
    <p className="text-sm text-gray-300 mt-2">{desc}</p>
  </div>
);

/* -------- EVENTS -------- */
const events = [
  { name: "Colouring", date: "April 10" },
  { name: "Musical Chair", date: "April 15" },
  { name: "Vegetable Day", date: "April 18" },
  { name: "Rhymes Telling", date: "April 20" },
  { name: "Fruits Day", date: "April 25" },
  { name: "Alphabet Game", date: "May 1" },
  { name: "Fancy Dress", date: "May 5" },
  { name: "Drawing Competition", date: "May 10" },
  { name: "Story Telling", date: "May 12" },
  { name: "Yoga Day", date: "June 1" },
];

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const marquee = marqueeRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!marquee) return;

      scrollAmount += 0.4;
      marquee.scrollTop = scrollAmount;

      if (scrollAmount >= marquee.scrollHeight / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (<><>
    <div className="w-full min-h-screen text-white overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="relative w-full h-screen">

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/school_vedio.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 md:px-10">

          <div className="w-full max-w-7xl mx-auto grid md:grid-cols-4 gap-6 items-center">

            {/* LEFT CONTENT */}
            <div className="md:col-span-3 space-y-6 text-center md:text-left ">

              <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-9xl font-extrabold leading-tight  bg-gradient-to-r from-red-500 via-white to-green-500 bg-clip-text text-transparent">
                Annai Indira School
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold 
              bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 
              bg-clip-text text-transparent">
                Education | Knowledge | Discipline
              </h2>

              <p className="text-gray-300 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
                Building strong academic foundation with values, discipline,
                and holistic development.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <NavLink
                  to="/contact"
                  className="px-6 py-3 rounded-full font-semibold text-black 
                  bg-gradient-to-r from-yellow-300 to-yellow-500 
                  hover:scale-105 transition"
                >
                  Admissions Open
                </NavLink>

                <NavLink
                  to="/about"
                  className="px-6 py-3 border border-white rounded-full 
                  hover:bg-white hover:text-black transition"
                >
                  Learn More
                </NavLink>
              </div>
            </div>

            {/* RIGHT MARQUEE */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 
            h-[250px] sm:h-[300px] overflow-hidden">

              <h3 className="text-center font-semibold mb-3 text-sm md:text-base">
                Upcoming Events
              </h3>

              <div
                ref={marqueeRef}
                className="h-full overflow-hidden hover:overflow-auto"
              >
                {[...events, ...events].map((event, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedEvent(event)}
                    className="p-3 border-b border-white/20 cursor-pointer 
                    hover:bg-white/20 transition"
                  >
                    <p className="font-semibold text-sm">{event.name}</p>
                    <p className="text-xs text-gray-300">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POPUP */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#1f2937] p-6 rounded-xl w-full max-w-md text-center">
            <h2 className="text-xl font-bold">{selectedEvent.name}</h2>
            <p className="text-gray-300 mt-2">
              Date: {selectedEvent.date}
            </p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-4 px-6 py-2 bg-purple-500 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* HIGHLIGHTS */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#1a1a2e] to-black">
        <SectionTitle title="Key Highlights" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card icon={<FaSchool />} title="Academics" desc="Strong curriculum" />
          <Card icon={<FaLanguage />} title="Languages" desc="Communication skills" />
          <Card icon={<FaCalculator />} title="Abacus" desc="Mental math" />
          <Card icon={<FaRunning />} title="Sports" desc="Physical growth" />
          <Card icon={<FaStar />} title="Values" desc="Ethics & discipline" />
          <Card icon={<FaBook />} title="Learning" desc="Knowledge-based" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-4 sm:px-6 bg-black">
        <SectionTitle title="Our Strength" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          <Stat value="2000+" label="Alumni" />
          <Stat value="35+" label="Years" />
          <Stat value="1000+" label="Books" />
        </div>
      </section>
      <section data-aos="zoom-in" className="text-center bg-gradient-to-r from-[#36064D] to-[#552586] py-16 px-6 rounded-2xl" > <h2 className="text-2xl md:text-4xl font-bold mb-4"> Admissions Open </h2> <p className="text-gray-200 mb-6 text-sm md:text-base"> Join us today and shape your child’s future with quality education </p> <NavLink to="/contact" className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#7F00FF] to-[#E100FF] hover:scale-110 hover:shadow-xl transition duration-300"> Join Us Today! </NavLink> </section>

    </div>
    </>
    <About/>
    <Gallery/>
    <Activities/>
    <Blog/>
    <Contact/>
    </>
  );
}

/* -------- STATS -------- */
const Stat = ({ value, label }) => (
  <div className="bg-white/10 p-6 rounded-xl hover:scale-105 transition">
    <h3 className="text-2xl md:text-3xl font-bold text-yellow-300">
      {value}
    </h3>
    <p className="text-gray-400 text-sm mt-1">{label}</p>
  </div>
);