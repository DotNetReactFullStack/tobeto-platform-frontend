import React, { useEffect } from "react";
import "./LearningPath.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import LearningPathElement from "./LearningPathElement";
import { useDispatch, useSelector } from "react-redux";
import accountLearningPathService from "../../services/accountLearningPathService";
import { setAccountLearningPaths } from "../../store/accountLearningPath/accountLearningPathSlice";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../models/accountLearningPaths/getListByAccountIdAccountLearningPathListItemDto";
import { RootState } from "../../store/configureStore";

type Props = {};

const LearningPath = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  async function fetchAccountLearningPathData(accountId: number) {
    try {
      const accountLearningResponse =
        await accountLearningPathService.getListByAccountId(accountId);
      const data = accountLearningResponse.data.items;
      dispatch(setAccountLearningPaths(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchAccountLearningPathData(accountId);
  }, []);

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
