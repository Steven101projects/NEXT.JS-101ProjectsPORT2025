import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true); // Show button when scrolled down
      } else {
        setIsVisible(false); // Hide button when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div>
      <p
        onClick={scrollToTop}
        className={`fixed font-medium bottom-6 right-8 cursor-pointer text-3xl transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          zIndex: 999,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        1O1~
      </p>
    </div>
  );
}
