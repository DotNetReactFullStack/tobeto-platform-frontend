import React from "react";
import "./LearningPath.css";
import ShowMoreButton from "../../ShowMoreButton/ShowMoreButton";
import LearningPathElement from "./LearningPathElement";

type Props = {};

const LearningPath = (props: Props) => {
  return (
    <>
      <div className="learning-path-component">
        <LearningPathElement />
        <LearningPathElement />
        <LearningPathElement />
        <LearningPathElement />
      </div>
      <ShowMoreButton />
    </>
  );
};

export default LearningPath;
