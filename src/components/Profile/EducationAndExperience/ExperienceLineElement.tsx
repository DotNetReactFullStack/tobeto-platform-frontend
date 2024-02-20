import React from "react";
import "./EducationAndExperienceElement.css";
import "./ExperienceLineElement.css";

type Props = {
  startingDate: string;
  endingDate: string;
  companyName: string;
  jobTitle: string;
};

const ExperienceLineElement = ({
  startingDate,
  endingDate,
  companyName,
  jobTitle,
}: Props) => {
  return (
    <div className="education-and-experience-line-element experience-line-element">
      <div className="circle-vertical-line experience-circle-vertical-line">
        <div className="education-and-experience-content experience-line-content">
          <ul className="education-and-experience-content-list experience-content-list">
            <li>{new Date(startingDate).getFullYear() + " - " +
              ((endingDate !== null)
                ?
                new Date(endingDate).getFullYear()
                : "Devam ediyor")}</li>
            <li>{companyName}</li>
            <li>{jobTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceLineElement;
