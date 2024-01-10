import React from "react";
import "./LearningPathNav.css";
import LearningPathElement from "./LearningPathElement";

type Props = {};

const LearningPathNav = (props: Props) => {
  return (
    <div className="learning-paths-nav-tabs">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link learning-paths-nav-tab active"
            id="nav-recourse-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-recourse"
            type="button"
            role="tab"
            aria-controls="nav-recourse"
            aria-selected="true"
          >
            Tüm Eğitimlerim
          </button>
          <button
            className="nav-link learning-paths-nav-tab"
            id="nav-path-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-path"
            type="button"
            role="tab"
            aria-controls="nav-path"
            aria-selected="false"
          >
            Devam Ettiklerim
          </button>
          <button
            className="nav-link learning-paths-nav-tab"
            id="nav-announcement-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-announcement"
            type="button"
            role="tab"
            aria-controls="nav-announcement"
            aria-selected="false"
          >
            Tamamladıklarım
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-recourse"
          role="tabpanel"
          aria-labelledby="nav-recourse-tab"
        >
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
          id="nav-path"
          role="tabpanel"
          aria-labelledby="nav-path-tab"
        >
          <LearningPathElement />
          <LearningPathElement />
          <LearningPathElement />
        </div>
        <div
          className="tab-pane fade"
          id="nav-announcement"
          role="tabpanel"
          aria-labelledby="nav-announcement-tab"
        >
          <LearningPathElement />
          <LearningPathElement />
        </div>
      </div>
    </div>
  );
};

export default LearningPathNav;
