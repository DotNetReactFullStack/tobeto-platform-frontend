import React, { useEffect } from "react";
import "./LearningPath.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import LearningPathElement from "./LearningPathElement";
import { useSelector } from "react-redux";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByAccountIdAccountLearningPathListItemDto";
import { RootState } from "../../store/configureStore";

type Props = {};

const LearningPath = (props: Props) => {
  const accountLearningPaths: GetListByAccountIdAccountLearningPathListItemDto[] =
    useSelector(
      (state: RootState) => state.accountLearningPath.accountLearningPaths
    );

  return (
    <>
      <div className="learning-path-component">
        {accountLearningPaths.length > 0 &&
          accountLearningPaths
            .slice(0, 4)
            .map((value, index) => (
              <LearningPathElement
                key={index}
                learningPathId={value.learningPathId}
                learningPathName={value.learningPathName}
                startingTime={value.startingTime}
                imageUrl={value.imageUrl}
              />
            ))}
      </div>
      {accountLearningPaths.length > 4 ? (
        <ShowMoreButton redirectUrl="/my-learning-paths" />
      ) : (
        <></>
      )}
    </>
  );
};

export default LearningPath;
