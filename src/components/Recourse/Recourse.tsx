import React from "react";
import "./Recourse.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import RecourseElement from "./RecourseElement";

type Props = {};

const Recourse = (props: Props) => {
  const recoursesFakeData: any[] = [
    {
      name: "İstanbul Kodluyor",
      type: "Bilgilendirme",
      step: "Kabul Edildi",
      description1: "İstanbul Kodluyor Başvuru Formu onaylandı",
      description2: "İstanbul Kodluyor Belge Yükleme Formu onaylandı",
    },
    {
      name: "Sinop Kodluyor",
      type: "Bilgilendirme",
      step: "Kabul Edildi",
      description1: "Sinop Kodluyor Başvuru Formu onaylandı",
      description2: "Sinop Kodluyor Belge Yükleme Formu onaylandı",
    },
  ];
  return (
    <>
      <div className="recourse-component">
        {recoursesFakeData.map((value, index) => (
          <RecourseElement
            key={index}
            name={value.name}
            type={value.type}
            step={value.step}
            description1={value.description1}
            description2={value.description2}
          />
        ))}
      </div>
      <ShowMoreButton redirectUrl="/my-profile" />
    </>
  );
};

export default Recourse;
