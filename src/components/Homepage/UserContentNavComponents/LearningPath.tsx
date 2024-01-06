import React from "react";
import "./LearningPath.css";

type Props = {};

const LearningPath = (props: Props) => {
  return (
    <div className="learning-path-component">
      <div className="learning-path-element">
        <div className="learning-path-header">
          <img
            src="https://tobeto.s3.cloud.ngn.com.tr/Paragraf_metniniz_1_d00b1e78d4.png"
            className="learning-path-img"
          />
        </div>
        <div className="learning-path-body">
          <div className="learning-path-title">
            <span>İstanbul Kodluyor Proje Aşamaları</span>
          </div>
          <div className="learning-path-datetime">
            <span className="learning-path-publish-date">21 Eylül 2023</span>
            <span className="learning-path-publish-time">15:20</span>
          </div>
          <div className="learning-path-footer">
            <a href="#" className="btn btn-primary btn-lg learning-path-button">
              Eğitime Git
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
