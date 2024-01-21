import React from "react";
import "./LearningPathDetails.css";
import LearningPathDetailsHeader from "./LearningPathDetailsHeader";
import LearningPathDetailsNavTabs from "./LearningPathDetailsNavTabs";

type Props = {};

const LearningPathDetails = (props: Props) => {
  return (
    <div className="learning-path-details">
      <LearningPathDetailsHeader />
      <LearningPathDetailsNavTabs />
    </div>
  );
};

export default LearningPathDetails;
