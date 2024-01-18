import React from "react";
import "./ForeignLanguageElement.css";

type Props = {
  languageName: string;
  languageLevel: string;
};

const ForeignLanguageElement = ({ languageName, languageLevel }: Props) => {
  return (
    <div className="foreing-language-element">
      <div className="foreing-language-element-body">
        <div className="foreing-language-element-icon">
          <i className="bi bi-globe2"></i>
        </div>
        <div className="foreing-language-element-content">
          <div className="foreing-language-element-language-name">
            <span>{languageName}</span>
          </div>
          <div className="foreing-language-element-language-level">
            <span>{languageLevel}</span>
          </div>
        </div>
      </div>
      <button className="foreing-language-element-delete-button">
        <i className="bi bi-trash foreing-language-element-delete-button-icon"></i>
      </button>
    </div>
  );
};

export default ForeignLanguageElement;
