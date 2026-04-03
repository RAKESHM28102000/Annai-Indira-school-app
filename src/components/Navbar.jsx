import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Activities", path: "/activities" },
    { label: "Gallery", path: "/gallery" }, // ✅ NEW
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  /* -------- SCROLL HIDE/SHOW -------- */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scroll down → hide
      } else {
        setShowNav(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 
      ${showNav ? "translate-y-0" : "-translate-y-full"} 
      bg-[#36064D]/80 backdrop-blur-lg text-white shadow-lg border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpeg"
            alt="School Logo"
            className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white object-contain"
          />
          <h1 className="font-bold text-sm md:text-lg tracking-wide">
            Annai Indira School
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative group ${
                  isActive
                    ? "text-yellow-300 font-semibold"
                    : "text-white hover:text-yellow-300"
                }`
              }
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-[#552586]/95 backdrop-blur-lg flex flex-col items-center gap-6 py-6"
          >
            {/* LOGO */}
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpeg"
                alt="School Logo"
                className="h-10 w-10 rounded-full bg-white"
              />
              <span className="font-semibold text-lg">
                Annai Indira School
              </span>
            </div>

            {/* MENU ITEMS */}
            {menuItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-lg ${
                      isActive
                        ? "text-yellow-300 font-semibold"
                        : "text-white"
                    } hover:text-yellow-300 transition`
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