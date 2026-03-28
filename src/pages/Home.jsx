import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState  } from "react";
import React from "react";
import {
  FaSchool,
  FaUsers,
  FaBook,
  FaLanguage,
  FaCalculator,
  FaRunning,
  FaStar,
} from "react-icons/fa";
import About from "./About";
import Activities from "./Activities";
import Blog from "./Blog";
import Contact from "./Contact";

/* ---------------- SMALL COMPONENTS ---------------- */

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12" data-aos="fade-up">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
      {title}
    </h2>
    <p className="text-gray-400 mt-2 text-sm md:text-base">{subtitle}</p>
  </div>
);

const Card = ({ icon, title, desc }) => (
  <div
    data-aos="zoom-in"
    className="bg-[#1f2937] p-6 rounded-xl text-center 
               transition-all duration-300 hover:scale-105 
               hover:bg-[#2d3748] hover:shadow-2xl cursor-pointer"
  >
    <div className="text-3xl text-yellow-400 flex justify-center mb-3">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

//stats
const StatCard = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const ref = React.useRef();

  const numericValue = parseInt(value);
  const isNumber = !isNaN(numericValue);

  // Detect when element is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Run counter only when visible
  useEffect(() => {
    if (!start || !isNumber) return;

    let current = 0;
    const end = numericValue;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [start, isNumber, numericValue]);

  return (
    <div
      ref={ref}
      data-aos="zoom-in"
      className="bg-[#1f2937] p-6 rounded-xl text-center 
                 transition-all duration-300 hover:scale-105 
                 hover:bg-[#2d3748] cursor-pointer"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-yellow-300">
        {isNumber ? `${count}+` : value}
      </h3>
      <p className="text-gray-400 text-sm mt-1">{label}</p>
    </div>
  );
};
/* ---------------- MAIN HOME ---------------- */

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return ( <div className="text-white space-y-20">
    <div className="text-white space-y-20">

      {/* HERO */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-br from-[#36064D] via-[#1a1a2e] to-[#552586] px-6 rounded-2xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div data-aos="fade-right">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Annai Indira School
            </h1>

            <h2 className="mt-3 text-lg md:text-2xl font-semibold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Education | Knowledge | Discipline
            </h2>

            <p className="mt-4 text-gray-300 text-sm md:text-base">
              A trusted institution focused on academic excellence, value-based
              education, and overall student development.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Admissions Open
              </button>

              <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <img
            data-aos="fade-left"
            src="/images/stud_act1.jpg"
            className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      {/* HIGHLIGHTS */}
      <section className="px-6">
        <SectionTitle
          title="Key Highlights"
          subtitle="What makes our school unique"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card icon={<FaSchool />} title="Academics" desc="Strong curriculum" />
          <Card icon={<FaLanguage />} title="Languages" desc="Communication skills" />
          <Card icon={<FaCalculator />} title="Abacus" desc="Mental math training" />
          <Card icon={<FaRunning />} title="Sports" desc="Physical development" />
          <Card icon={<FaStar />} title="Values" desc="Discipline & ethics" />
          <Card icon={<FaBook />} title="Learning" desc="Knowledge-based growth" />
        </div>
      </section>

      {/* STATS */}
      <section className="px-6">
        <SectionTitle
          title="Our Strength"
          subtitle="Numbers that define our journey"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <StatCard value="2000+" label="Students" />
          <StatCard value="35+" label="Years of Excellence" />
          <StatCard value="1000+" label="Books" />
          <StatCard value="Alumni" label="Strong Network" />
        </div>
      </section>

      {/* CTA */}
      <section
        data-aos="zoom-in"
        className="text-center bg-gradient-to-r from-[#36064D] to-[#552586] py-16 px-6 rounded-2xl"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Admissions Open
        </h2>

        <p className="text-gray-200 mb-6 text-sm md:text-base">
          Join us today and shape your child’s future with quality education
        </p>

        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-110 transition">
          Join Us Today!
        </button>
      </section>

    </div>
    <About/>
    <Activities/>
    <Blog/>
    <Contact/>
    </div>
  );
}