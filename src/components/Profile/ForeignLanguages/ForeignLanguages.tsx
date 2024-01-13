import React from "react";
import "./ForeignLanguages.css";
import ForeignLanguagesElement from "./ForeignLanguagesElement";

type Props = {
  data: any[];
};

const ForeignLanguages = (props: Props) => {
  return (
    <div className="foreign-languages">
      {props.data.map((foreignLanguage, index) => (
        <ForeignLanguagesElement
          key={index}
          languageName={foreignLanguage.name}
          languageLevel={foreignLanguage.level}
        />
      ))}
    </div>
  );
};

export default ForeignLanguages;
