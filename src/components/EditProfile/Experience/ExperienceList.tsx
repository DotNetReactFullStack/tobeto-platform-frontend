import React from "react";
import "./ExperienceList.css";
import ExperienceElement from "./ExperienceElement";

type Props = {};

const ExperienceList = (props: Props) => {
  const experienceFakeData: any[] = [
    {
      jobStartDate: "01.01.2020",
      jobEndDate: "01.01.2021",
      companyName: "Amazon",
      job: "Back-End Developer",
      sector: "Yazılım",
      experienceCity: "Sinop",
    },
    {
      jobStartDate: "02.01.2021",
      jobEndDate: "02.01.2022",
      companyName: "Google",
      job: "Front-End Developer",
      sector: "Yazılım",
      experienceCity: "Bursa",
    },
    {
      jobStartDate: "03.01.2022",
      jobEndDate: "03.01.2023",
      companyName: "Microsoft",
      job: "Full-Stack Developer",
      sector: "Yazılım",
      experienceCity: "İstanbul",
    },
  ];

  return (
    <div className="experience-list">
      {experienceFakeData.map((value, index) => (
        <ExperienceElement
          key={index}
          jobStartDate={value.jobStartDate}
          jobEndDate={value.jobEndDate}
          companyName={value.companyName}
          job={value.job}
          sector={value.sector}
          experienceCity={value.experienceCity}
        />
      ))}
    </div>
  );
};

export default ExperienceList;
