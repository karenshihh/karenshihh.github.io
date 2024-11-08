import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const content1 = (
  <div className="space-y-2">
    <h4>Parsippany, New Jersey</h4>
    <h4>December 2018 - May 2020</h4>
    <p>Managed and updated critical databases to ensure data accuracy and integrity, supporting compliance goals.</p>
    <p>Coordinated with external stakeholders regarding expiring certificates, building relationships and maintaining transparency.</p>
    <p>Assisted senior staff with document preparation, data analysis, and project workflows.</p>
  </div>
);

const content2 = (
  <div className="space-y-2">
    <h4>Allendale, NJ</h4>
    <h4>June 2020 - August 2020</h4>
    <p>Managed high-volume communications to streamline operations and improve response efficiency.</p>
    <p>Assisted with accounts payable/receivable, ensuring accurate records and timely processing.</p>
    <p>Organized and tracked loaned equipment to ensure alignment between internal and external stakeholders.</p>
  </div>
);

const content3 = (
  <div className="space-y-2">
    <p>Coordinated event logistics to ensure smooth execution of presentations and timely communication.</p>
    <p>Provided technical support for event presentations, troubleshooting issues to minimize disruptions.</p>
    <p>Collaborated with cross-functional teams to align event operations with strategic project goals.</p>
  </div>
);

const content4 = (
  <div className="space-y-2">
    <h4>Boston, MA</h4>
    <h4>February 2024 - September 2024</h4>
    <p>Managed inventory records, conducting regular audits and resolving discrepancies.</p>
    <p>Developed tracking documents to monitor inventory flow and project timelines.</p>
    <p>Collaborated with internal teams to streamline inventory transfer and vendor setup processes, contributing to project management and operational efficiency.</p>
  </div>
);

const Experience = () => {
  return (
    <div className="experience-container p-6 mt-[60vh] font-custom">
      <style>{`
        .nextui-accordion-item {
          background-color: white !important;
        }
      `}</style>
      <h1 className="text-[7vh] font-custom pb-12 text-center">Experience</h1>
      <div className="!bg-white w-full md:w-3/4 lg:w-2/3 mx-auto">
        <Accordion className="bg-white space-y-4 text-lg md:text-xl p-6 border border-white rounded-lg shadow-lg">
        <AccordionItem
            key="1"
            css={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #fff",
              borderRadius: "0.5rem",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "16px", // Optional: You can adjust padding as needed
            }}
            title={<div className="text-center">Data Entry Intern, (Docutrax)</div>}
          >            {content1}
          </AccordionItem>
          <AccordionItem key="2" title={<div className="text-center">Administrative Assistant, (Telemetrics Inc.)</div>}>
            {content2}
          </AccordionItem>
          <AccordionItem key="3" title={<div className="text-center">Intern, (National Bureau of Economic Research (Summer Institute))</div>}>
            {content3}
          </AccordionItem>
          <AccordionItem key="4" title={<div className="text-center">Inventory, (Reiwatakiya)</div>}>
            {content4}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Experience;
