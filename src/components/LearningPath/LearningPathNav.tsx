import React, { useEffect } from "react";
import "./LearningPathNav.css";
import LearningPathElement from "./LearningPathElement";
import { useDispatch, useSelector } from "react-redux";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByAccountIdAccountLearningPathListItemDto";
import { RootState } from "../../store/configureStore";

type Props = {};

const LearningPathNav = (props: Props) => {
  const accountLearningPaths: GetListByAccountIdAccountLearningPathListItemDto[] =
    useSelector(
      (state: RootState) => state.accountLearningPath.accountLearningPaths
    );

  return (
    <div className="learning-paths-nav-tabs">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link learning-paths-nav-tab active"
            id="nav-all-learning-paths-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-all-learning-paths"
            type="button"
            role="tab"
            aria-controls="nav-all-learning-paths"
            aria-selected="true"
          >
            Tüm Eğitimlerim
          </button>
          <button
            className="nav-link learning-paths-nav-tab"
            id="nav-ongoing-learning-paths-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-ongoing-learning-paths"
            type="button"
            role="tab"
            aria-controls="nav-ongoing-learning-paths"
            aria-selected="false"
          >
            Devam Ettiklerim
          </button>
          <button
            className="nav-link learning-paths-nav-tab"
            id="nav-completed-learning-paths-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-completed-learning-paths"
            type="button"
            role="tab"
            aria-controls="nav-completed-learning-paths"
            aria-selected="false"
          >
            Tamamladıklarım
          </button>
          <button
            className="nav-link learning-paths-nav-tab"
            id="nav-saved-learning-paths-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-saved-learning-paths"
            type="button"
            role="tab"
            aria-controls="nav-saved-learning-paths"
            aria-selected="false"
          >
            Favorilerim
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-all-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-all-learning-paths-tab"
        >
          {accountLearningPaths.length > 0 &&
            accountLearningPaths.map((value, index) => (
              <LearningPathElement
                key={index}
                learningPathId={value.learningPathId}
                learningPathName={value.learningPathName}
                startingTime={value.startingTime}
                imageUrl={value.imageUrl}
              />
            ))}
        </div>
        <div
          className="tab-pane fade"
          id="nav-ongoing-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-ongoing-learning-paths-tab"
        >
          {accountLearningPaths.length > 0 &&
            accountLearningPaths
              .filter(
                (value) => value.isContinue == true && value.isComplete == false
              )
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
        <div
          className="tab-pane fade"
          id="nav-completed-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-completed-learning-paths-tab"
        >
          {accountLearningPaths.length > 0 &&
            accountLearningPaths
              .filter((value) => value.isComplete == true)
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
        <div
          className="tab-pane fade"
          id="nav-saved-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-saved-learning-paths-tab"
        >
          {accountLearningPaths.length > 0 &&
            accountLearningPaths
              .filter((value) => value.isSaved == true)
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
      </div>
    </div>
  );
};

export default LearningPathNav;
