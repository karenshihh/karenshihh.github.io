import React, { useState, useEffect } from "react";
import me from "../assets/me.jpg"; // Ensure the correct path to your image
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Adjust the threshold as needed
    if (currentScrollY < 100) {
      setIsVisible(true); // Show when near the top of the page
    } else {
      setIsVisible(false); // Hide when scrolling down
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Show initially after 1 second
    }, 1000);
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center text-center overflow-x-hidden">
        <div className="flex flex-row items-center justify-center mt-[5vh] mb-[40vh] ml-0">
          <img
            src={me}
            alt="image of me"
            style={{ width: "15%", height: "40%" }}
            className="main-image"
          />
          <p className={`w-100 text-[2.8em] text-[#1B1B1E] w-2/5 font-custom border-none transition-opacity duration-1000 ${isVisible ? 'animate-wave-fade-in' : 'opacity-0'}`} style={{ width: "50%" }}>
            Hi! I'm Karen! Come take a look around!
          </p>
        </div>
      </div>
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;

