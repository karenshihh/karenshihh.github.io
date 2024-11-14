import React, { useState, useEffect } from "react";
import me from "../assets/me.jpg"; // Ensure the correct path to your image
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import { Fade } from "react-awesome-reveal";
import "animate.css";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
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
      <div className="flex flex-row items-center justify-center mt-[15vh] mb-[20vh] ml-[10vw] gap-4">
        <img
          src={me}
          alt="image of me"
          style={{ width: "20%", height: "auto" }}
          className={`main-image animate__animated ${
            isVisible ? "animate__fadeIn" : "opacity-0"
          } mr-[4vw]`}
        />

        <p
          className={`text-[2.8em] text-[#1B1B1E] font-custom border-none transition-opacity duration-1000 ${
            isVisible ? "animate-wave-fade-in" : "opacity-0"
          }`}
          style={{ width: "50%" }}
        >
          Hi! I'm Karen! Come take a look around!
        </p>
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
