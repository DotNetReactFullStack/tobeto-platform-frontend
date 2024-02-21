import React, { useEffect } from "react";
import "./LearningPathDetails.css";
import LearningPathDetailsHeader from "./LearningPathDetailsHeader";
import LearningPathDetailsNavTabs from "./LearningPathDetailsNavTabs";
import { useDispatch, useSelector } from "react-redux";
import accountLearningPathService from "../../../services/accountLearningPathService";
import { setAccountLearningPathsBySelectedLearningPathId } from "../../../store/accountLearningPath/accountLearningPathSlice";
import { GetListByLearningPathIdAccountLearningPathListItemDto } from "../../../models/accountLearningPaths/getListByLearningPathIdAccountLearningPathListItemDto";
import { RootState } from "../../../store/configureStore";

type Props = {};

const LearningPathDetails = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

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
    accountLearningPathDataBySelectedLearningPathId(1);
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

  // -------------------------------------------------------------------------------
  return (
    <div className="learning-path-details">
      <LearningPathDetailsHeader />
      <LearningPathDetailsNavTabs />
    </div>
  );
};

export default LearningPathDetails;
