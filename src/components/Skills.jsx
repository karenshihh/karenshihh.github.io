import React from "react";

const Skills = () => {
  return (
    
    <div className="skills-container p-6 mt-20 font-custom w-full mb-[20vh]">
      <h1 className="text-6xl font-custom pb-12 text-center">Skills</h1>
      <ul className="list-disc list-inside space-y-4">
        <li className="text-xl text-center">
          <strong>Programming</strong>: HTML, CSS, JavaScript (React), Java,
          Python (pandas, matplotlib, scikit-learn), SQL
        </li>
        <li className="text-xl text-center">
          <strong>Software & Tools</strong>: MS Office (Excel, PowerPoint,
          Word), SQL, Power BI, Stata, Jupyter Notebook, SAS, Git
        </li>
        <li className="text-xl text-center">
          <strong>Data and Project Management</strong>: Data Entry, Data
          Modeling and Visualization, Data Collection and Cleaning, Project
          Planning, Coordination, Timeline Management, Stakeholder Communication
        </li>
      </ul>
      <h1 className="text-6xl font-custom text-center p-6 mt-20">
        Soft Skills
      </h1>
      <ul className="list-disc list-inside space-y-4">
        <li className="text-xl text-center">
          Clear and transparent communication, passion for presentations and
          public speaking
        </li>
        <li className="text-xl text-center">
          Strong organizational skills with attention to detail
        </li>
        <li className="text-xl text-center">
          Ability to multitask efficiently under tight deadlines, time
          management skills
        </li>
        <li className="text-xl text-center">
          Proactive, adaptable, and self-motivated
        </li>
        <li className="text-xl text-center">
          Expertise in relationship management, collaboration, critical
          thinking, leadership, and client relations
        </li>
      </ul>
    </div>
  );
};

export default Skills;
