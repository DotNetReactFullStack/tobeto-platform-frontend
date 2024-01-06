import React from "react";
import "./LearningPath.css";

type Props = {};

const LearningPath = (props: Props) => {
  return (
    <>
      <div className="learning-path-component">

        <div className="learning-path-element">
          <div className="learning-path-cover-photo">
            <img
              className="learning-path-img"
              src="https://tobeto.s3.cloud.ngn.com.tr/Paragraf_metniniz_1_d00b1e78d4.png"
            />
          </div>
          <div className="learning-path-body">
            <div className="learning-path-title">
              .NET & React Fullstack - 1B
            </div>
            <div className="learning-path-publish-datetime">
              21 Eylül 2023 15:20
            </div>
          </div>
          <div className="learning-path-footer">
            <button className="learning-path-button">Eğitime Git</button>
          </div>
        </div>

        <div className="learning-path-element">
          <div className="learning-path-cover-photo">
            <img
              className="learning-path-img"
              src="https://tobeto.s3.cloud.ngn.com.tr/Paragraf_metniniz_1_d00b1e78d4.png"
            />
          </div>
          <div className="learning-path-body">
            <div className="learning-path-title">
              .NET & React Fullstack - 1B
            </div>
            <div className="learning-path-publish-datetime">
              21 Eylül 2023 15:20
            </div>
          </div>
          <div className="learning-path-footer">
            <button className="learning-path-button">Eğitime Git</button>
          </div>
        </div>

        <div className="learning-path-element">
          <div className="learning-path-cover-photo">
            <img
              className="learning-path-img"
              src="https://tobeto.s3.cloud.ngn.com.tr/Paragraf_metniniz_1_d00b1e78d4.png"
            />
          </div>
          <div className="learning-path-body">
            <div className="learning-path-title">
              .NET & React Fullstack - 1B
            </div>
            <div className="learning-path-publish-datetime">
              21 Eylül 2023 15:20
            </div>
          </div>
          <div className="learning-path-footer">
            <button className="learning-path-button">Eğitime Git</button>
          </div>
        </div>

        <div className="learning-path-element">
          <div className="learning-path-cover-photo">
            <img
              className="learning-path-img"
              src="https://tobeto.s3.cloud.ngn.com.tr/Paragraf_metniniz_1_d00b1e78d4.png"
            />
          </div>
          <div className="learning-path-body">
            <div className="learning-path-title">
              .NET & React Fullstack - 1B
            </div>
            <div className="learning-path-publish-datetime">
              21 Eylül 2023 15:20
            </div>
          </div>
          <div className="learning-path-footer">
            <button className="learning-path-button">Eğitime Git</button>
          </div>
        </div>

      </div>

      <div className="show-more-block">
        <div className="show-more-icon">
          <i className="bi bi-arrow-right-circle"></i>
        </div>
        <div className="show-more-text">
          Daha Fazla Göster
        </div>
      </div>
    </>
  );
};

export default LearningPath;
