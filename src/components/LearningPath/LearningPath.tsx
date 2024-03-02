import React, { useEffect } from "react";
import "./LearningPath.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import LearningPathElement from "./LearningPathElement";
import { useSelector } from "react-redux";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByAccountIdAccountLearningPathListItemDto";
import { RootState } from "../../store/configureStore";

type Props = {};

const LearningPath = (props: Props) => {
  const accountLearningPathsByAccountId: GetListByAccountIdAccountLearningPathListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath.accountLearningPathListByAccountId
    );

  return (
    <>
      <div className="learning-path-component">
        {accountLearningPathsByAccountId &&
          accountLearningPathsByAccountId.length > 0 &&
          accountLearningPathsByAccountId
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
      {accountLearningPathsByAccountId &&
      accountLearningPathsByAccountId.length > 4 ? (
        <ShowMoreButton redirectUrl="/my-learning-paths" />
      ) : (
        <></>
      )}
    </>
  );
};

export default LearningPath;
