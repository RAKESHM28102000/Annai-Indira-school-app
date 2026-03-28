import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaArrowUp } from "react-icons/fa";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Container */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">

        {/* WhatsApp - Admission Message */}
        <a
          href="https://wa.me/919715094250?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20your%20school."
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
          title="WhatsApp Admission Enquiry"
        >
          <FaWhatsapp size={20} />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919715094250"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
          title="Call Now"
        >
          <FaPhoneAlt size={18} />
        </a>

        {/* Email Button */}
        <a
          href="mailto:annaiindiraschl@gmail.com?subject=Admission%20Enquiry&body=Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
          title="Send Email"
        >
          <FaEnvelope size={18} />
        </a>
      </div>

      {/* Scroll Top Button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
          title="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}