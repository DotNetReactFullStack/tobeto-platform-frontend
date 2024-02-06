import React from "react";
import "./ForeignLanguageList.css";
import ForeignLanguagesElement from "./ForeignLanguageElement";

type Props = {};

const foreignLanguagesFakeData: any[] = [
  {
    foreignLanguageId: "foreingLanguage1",
    name: "İngilizce",
    level: "Orta Seviye (B1, B2)",
  },
  {
    foreignLanguageId: "foreingLanguage2",
    name: "Korece",
    level: "Temel Seviye (A1, A2)",
  },
  { foreignLanguageId: "foreingLanguage3", name: "Japonca", level: "Anadil" },
];

const ForeignLanguageList = (props: Props) => {
  return (
    <div className="foreing-language-list">
      {foreignLanguagesFakeData.map((value, index) => (
        <ForeignLanguagesElement
          key={index}
          foreignLanguageId={value.foreignLanguageId}
          languageName={value.name}
          languageLevel={value.level}
        />
      ))}
    </div>
  );
};

export default ForeignLanguageList;
