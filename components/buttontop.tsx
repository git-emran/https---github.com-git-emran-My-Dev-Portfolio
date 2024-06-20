// components/BackToTopButton.js
"use client"

import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          ↑ Back to Top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
