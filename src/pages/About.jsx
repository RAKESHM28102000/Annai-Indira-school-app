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
               p-6 rounded-2xl shadow-xl ring-2 ring-pink-500
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
  const years = useCountUp(35);
  const awards = useCountUp(25);

  return (
    <div className="text-white pt-20 scroll-smooth backdrop-blur-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 ">

      {/* Sticky Nav */}
      <SectionNav />

      {/* HERO with PARALLAX */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('/images/pencil-ill-bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 "></div>

        <div data-aos="fade-up" className="relative z-10 max-w-3xl bg-black/60 rounded-2xl">
           <h1 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
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
          src="/images/school-1.png"
          className="rounded-2xl shadow-2xl hover:scale-105 ring-2 ring-pink-500 transition duration-500"
        />

        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
            About Us
          </h2>

          <p className="text-white mb-4">
            Established in 1989 by our respected founder,<strong> Deivathiru Mr. S. P. Nateashan, M.A.,M.Ed.,</strong>, Annai Indira School has grown from humble beginnings into a close-knit educational community that spans generations.Today, we take immense pride in our family of over <strong> 2,000 alumni </strong>who continue to inspire our students through their achievements across diverse fields. What we cherish most is the deep trust placed in us by families, many of whom are now entrusting us with the education of their own children, the next generation of our alumni.At Annai Indira School, we are more than an institution. We are a continuing legacy of belonging, shared values, and meaningful growth.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">

          <GlassCard icon={<FaUsers />} title={`${students}+`} desc="Alumni" />
          <GlassCard icon={<FaSchool />} title={`${years}+`} desc="Years" />
          <GlassCard icon={<FaAward />} title={`${awards}+`} desc="Awards" />

        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <GlassCard
          icon={<FaLightbulb />}
          title="Vision"
          desc="Our vision is to nurture young minds through education, knowledge and discipline, creating a
strong foundation for lifelong learning."
        />

        <GlassCard
          icon={<FaGlobe />}
          title="Mission"
          desc="Our mission is to provide a safe, caring and supportive environment where children can learn
and grow with confidence."
        />

      </section>

      {/* DIRECTOR */}
      <section id="director" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-1 gap-10 items-center">

        <div data-aos="fade-left" className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
            <FaUserTie /> Director's Message
          </h2>

          <div className="space-y-2 text-gray-300 text-sm md:text-base">
            <p>At Annai Indira School, we envision an educational journey that is both progressive and deeply
              rooted in enduring values.
              Our commitment lies in curating a dynamic and contemporary curriculum that integrates
              Communicative English, Communicative Hindi, General Knowledge, Computer Science and
              Value Education as core components of early learning. This balanced approach ensures that
              our students are not only academically competent but also socially aware and grounded in
              character.
              We believe that the formative years are pivotal in shaping a child’s confidence and identity.
              Through thoughtfully designed platforms such as daily prayer presentations, oratorical activities,
              competitions and sports, we nurture articulate expression, leadership qualities and
              self-assurance while gently overcoming stage hesitation.
              Our objective is to develop well-rounded learners - children who are exposed to a wide
              spectrum of skills and experiences, enabling them to discover their strengths and, in time,
              pursue their chosen path with clarity and excellence.
              With a focus on safety, care and individual attention, we strive to create an environment where
              every child feels secure, valued and inspired to grow.
              We remain dedicated to shaping confident, responsible and future-ready individuals.</p>
          </div>
        </div>

      </section>     
     {/* PRINCIPAL */}
          <section
            id="principal"
            className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >
          {/* IMAGE */}
                <div data-aos="fade-right" className="flex justify-center w-full">
                  <img
                    src="/images/principle.png"
                    alt="Principal"
                    className="
                      w-full 
                      max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]
                      aspect-[3/4] object-cover
                      rounded-2xl 
                      shadow-2xl 
                      ring-2 ring-pink-500
                      transition duration-500 
                      hover:scale-105
                    "
                  />
                </div>

            {/* CONTENT */}
            <div
              data-aos="fade-left"
              className="backdrop-blur-lg bg-white/10 border border-white/20 
              p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
                <FaUserGraduate /> Principal's Message
              </h2>

              <div className="space-y-2 text-gray-300 text-sm md:text-base">
             <p>With over 40 years of experience in education, I have always believed that every child has the
             ability to learn and grow when guided with care and patience.
             At Annai Indira Nursery and Primary School, we create a supportive environment where children
             feel encouraged, understood and confident in their learning. Each child is given the attention
             they need to improve, progress and believe in themselves.
             I strongly believe in building clear fundamentals along with values such as discipline,
             consistency and self-confidence. With the right guidance, children develop the strength to
             overcome challenges and move forward with confidence.
             To me, education is about helping every child grow into a capable and confident individual,
             ready to face the future with clarity and courage.
             It is a privilege to guide young learners and be a part of their journey.
             Mrs. N. Sumathi Preya, B.Sc., B.Ed., M.A., M.Phil.
             Principal and Correspondent.
                </p>
              </div>
            </div>
          </section>

 {/* //teacher section */}
       <section
         id="principal"
         className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
       >
         {/* IMAGE */}
<div data-aos="fade-right" className="flex justify-center w-full">
  <img
    src="/images/teachers.jpg"
    alt="Principal"
    className="w-full max-w-[280px] min-h-44 md:min-h-80 sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] object-contain
      rounded-2xl shadow-2xl ring-2 ring-pink-500 object-cover 
      transition duration-500 hover:scale-105
    "
  />
</div>
             
         {/* CONTENT */}
         <div
           data-aos="fade-left"
           className="backdrop-blur-lg bg-white/10 border border-white/20 
           p-8 rounded-2xl shadow-xl"
         >
           <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center gap-2">
             <FaUserGraduate />Teacher's Message
           </h2>
             
           <div className="space-y-2 text-gray-300 text-sm md:text-base">
          <p>A Strong Foundation for Lifelong Learning
            At Annai Indira Nursery and Primary School, we focus on creating a balanced and enriching
            learning experience where every child feels valued, supported and inspired to grow. Our
            approach blends academics, skills and values to shape confident learners.
            At our school, we are dedicated to helping every student grow, learn and shine. Our aim is not
            only to teach but to guide students so they can adapt confidently to any curriculum, including
            international ones. We believe that every child has unique talents, and we work closely with
            them to bring out their best.
            We value our students’ feedback and experiences, using them to improve our teaching and
            make learning more engaging and meaningful. As teachers whose own children also study
            here, we understand the importance of a safe, caring and supportive environment where
            students feel encouraged to explore, ask questions and develop their skills.
            Beyond academics, we focus on building confidence, creativity, and a sense of responsibility in
            every child. Our goal is to help each student become capable, thoughtful, and ready to face the
            world with confidence and curiosity
             </p>
           </div>
         </div>
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