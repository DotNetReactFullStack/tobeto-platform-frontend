import React from "react";
import "./LearningPathElement.css";

type Props = {};

const LearningPathElement = (props: Props) => {
  return (
    <div className="learning-path-element">
      <div className="learning-path-cover-photo">
        <img
          className="learning-path-img"
          src={process.env.PUBLIC_URL + "/dotnet-react-full-stack.png"}
        />
      </div>
      <div className="learning-path-body">
        <div className="learning-path-title">.NET & React Fullstack - 1B</div>
        <div className="learning-path-publish-datetime">
          21 Eylül 2023 15:20
        </div>
      </div>
      <div className="learning-path-footer">
        <button className="learning-path-button">Eğitime Git</button>
      </div>
    </div>
  );
};

export default LearningPathElement;
