import React from "react";
import me from "../assets/me.jpg";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center overflow-x-hidden">
        <div className="flex flex-row items-center justify-center mt-[5vh] mb-[40vh] ml-0">
          <img
            src={me}
            alt="image of me"
            style={{ width: "15%", height: "10%" }}
            className="main-image"
          />
          <p className="text-[2.8em] text-[#1B1B1E] w-2/5 font-custom border-none">
            Hi! My name is Karen Shih!
          </p>
        </div>
      </div>
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Footer/>

    </div>
  );
};

export default Main;
