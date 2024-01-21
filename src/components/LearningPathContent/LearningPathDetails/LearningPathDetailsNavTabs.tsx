import React from "react";
import "./LearningPathDetailsNavTabs.css";
import LearningPathAboutTab from "./LearningPathAboutTab";
import LearningPathContentTab from "./LearningPathContentTab";

type Props = {};

const LearningPathDetailsNavTabs = (props: Props) => {
  return (
    <div className="learning-path-details-nav-tabs">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link learning-path-details-nav-tab active"
            id="nav-learning-path-content-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-learning-path-content"
            type="button"
            role="tab"
            aria-controls="nav-learning-path-content"
            aria-selected="true"
          >
            İçerik
          </button>
          <button
            className="nav-link learning-path-details-nav-tab"
            id="nav-learning-path-about-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-learning-path-about"
            type="button"
            role="tab"
            aria-controls="nav-learning-path-about"
            aria-selected="false"
          >
            Hakkında
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-learning-path-content"
          role="tabpanel"
          aria-labelledby="nav-learning-path-content-tab"
        >
          <LearningPathContentTab />
        </div>
        <div
          className="tab-pane fade"
          id="nav-learning-path-about"
          role="tabpanel"
          aria-labelledby="nav-learning-path-about-tab"
        >
          <LearningPathAboutTab />
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetailsNavTabs;
