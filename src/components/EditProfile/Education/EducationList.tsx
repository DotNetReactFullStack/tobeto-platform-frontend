import React from "react";
import "./EducationList.css";
import EducationElement from "./EducationElement";

type Props = {};

const EducationList = (props: Props) => {
  const educationFakeData: any[] = [
    {
      programStartDate: "2014",
      programEndDate: "2019",
      graduationStatus: "Lisans",
      college: "Sinop Universitesi",
      program: "Yazılım Mühendisliği",
    },
    {
      programStartDate: "2019",
      programEndDate: "2021",
      graduationStatus: "Yüksek Lisans",
      college: "İstanbul Universitesi",
      program: "Yazılım Mühendisliği",
    },
    {
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
