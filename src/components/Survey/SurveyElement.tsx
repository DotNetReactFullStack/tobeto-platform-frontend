import React from "react";
import "./SurveyElement.css";
type Props = {};

const SurveyElement = (props: Props) => {
  return (
    <div
      className="survey-element"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdropSurveyId1"
    >
      <div className="survey-element-header">
        <div className="survey-element-header-left-side">
          <span className="survey-element-title">
            Herkes için Kodlama Değerlendirme Anketi
          </span>
        </div>
        <div className="survey-element-header-right-side">
          <img
            className="image-survey-status"
            src={
              process.env.PUBLIC_URL + "/assets/images/exam-status-completed-icon.svg"
            }
          />
        </div>
      </div>
      <div className="survey-element-content">
        <span className="survey-element-subtitle">
          Herkes İçin Kodlama - 1B
        </span>
      </div>
      <div className="survey-element-footer">
        <i className="bi bi-stopwatch survey-element-footer-icon"></i>
        <span className="survey-element-footer-duration">15 Dakika</span>
      </div>
    </div>
  );
};

export default SurveyElement;
