import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects-container p-8 text-center">
      <h1 className="font-custom mb-6"> Projects</h1>

      <div className="text-left p-6 text-2xl">
        <h3 className="font-semibold">Personal Website</h3>
        <p className="text-xl">
          {" "}
          This is a personal website that I built to show off myself! It
          includes information on where I went to school, my skills, and some
          fun facts about me!{" "}
        </p>
      </div>

      <div className="text-left p-6 text-2xl">
        <h3 className="font-semibold">Spotify Recommendations</h3>
        <p className="text-xl">
          {" "}
          This is a website that uses Spotify's Web API to generate song
          recommendations based on user-chosen genres. 
        </p>
      </div>

      <div className="text-left p-6 text-2xl">
        <h3 className="font-semibold text-center"> In Progress </h3>
        <p className="text-xl text-center">
          I'm currently working on various data visualization projects using Python (pandas, matplotlib, scikit-learning) and PowerBI to model the data found. 
        </p>
      </div>
    </div>
  );
};

export default Projects;