import React from "react";
import "./LearningPathNav.css";
import LearningPathElement from "./LearningPathElement";

type Props = {};

const LearningPathNav = (props: Props) => {
  return (
    <div className="container main-section learning-paths-nav-tabs">
      <div className="learning-paths-nav">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link all-learning-paths-nav-tab active"
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
            className="nav-link ongoing-learning-paths-nav-tab"
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
            className="nav-link completed-learning-paths-nav-tab"
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
        </div>
      </div>

      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-all-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-all-learning-paths-tab"
        >
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
        </div>
        <div
          className="tab-pane fade"
          id="nav-ongoing-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-ongoing-learning-paths-tab"
        >
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
        </div>
        <div
          className="tab-pane fade"
          id="nav-completed-learning-paths"
          role="tabpanel"
          aria-labelledby="nav-completed-learning-paths-tab"
        >
          <LearningPathElement />
          <LearningPathElement />
        </div>
      </div>
    </div>
  );
};

export default LearningPathNav;
