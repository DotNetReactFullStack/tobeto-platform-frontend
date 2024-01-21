import React from "react";
import "./LearningPathAboutTab.css";

type Props = {};

const LearningPathInfo = (props: Props) => {
  return (
    <div className="learning-path-info">
      <div className="learning-path-times">
        <div className="learning-path-icons-section">
          <i className="bi bi-calendar-minus learning-path-info-icon"></i>
        </div>
        <div className="learning-path-info-section">
          <div className="learning-path-info-subsection">
            <div className="learning-path-info-title-text">Başlangıç</div>
            <div className="learning-path-info-content-text">
              27 EKİ 2023 14:52
            </div>
          </div>
          <div className="learning-path-info-subsection">
            <div className="learning-path-info-title-text">Bitiş</div>
            <div className="learning-path-info-content-text">
              28 ŞBT 2023 14:52
            </div>
          </div>
        </div>
      </div>
      <div className="learning-path-total-duration">
        <div className="learning-path-icons-section">
          <i className="bi bi-stopwatch learning-path-info-icon"></i>
        </div>
        <div className="learning-path-info-section">
          <div className="learning-path-info-subsection">
            <div className="learning-path-info-title-text">Toplam Süre</div>
            <div className="learning-path-info-content-text">30 Saat</div>
          </div>
        </div>
      </div>
      <div className="learning-path-total-video">
        <div className="learning-path-icons-section">
          <i className="bi bi-camera-reels learning-path-info-icon"></i>
        </div>
        <div className="learning-path-info-section">
          <div className="learning-path-info-subsection">
            <div className="learning-path-info-title-text">Toplam Video</div>
            <div className="learning-path-info-content-text">20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathInfo;
