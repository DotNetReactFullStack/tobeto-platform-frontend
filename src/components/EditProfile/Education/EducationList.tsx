import React from "react";
import "./EducationList.css";
import EducationElement from "./EducationElement";

type Props = {};

const EducationList = (props: Props) => {
  const educationFakeData: any[] = [
    {
      educationId: "education1",
      programStartDate: "2014",
      programEndDate: "2019",
      graduationStatus: "Lisans",
      college: "Sinop Universitesi",
      program: "Yazılım Mühendisliği",
    },
    {
      educationId: "education2",
      programStartDate: "2019",
      programEndDate: "2021",
      graduationStatus: "Yüksek Lisans",
      college: "İstanbul Universitesi",
      program: "Yazılım Mühendisliği",
    },
    {
      educationId: "education3",
      programStartDate: "2021",
      programEndDate: "2023",
      graduationStatus: "Doktora",
      college: "Uludağ Universitesi",
      program: "Yazılım Mühendisliği",
    },
  ];

  return (
    <div className="education-list">
      {educationFakeData.map((value, index) => (
        <EducationElement
          key={index}
          educationId={value.educationId}
          programStartDate={value.programStartDate}
          programEndDate={value.programEndDate}
          graduationStatus={value.graduationStatus}
          college={value.college}
          program={value.program}
        />
      ))}
    </div>
  );
};

export default EducationList;
