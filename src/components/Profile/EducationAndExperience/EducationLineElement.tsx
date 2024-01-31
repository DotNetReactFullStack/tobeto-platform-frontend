import React from "react";
import "./EducationAndExperienceElement.css";
import "./EducationLineElement.css";

type Props = {
  startYear: string;
  endYear: string;
  name: string;
  content: string;
};

const EducationLineElement = ({ startYear, endYear, name, content }: Props) => {
  return (
    <div className="education-and-experience-line-element education-line-element">
      <div
        className="circle-vertical-line 
      education-circle-vertical-line"
      >
        <div className="education-and-experience-content education-line-content">
          <ul className="education-and-experience-content-list">
            <li>{startYear + "/" + endYear}</li>
            <li>{name}</li>
            <li>{content}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationLineElement;
