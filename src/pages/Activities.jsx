import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBook,
  FaChalkboardTeacher,
  FaLanguage,
  FaBrain,
  FaRunning,
  FaPaintBrush,
  FaTree,
  FaSchool,
  FaUsers,
  FaStar
} from "react-icons/fa";

export default function Activities() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Custom Counter Hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 50);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 50);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  const CounterCard = ({ number, label }) => {
    const count = useCounter(number);

    return (
      <div
        data-aos="zoom-in"
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition hover:scale-105"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-400">
          {count}
        </h2>
        <p className="text-gray-300 mt-2">{label}</p>
      </div>
    );
  };

  const Card = ({ icon, title, items, image }) => (
    <div
      data-aos="fade-up"
      className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="p-6">
        <div className="text-3xl text-blue-400 mb-3">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <ul className="space-y-2 text-sm text-gray-300">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-400">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="text-white">

      {/* HERO PARALLAX */}
      <div
        className="h-[60vh] flex items-center justify-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/images/bg3.jpg')"
        }}
      >
        <div className="bg-black/60 p-10 rounded-xl text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Activities & Programs
          </h1>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 md:px-16 py-16">

        {/* COUNTERS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <CounterCard number={500} label="Students" />
          <CounterCard number={50} label="Teachers" />
          <CounterCard number={20} label="Programs" />
        </div>

        {/* Academic */}
        <SectionTitle title="Academic Programs" />
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card
            icon={<FaSchool />}
            title="Pre-KG to UKG"
            image="https://images.unsplash.com/photo-1588072432836-e10032774350"
            items={[
              "Activity-based learning",
              "Play-way method",
              "Literacy & numeracy basics",
              "Safe environment"
            ]}
          />

          <Card
            icon={<FaBook />}
            title="Primary (Grades 1–5)"
            image="/images/classroom.jpg"
            items={[
              "Structured curriculum",
              "Concept clarity",
              "Reading & writing skills",
              "Individual attention"
            ]}
          />
        </div>

        {/* Skills */}
        <SectionTitle title="Skill Development" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card
            icon={<FaLanguage />}
            title="Language Training"
            image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            items={["Communicative English", "Communicative Hindi"]}
          />

          <Card
            icon={<FaBrain />}
            title="Abacus Training"
            image="/images/bench.png"
            items={[
              "Memory improvement",
              "Mental math skills",
              "Concentration development"
            ]}
          />

          <Card
            icon={<FaBook />}
            title="Reading Programs"
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            items={["English, Tamil, Hindi", "Vocabulary & comprehension"]}
          />
        </div>

        {/* Facilities */}
        <SectionTitle title="Facilities" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card icon={<FaChalkboardTeacher />} title="Digital Classrooms" image="/images/classroom.jpg" items={["Smart learning environment"]} />
          <Card icon={<FaRunning />} title="Playground" image="/images/playarea.png" items={["3-acre sports area"]} />
          <Card icon={<FaBook />} title="Library" image="/images/stud_act1.jpg" items={["1000+ books"]} />
          <Card icon={<FaLanguage />} title="Language Lab" image="https://images.unsplash.com/photo-1523240795612-9a054b0db644" items={["Spell Bee activities"]} />
        </div>

        {/* Growth */}
        <SectionTitle title="Holistic Growth" />
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card icon={<FaRunning />} title="Physical Education" image="https://images.unsplash.com/photo-1552674605-db6ffd4facb5" items={["Yoga", "Sports", "Karate", "Silambam"]} />
          <Card icon={<FaPaintBrush />} title="Co-Curricular Activities" image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" items={["Cultural programs", "Drawing", "Story narration", "Creative writing"]} />
        </div>

        {/* Approach */}
        <SectionTitle title="Our Approach" />
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card icon={<FaUsers />} title="Student Focused" image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b" items={["Individual attention", "Personal growth"]} />
          <Card icon={<FaChalkboardTeacher />} title="Activity Based" image="/images/student_dance.jpg" items={["Interactive learning", "Practical teaching"]} />
          <Card icon={<FaStar />} title="Value Based" image="https://images.unsplash.com/photo-1497493292307-31c376b6e479" items={["Ethics", "Discipline", "Creativity"]} />
        </div>

        {/* Social */}
        <SectionTitle title="Social Responsibility" />
        <div className="grid md:grid-cols-2 gap-8">
          <Card icon={<FaTree />} title="Environmental Activities" image="/images/stud_act2.jpg" items={["Tree plantation", "Awareness programs"]} />
        </div>

      </div>
    </div>
  );
}

/* Section Title */
function SectionTitle({ title }) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      {title}
    </h2>
  );
}