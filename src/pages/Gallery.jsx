import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/classroom.jpg",
  "/images/ground.png",
  "/images/playarea.png",
  "/images/stud_act1.jpg",
  "/images/stud_act2.jpg",
  "/images/student_dance.jpg",
  "/images/school-gate.png",
  "/images/school-1.png",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen backdrop-blur-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 py-16">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          School Gallery
        </h1>
        <p className="text-gray-300 mt-3 text-sm md:text-base">
          Capturing beautiful moments of learning and fun
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid gap-4 
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

        {images.map((img, index) => (
          <motion.div
            key={index}
            layout
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer overflow-hidden rounded-xl group"
            onClick={() => setSelected(img)}
          >
            {/* IMAGE */}
            <img
              src={img}
              alt="gallery"
              className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl"
            />

            {/* HOVER EFFECT */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-sm">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* IMAGE BOX */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selected}
                alt="preview"
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-black backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-red-500 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}