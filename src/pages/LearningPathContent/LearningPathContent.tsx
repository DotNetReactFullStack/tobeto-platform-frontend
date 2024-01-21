import React from "react";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import LearningPathDetails from "../../components/LearningPathContent/LearningPathDetails/LearningPathDetails";

type Props = {};

const LearningPathContent = (props: Props) => {
  return (
    <div className="learning-path-content-page">
      <GoBackButton />
      <div className="container main-section learning-path-content">
        <LearningPathDetails />
      </div>
    </div>
  );
};

export default LearningPathContent;
