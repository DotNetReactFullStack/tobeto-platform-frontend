import React from "react";
import "./ForeignLanguagesElement.css";

type Props = {
  languageName: string;
  languageLevel: string;
};

const ForeignLanguagesElement = ({ languageName, languageLevel }: Props) => {
  return (
    <div className="foreing-languages-element">
      <div className="foreing-languages-element-icon">
        <i className="bi bi-globe2"></i>
      </div>
      <div className="foreing-languages-element-content">
        <div className="foreing-languages-element-language-name">
          <span>{languageName}</span>
        </div>
        <div className="foreing-languages-element-language-level">
          <span>{languageLevel}</span>
        </div>
      </div>
    </div>
  );
};

export default ForeignLanguagesElement;
