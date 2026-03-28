import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import Activities from "./pages/Activities";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

/// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/// Page transition wrapper
const PageWrapper = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    duration: 0.4,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

/// Routes with animation
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/activities" element={<PageWrapper><Activities /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog/></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#36064D] via-[#1a0526] to-black text-white flex flex-col">

        <Navbar />

        <ScrollToTop />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <AnimatedRoutes />
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}