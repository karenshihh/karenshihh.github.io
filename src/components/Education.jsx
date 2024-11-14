import React from "react";
import { Grid, Typography } from "@mui/joy";
import bu from "../assets/bu.png";
import redhawk from "../assets/redhawk.jpg";

const Education = () => {
  const coursework = [
    "Econometrics",
    "Micro/Macroeconomic Analysis",
    "Economics and Legal Issues",
    "Intro to Finance",
    "Financial Accounting",
    "Linear Algebra",
    "Web Design and Internet Tech",
    "Client Server-Side Enterprise",
    "Data Structures",
    "Database Design and Management",
  ];

  return (
    <div id="education" className="flex flex-col items-center w-full mb-[20vh]">
      <h2 className="text-[7vh] font-lucida mb-[10vh] mt-[60vh]">Education</h2>
      <div className="flex flex-row items-center justify-center w-3/5 mb-[10vh] ml-[2vw]">
        <img
          src={redhawk}
          alt="redhawk logo"
          style={{ width: "30%", height: "10%" }}
          className="education-image"
        />
        <div className="p-4 ml-[3vw] font-custom text-custom-text1">
          <h3 className="text-2xl font-bold mr-12">Parsippany High School</h3>
          <p className="text-xl"> Parsippany, New Jersey </p>
          <p className="text-xl"> Graduated May 2020</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-3/5 mb-[10vh] ml-[2vw]">
        <img
          src={bu}
          alt="bu logo"
          style={{ width: "27%", height: "10%" }}
          className="education-image mr-10"
        />
        <div className="ml-8 font-custom text-custom-text1">
          <h3 class="text-2xl font-bold">Boston University </h3>
          <p className="text-xl">B.A. in Economics</p>
          <p className="text-xl"> Minor in Business Administration </p>
          <p className="text-xl"> Boston, Massachusetts </p>
          <p className="text-xl">Graduated May 2024</p>
        </div>
      </div>

      {/* Relevant Coursework */}
      <div id="coursework" className="mt-12">
        <h3 className="text-center text-3xl font-bold mb-6">
          <strong>Relevant Coursework:</strong>
        </h3>

        <Grid
          container
          spacing={4}
          justifyContent="center" // Horizontally center the grid
          alignItems="stretch" // Ensure each item stretches vertically to fill space
          sx={{
            marginTop: "20px",
            maxWidth: "100%", // Ensure the grid doesn't overflow horizontally
            overflowX: "hidden", // Prevent horizontal overflow
            padding: "0 16px", // Optional: Add some padding to avoid items touching the edges
          }}
        >
          {coursework.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Card container with some styling */}
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <p className="text-xl text-center font-semibold text-gray-700">
                  {course}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Education;
