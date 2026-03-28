import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUsers,
  FaSchool,
  FaChalkboardTeacher,
  FaAward,
  FaLightbulb,
  FaGlobe,
  FaUserTie,
  FaUserGraduate,
  FaBook,
  FaLanguage,
} from "react-icons/fa";

/* --------- Counter Hook --------- */
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

/* --------- Glass Card --------- */
const GlassCard = ({ icon, title, desc }) => (
  <div
    data-aos="zoom-in"
    className="backdrop-blur-lg bg-white/10 border border-white/20 
               p-6 rounded-2xl shadow-xl 
               hover:scale-105 hover:shadow-2xl transition duration-300"
  >
    <div className="text-yellow-300 text-2xl mb-3">{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-300 text-sm">{desc}</p>
  </div>
);

/* --------- Section Nav --------- */
const SectionNav = () => {
  const links = [
    { id: "about", label: "About" },
    { id: "vision", label: "Vision" },
    { id: "director", label: "Director" },
    { id: "principal", label: "Principal" },
    { id: "teachers", label: "Teachers" },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-5 p-3 text-sm md:text-base">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-gray-300 hover:text-yellow-300 transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const students = useCountUp(2000);
  const teachers = useCountUp(50);
  const years = useCountUp(35);
  const awards = useCountUp(25);

  return (
    <div className="text-white scroll-smooth bg-[#36064D]">

      {/* Sticky Nav */}
      <SectionNav />

      {/* HERO with PARALLAX */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('/images/bg2.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div data-aos="fade-up" className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            About Annai Indira School
          </h1>
          <p className="mt-4 text-gray-200 text-sm md:text-base">
            A legacy of excellence in education, discipline, and holistic development since 1989.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          data-aos="fade-right"
          src="/images/bench.png"
          className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
        />

        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
            About Us
          </h2>

          <p className="text-gray-300 mb-4">
            Established in 1989 by Founder <strong>Deivathiru Mr. S. P. Nateashan</strong>,
            with over <strong>2000+ alumni</strong>.
          </p>

          <p className="text-gray-400">
            Focused on Nursery & Primary education with strong academic foundations and value-based learning.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">

          <GlassCard icon={<FaUsers />} title={`${students}+`} desc="Students" />
          <GlassCard icon={<FaChalkboardTeacher />} title={`${teachers}+`} desc="Teachers" />
          <GlassCard icon={<FaSchool />} title={`${years}+`} desc="Years" />
          <GlassCard icon={<FaAward />} title={`${awards}+`} desc="Awards" />

        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <GlassCard
          icon={<FaLightbulb />}
          title="Vision"
          desc="Nurture young minds through education, knowledge and discipline."
        />

        <GlassCard
          icon={<FaGlobe />}
          title="Mission"
          desc="Provide a safe and caring environment focusing on values, confidence, and holistic growth."
        />

      </section>

      {/* DIRECTOR */}
      <section id="director" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <img
          data-aos="fade-right"
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          className="rounded-2xl shadow-2xl hover:scale-105 transition"
        />

        <div data-aos="fade-left" className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
            <FaUserTie /> Director's Message
          </h2>

          <div className="space-y-2 text-gray-300 text-sm md:text-base">
            <p>Communicative English & Hindi</p>
            <p>GK and Computer Science</p>
            <p>Value Education</p>
            <p>Leadership & competitions</p>
            <p>Confidence-building activities</p>
          </div>
        </div>

      </section>

      {/* PRINCIPAL */}
      <section id="principal" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div data-aos="fade-right" className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl order-2 md:order-1">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
            <FaUserGraduate /> Principal's Message
          </h2>

          <div className="space-y-2 text-gray-300 text-sm md:text-base">
            <p>40+ years of experience</p>
            <p>Individual attention</p>
            <p>Discipline & fundamentals</p>
            <p>Character building</p>
          </div>
        </div>

        <img
          data-aos="fade-left"
          src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd"
          className="rounded-2xl shadow-2xl order-1 md:order-2 hover:scale-105 transition"
        />

      </section>

      {/* TEACHERS */}
      <section id="teachers" className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
          Teachers' Approach
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard icon={<FaBook />} title="Balanced Learning" desc="Academics + Skills + Values" />
          <GlassCard icon={<FaLanguage />} title="Safe Environment" desc="Supportive classrooms" />
          <GlassCard icon={<FaUsers />} title="Student Focus" desc="Individual attention" />
        </div>

      </section>

    </div>
  );
}