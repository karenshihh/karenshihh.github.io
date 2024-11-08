import React from 'react';
import bu from '../assets/bu.png';
import redhawk from '../assets/redhawk.jpg';

const Education = () => {
    return (
        <div id="education" className="flex flex-col items-center w-full">
            <h2 className="text-[7vh] font-lucida mb-[10vh] mt-[60vh]">Education</h2>
            <div className="flex flex-row items-center justify-center w-3/5 mb-[10vh] ml-[2vw]">
                    <img src={redhawk} alt="redhawk logo" style={{ width: '30%', height: '10%' }} className="education-image" />
                    <div className="p-4 ml-[3vw] font-custom text-custom-text1">
                        <h3 className="text-2xl font-bold mr-12">Parsippany High School</h3>
                        <p className="text-xl"> Parsippany, New Jersey </p>
                        <p className="text-xl"> Graduated May 2020</p>
                </div>
                </div>
                <div className="flex flex-row items-center justify-center w-3/5 mb-[10vh] ml-[2vw]">
                <img src={bu} alt="bu logo" style={{ width: '27%', height: '10%' }} className="education-image mr-10" />
                <div className="ml-8 font-custom text-custom-text1">
                    <h3 class="text-2xl font-bold">Boston University </h3>
                    <p className="text-xl">B.A. in Economics</p>
                    <p className="text-xl"> Minor in Business Administration </p>
                    <p className="text-xl"> Boston, Massachusetts </p>
                    <p className="text-xl">Graduated May 2024</p>
                    </div>
                </div>

                <p id="coursework" className="text-center w-1/3 mt-[10vh] text-[calc(1em+0.5vw)] font-custom text-custom-text1 mb-[10vh]">
                <strong> Relevant Coursework: </strong> 
                    <p>
                    Econometrics, Micro/Macroeconomic Analysis, Economics and Legal Issues, Intro to Finance, Financial Accounting, Linear Algebra, Web Design and Internet Tech, Client Server-Side Enterprise
                    </p>
                </p>
        </div>
    );
};

export default Education;