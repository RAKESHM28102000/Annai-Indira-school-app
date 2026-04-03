import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-4 py-16">

      {/* HERO */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-300 text-sm md:text-lg">
          We would love to hear from you. Reach out to us anytime.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* CONTACT INFO */}
        <div className="space-y-6">

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <h3 className="text-lg font-semibold">Address</h3>
            </div>
            <p className="text-gray-300 mt-2">
              6/86, Annai Indira School, Ramapuram Post, Tiruchengode Tk, Namakkal District, Tamil Nadu - 637202
            </p>

            <a
              href="https://www.google.com/maps/search/Annai%20Indira%20School/@11.43889214,78.00003142,17z"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-cyan-400 hover:underline"
            >
              View on Google Maps
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-400 text-xl" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-gray-300 mt-2">
              annaiindiraschl@gmail.com
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400 text-xl" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-gray-300 mt-2">+91 97150 94250</p>
            <p className="text-gray-300">+91 94435 57045</p>
          </div>

          {/* FEEDBACK */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-lg font-semibold mb-2">Parent Feedback</h3>
            <p className="text-gray-300">
              We welcome feedback and suggestions from parents to improve our school experience.
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition duration-300">

          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Send Message
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none text-white"
              />
            </div>

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 rounded-lg bg-white/5 outline-none text-white"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/5 outline-none text-white"
            />

            {/* Message */}
            <div className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
              <FaCommentDots className="text-gray-400 mt-2" />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-transparent outline-none text-white"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 hover:shadow-xl transition duration-300 font-semibold"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}