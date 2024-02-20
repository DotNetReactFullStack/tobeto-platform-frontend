import React from "react";
import "./EducationAndExperienceList.css";
import EducationLineElement from "./EducationLineElement";
import ExperienceLineElement from "./ExperienceLineElement";
import { ProfileHistoryElementType } from "../../../models/profileHistoryElement/profileHistoryElementType";

type Props = {
  data: any[];
};

const EducationAndExperienceList = ({ data }: Props) => {
  return (
    <div className="education-and-experience-list">
      <div className="education-and-experience-line">

        {data.map((values, index) => {
          if (values.elementType === ProfileHistoryElementType.Education) {
            return (
              <EducationLineElement
                key={index}
                startingYear={values.educationData.startingYear}
                graduationYear={values.educationData.graduationYear}
                collegeName={values.educationData.collegeName}
                educationProgramName={values.educationData.educationProgramName}
                graduationStatusName={values.educationData.graduationStatusName}
              />
            );
          } else if (values.elementType === ProfileHistoryElementType.Experience) {
            return (
              <ExperienceLineElement
                key={index}
                startingDate={values.experienceData.startingDate}
                endingDate={values.experienceData.endingDate}
                companyName={values.experienceData.companyName}
                jobTitle={values.experienceData.jobTitle}
              />
            );
          } else {
            return (<></>)
          }
        })}
      </div>
    </div>
  );
};

export default EducationAndExperienceList;
