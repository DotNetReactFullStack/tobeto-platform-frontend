import React from "react";
import "./ExamElement.css";

type Props = {};

const ExamElement = (props: Props) => {
  return (
    <div
      className="exam-element"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdropExamId1"
    >
      <div className="exam-element-header">
        <div className="exam-element-header-left-side">
          <span className="exam-element-title">
            Herkes için Kodlama 1B Değerlendirme Sınavı
          </span>
        </div>
        <div className="exam-element-header-right-side">
          <img
            className="image-exam-status"
            src={
              process.env.PUBLIC_URL + "/images/exam-status-completed-icon.svg"
            }
          />
        </div>
      </div>
      <div className="exam-element-content">
        <span className="exam-element-subtitle">Herkes İçin Kodlama - 1B</span>
      </div>
      <div className="exam-element-footer">
        <i className="bi bi-stopwatch exam-element-footer-icon"></i>
        <span className="exam-element-footer-duration">45 Dakika</span>
      </div>
    </div>
  );
};

export default ExamElement;
