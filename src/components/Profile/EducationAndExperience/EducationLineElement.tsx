import React from "react";
import "./EducationAndExperienceElement.css";
import "./EducationLineElement.css";

type Props = {
  startingYear: string;
  graduationYear: string;
  educationProgramName: string;
  graduationStatusName: string;
  collegeName: string;
};

const EducationLineElement = ({ startingYear, graduationYear, educationProgramName, graduationStatusName, collegeName }: Props) => {
  return (
    <div className="education-and-experience-line-element education-line-element">
      <div
        className="circle-vertical-line 
      education-circle-vertical-line"
      >
        <div className="education-and-experience-content education-line-content">
          <ul className="education-and-experience-content-list">
            <li>
              {new Date(startingYear).getFullYear() + " - " +
                ((graduationYear !== null)
                  ?
                  new Date(graduationYear).getFullYear()
                  : "Devam ediyor")
              }
            </li>
            <li>{collegeName}</li>
            <li>{educationProgramName}</li>
            <li>{graduationStatusName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationLineElement;
