import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaImages,
  FaPhone,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a0026] via-[#36064D] to-black text-white py-12 px-4 sm:px-6 mt-10">

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-center">

        {/* SCHOOL INFO */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center md:text-left">
            Annai Indira School
          </h2>
          <p className="mt-2 text-gray-300 text-center md:text-left">
            Education | Knowledge | Discipline
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 flex flex-col items-center md:items-center">

            <li>
              <NavLink to="/" className="flex items-center gap-2 justify-center hover:text-cyan-400 transition">
                <FaHome /> Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="flex items-center gap-2 justify-center hover:text-cyan-400 transition">
                <FaInfoCircle /> About
              </NavLink>
            </li>

            <li>
              <NavLink to="/activities" className="flex items-center gap-2 justify-center hover:text-cyan-400 transition">
                <FaBookOpen /> Activities
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog" className="flex items-center gap-2 justify-center hover:text-cyan-400 transition">
                <FaImages /> Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="flex items-center gap-2 justify-center hover:text-cyan-400 transition">
                <FaPhone /> Contact
              </NavLink>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <p className="flex items-center gap-2 justify-center md:justify-start text-gray-300">
            <FaPhoneAlt className="text-green-400" />
            <a href="tel:+919715094250" className="hover:text-green-400 transition">
              +91 97150 94250
            </a>
          </p>

          <p className="flex items-center gap-2 justify-center md:justify-start text-gray-300 mt-2">
            <FaEnvelope className="text-red-400" />
            <a
              href="mailto:annaiindiraschl@gmail.com"
              className="hover:text-red-400 transition"
            >
              annaiindiraschl@gmail.com
            </a>
          </p>
        </div>

      </div>

      {/* CREDIT */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 px-2">

        <p>
          Website Created By{" "}
          <a
            href="https://inspireloop.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold hover:underline"
          >
            Rakesh InspireLoop Tech
          </a>
        </p>

        <p className="mt-2">
          © 2026 Annai Indira School. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}