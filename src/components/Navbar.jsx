import { useState } from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Activities", path: "/activities" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-[#36064D]/80 backdrop-blur-lg text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
      
      <div className="max-w-7xl mx-auto flex justify-around items-center p-4">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpeg"   // place your logo in public folder
            alt="School Logo"
            className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-3xl bg-white"
          />
          <h1 className="font-bold text-sm md:text-lg tracking-wide">
            Annai Indira School
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative group ${isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-300"}`
              }
            >
              {item.label}

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-[#552586]/95 backdrop-blur-lg flex flex-col items-center gap-6 py-6"
          >
            {/* Logo in Mobile Menu */}
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpeg" 
                alt="School Logo"
                className="h-10 w-10 object-contain rounded-3xl bg-white"
              />
              <span className="font-semibold text-lg">
                Annai Indira School
              </span>
            </div>

            {menuItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-lg transition-all duration-300 ${
                      isActive ? "text-yellow-300 font-semibold" : "text-white"
                    } hover:text-yellow-300`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}