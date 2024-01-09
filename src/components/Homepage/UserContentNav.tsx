import React from "react";
import Recourse from "../Recourse/Recourse";
import "./UserContentNav.css";
import Announcement from "../Announcement/Announcement";
import LearningPath from "../LearningPath/LearningPath";
import Survey from "./UserContentNavComponents/Survey";

type Props = {};

const UserContentNav = (props: Props) => {
  return (
    <div className="user-content-nav-tabs">
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link user-content-nav-tab active"
            id="nav-recourse-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-recourse"
            type="button"
            role="tab"
            aria-controls="nav-recourse"
            aria-selected="true"
          >
            Başvurularım
          </button>
          <button
            className="nav-link user-content-nav-tab"
            id="nav-path-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-path"
            type="button"
            role="tab"
            aria-controls="nav-path"
            aria-selected="false"
          >
            Eğitimlerim
          </button>
          <button
            className="nav-link user-content-nav-tab"
            id="nav-announcement-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-announcement"
            type="button"
            role="tab"
            aria-controls="nav-announcement"
            aria-selected="false"
          >
            Duyuru ve Haberlerim
          </button>
          <button
            className="nav-link user-content-nav-tab"
            id="nav-survey-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-survey"
            type="button"
            role="tab"
            aria-controls="nav-survey"
            aria-selected="true"
          >
            Anketlerim
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
          <Recourse />
        </div>
        <div
          className="tab-pane fade"
          id="nav-path"
          role="tabpanel"
          aria-labelledby="nav-path-tab"
        >
          <LearningPath />
        </div>
        <div
          className="tab-pane fade"
          id="nav-announcement"
          role="tabpanel"
          aria-labelledby="nav-announcement-tab"
        >
          <Announcement />
        </div>
        <div
          className="tab-pane fade"
          id="nav-survey"
          role="tabpanel"
          aria-labelledby="nav-survey-tab"
        >
          <Survey />
        </div>
      </div>
    </div>
  );
};

export default UserContentNav;
