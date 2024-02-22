import React, { useEffect } from "react";
import "./LearningPathDetails.css";
import LearningPathDetailsHeader from "./LearningPathDetailsHeader";
import LearningPathDetailsNavTabs from "./LearningPathDetailsNavTabs";
import { useDispatch, useSelector } from "react-redux";
import accountLearningPathService from "../../../services/accountLearningPathService";
import { setAccountLearningPathsBySelectedLearningPathId } from "../../../store/accountLearningPath/accountLearningPathSlice";
import { GetListByLearningPathIdAccountLearningPathListItemDto } from "../../../models/accountLearningPaths/getListByLearningPathIdAccountLearningPathListItemDto";
import { RootState } from "../../../store/configureStore";
import courseLearningPathService from "../../../services/courseLearningPathService";
import { setCourseLearningPathsBySelectedLearningPathId } from "../../../store/courseLearningPath/courseLearningPathSlice";
import { GetListByLearningPathIdCourseLearningPathListItemDto } from "../../../models/courseLearningPaths/GetListByLearningPathIdCourseLearningPathListItemDto";

type Props = {};

const LearningPathDetails = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  const selectedLearningPathIdFakeData: number = 1;
  // ----------------- accountLearningPathDataBySelectedLearningPathId ---------------------------
  async function accountLearningPathDataBySelectedLearningPathId(
    selectedLearningPathId: number
  ) {
    try {
      const accountLearningPathsresponse =
        await accountLearningPathService.getListByLearningPathId(
          selectedLearningPathId
        );
      const data = accountLearningPathsresponse.data.items;
      dispatch(setAccountLearningPathsBySelectedLearningPathId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    accountLearningPathDataBySelectedLearningPathId(
      selectedLearningPathIdFakeData
    );
  }, []);

  const accountLearningPathsBySelectedLearningPathId: GetListByLearningPathIdAccountLearningPathListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath.accountLearningPathsBySelectedLearningPathId
    );

  console.log(
    "accountLearningPathsBySelectedLearningPathId",
    accountLearningPathsBySelectedLearningPathId
  );

  // ----------------- courseLearningPathDataBySelectedLearningPathId ---------------------------

  async function courseLearningPathDataBySelectedLearningPathId(
    selectedLearningPathId: number
  ) {
    try {
      const courseLearningPathsresponse =
        await courseLearningPathService.getListByLearningPathId(
          selectedLearningPathId
        );
      const data = courseLearningPathsresponse.data.items;
      dispatch(setCourseLearningPathsBySelectedLearningPathId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    courseLearningPathDataBySelectedLearningPathId(
      selectedLearningPathIdFakeData
    );
  }, []);

  const courseLearningPathsBySelectedLearningPathId: GetListByLearningPathIdCourseLearningPathListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.courseLearningPath.courseLearningPathsBySelectedLearningPathId
    );

  console.log(
    "courseLearningPathsBySelectedLearningPathId",
    courseLearningPathsBySelectedLearningPathId
  );

  return (
    <div className="learning-path-details">
      <LearningPathDetailsHeader />
      <LearningPathDetailsNavTabs />
    </div>
  );
};

export default LearningPathDetails;
