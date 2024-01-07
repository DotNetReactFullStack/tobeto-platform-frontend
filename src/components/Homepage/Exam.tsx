import React from "react";
import "./Exam.css";
import ExamDetailModal from "./ExamDetailModal";

type Props = {};

const Exam = (props: Props) => {
  return (
    <div className="container main-section exam-component-margin">
      <div className="exam-component">
        <div className="exam-component-header">
          <span className="exam-component-header-title">Sınavlarım</span>
        </div>
        <div className="exam-elements">
          <button
            className="exam-element"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <div className="exam-element-header">
              <div className="exam-element-header-left-side">
                <span className="exam-element-header-title">
                  Herkes için Kodlama 1B Değerlendirme Sınavı
                </span>
              </div>
              <div className="exam-header-right-side">
                <img
                  className="image-exam-status"
                  src={process.env.PUBLIC_URL + "/exam-status-done.png"}
                />
              </div>
            </div>
            <div className="exam-element-content">
              <span className="exam-element-content-title">
                Herkes İçin Kodlama - 1B
              </span>
            </div>
            <div className="exam-element-footer">
              <i className="bi bi-stopwatch exam-element-footer-icon"></i>
              <span className="exam-element-footer-duration">45 Dakika</span>
            </div>
          </button>
        </div>
      </div>
      <ExamDetailModal />
    </div>
  );
};

export default Exam;
