import React from "react";
import "./EducationAndExperienceList.css";
import EducationLineElement from "./EducationLineElement";
import ExperienceLineElement from "./ExperienceLineElement";

type Props = {
  data: any[];
};

const EducationAndExperienceList = (props: Props) => {
  return (
    <div className="education-and-experience-list">
      <div className="education-and-experience-line">
        {props.data.map((data, index) =>
          data.type === "Education" ? (
            <EducationLineElement
              key={index}
              startYear={data.startYear}
              endYear={data.endYear}
              name={data.name}
              content={data.content}
            />
          ) : (
            <ExperienceLineElement
              key={index}
              startYear={data.startYear}
              endYear={data.endYear}
              name={data.name}
              content={data.content}
            />
          )
        )}
      </div>
    </div>
  );
};

export default EducationAndExperienceList;
