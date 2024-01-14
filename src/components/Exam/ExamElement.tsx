import React from "react";
import "./ExamElement.css";

type Props = {
  title: string;
  examStatusImageUrl: string;
  subTitle: string;
  duration: string;
};

const ExamElement = ({ title, examStatusImageUrl, subTitle, duration }: Props) => {
  return (
    <div
      className="exam-element"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdropExamId1"
    >
      <div className="exam-element-header">
        <div className="exam-element-header-left-side">
          <span className="exam-element-title">{title}</span>
        </div>
        <div className="exam-element-header-right-side">
          <img
            className="image-exam-status"
            src={process.env.PUBLIC_URL + examStatusImageUrl}
          />
        </div>
      </div>
      <div className="exam-element-content">
        <span className="exam-element-subtitle">{subTitle}</span>
      </div>
      <div className="exam-element-footer">
        <i className="bi bi-stopwatch exam-element-footer-icon"></i>
        <span className="exam-element-footer-duration">{duration}</span>
      </div>
    </div>
  );
};

export default ExamElement;
