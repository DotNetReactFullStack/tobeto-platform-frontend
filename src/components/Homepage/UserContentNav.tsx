import React, { useEffect } from "react";
import Recourse from "../Recourse/Recourse";
import "./UserContentNav.css";
import Announcement from "../Announcement/Announcement";
import LearningPath from "../LearningPath/LearningPath";
import Survey from "../Survey/Survey";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccountLearningPathListByAccountId,
  setAccountLearningPaths,
} from "../../store/accountLearningPath/accountLearningPathSlice";
import accountLearningPathService from "../../services/accountLearningPathService";
import { RootState } from "../../store/configureStore";
import courseLearningPathService from "../../services/courseLearningPathService";
import { setCourseLearningPaths } from "../../store/courseLearningPath/courseLearningPathSlice";

type Props = {};

const UserContentNav = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  //getListByAccountId AccountLearningPath
  async function fetchAccountLearningPathDataByAccountId(accountId: number) {
    try {
      const accountLearningResponse =
        await accountLearningPathService.getListByAccountId(accountId);
      const data = accountLearningResponse.data.items;
      dispatch(setAccountLearningPathListByAccountId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchAccountLearningPathDataByAccountId(accountId);
  }, []);

  //GetListByLearningPathIdAccountLearningPathListItemDto[];

  async function fetchAccountLearningPathsData() {
    try {
      const accountLearningPathResponse =
        await accountLearningPathService.getListAll();
      const data = accountLearningPathResponse.data.items;
      dispatch(setAccountLearningPaths(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchAccountLearningPathsData();
  }, []);

  // getList CourseLearningPaths

  async function fetchCourseLearningPathsData() {
    try {
      const courseLearningPathsResponse =
        await courseLearningPathService.getListAll();
      const data = courseLearningPathsResponse.data.items;
      dispatch(setCourseLearningPaths(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchCourseLearningPathsData();
  }, []);

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
