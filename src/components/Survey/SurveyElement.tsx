import React from "react";
import "./SurveyElement.css";

type Props = {
  id: string;
  title: string;
  organization: string;
  surveyStatus: boolean;
};

const SurveyElement = ({ id, title, organization, surveyStatus }: Props) => {
  return (
    <div
      className="survey-element"
      data-bs-toggle="modal"
      data-bs-target={`#${id}`}
    >
      <div className="survey-element-header">
        <div className="survey-element-header-left-side">
          <span className="survey-element-title">
            {title}
          </span>
        </div>
        <div className="survey-element-header-right-side">
          {
            (!surveyStatus)
              ? <i className="bi bi-hourglass-split"></i>
              : <i className="bi bi-check-circle-fill"></i>
          }
        </div>
      </div>
      <div className="survey-element-content">
        <span className="survey-element-organization">
          {organization}
        </span>
      </div>
      <div className="survey-element-footer">
        <span className="survey-element-footer-link">Başlamak için ankete tıklayınız</span>
      </div>
    </div>
  );
};

export default SurveyElement;
