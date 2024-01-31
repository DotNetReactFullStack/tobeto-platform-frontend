import React from "react";
import "./EducationAndExperienceElement.css";
import "./ExperienceLineElement.css";

type Props = {
  startYear: string;
  endYear: string;
  name: string;
  content: string;
};

const ExperienceLineElement = ({
  startYear,
  endYear,
  name,
  content,
}: Props) => {
  return (
    <div className="education-and-experience-line-element experience-line-element">
      <div className="circle-vertical-line experience-circle-vertical-line">
        <div className="education-and-experience-content experience-line-content">
          <ul className="education-and-experience-content-list experience-content-list">
            <li>{startYear + "/" + endYear}</li>
            <li>{name}</li>
            <li>{content}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceLineElement;
