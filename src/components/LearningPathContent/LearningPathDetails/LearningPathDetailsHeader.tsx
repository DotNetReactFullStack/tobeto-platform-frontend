import React, { useEffect, useState } from "react";
import "./LearningPathDetailsHeader.css";
import accountLearningPathService from "../../../services/accountLearningPathService";
import {
  decrementLearningPathLikeCount,
  incrementLearningPathLikeCount,
  setAccountLearningPathBySelectedAccountIdAndLearningPathId,
  setAccountLearningPathBySelectedLearningPathId,
  setLearningPathSaveStatus,
  setLearningPathLikeCount,
  setLearningPathLikeStatus,
  toggleLearningPathSaveStatus,
  toggleLearningPathLikeStatus,
  setAccountLearningPathIsSavedRequest,
  setAccountLearningPathIsLikedRequest,
} from "../../../store/accountLearningPath/accountLearningPathSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { GetByAccountIdAndLearningPathIdAccountLearningPathResponse } from "../../../models/accountLearningPaths/getByAccountIdAndLearningPathIdAccountLearningPathResponse";
import { useParams } from "react-router-dom";
import { GetListByLearningPathIdAccountLearningPathListItemDto } from "../../../models/accountLearningPaths/getListByLearningPathIdAccountLearningPathListItemDto";
import { UpdateAccountLearningPathIsSavedRequest } from "../../../models/accountLearningPaths/UpdateAccountLearningPathIsSavedRequest";
import { UpdateAccountLearningPathIsLikedRequest } from "../../../models/accountLearningPaths/UpdateAccountLearningPathIsLikedRequest";

type Props = {};

const LearningPathDetailsHeader = (props: Props) => {
  // ----------------- accountLearningPathDataBySelectedAccountIdAndLearningPathId ---------------------------

  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  const params = useParams<{ learningPathId: string }>();
  const selectedLearningPathIdByParams = parseInt(
    params.learningPathId || "0",
    10
  );

  async function accountLearningPathDataBySelectedAccountIdAndLearningPathId(
    accountId: number,
    selectedLearningPathId: number
  ) {
    try {
      const accountLearningPathResponse =
        await accountLearningPathService.getListByAccountIdAndLearningPathId(
          accountId,
          selectedLearningPathId
        );
      const data = accountLearningPathResponse.data;
      dispatch(
        setAccountLearningPathBySelectedAccountIdAndLearningPathId(data)
      );
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    accountLearningPathDataBySelectedAccountIdAndLearningPathId(
      accountId,
      selectedLearningPathIdByParams
    );
  }, [accountId, selectedLearningPathIdByParams]);

  const accountLearningPathBySelectedAccountIdAndLearningPathId: GetByAccountIdAndLearningPathIdAccountLearningPathResponse | null =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath
          .accountLearningPathBySelectedAccountIdAndLearningPathId
    );

  // console.log(
  //   "accountLearningPathBySelectedAccountIdAndLearningPathId",
  //   accountLearningPathBySelectedAccountIdAndLearningPathId
  // );

  function formatDateToLocaleString(dateString?: string): string {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
  const formatedEndingTime: string = formatDateToLocaleString(
    accountLearningPathBySelectedAccountIdAndLearningPathId?.endingTime
  );

  // ----------------- accountLearningPathDataBySelectedAccountIdAndLearningPathId ---------------------------

  async function accountLearningPathDataBySelectedLearningPathId(
    selectedLearningPathId: number
  ) {
    try {
      const accountLearningPathResponse =
        await accountLearningPathService.getListByLearningPathId(
          selectedLearningPathId
        );
      const data = accountLearningPathResponse.data.items;
      dispatch(setAccountLearningPathBySelectedLearningPathId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    accountLearningPathDataBySelectedLearningPathId(
      selectedLearningPathIdByParams
    );
  }, [selectedLearningPathIdByParams]);

  const accountLearningPathBySelectedLearningPathId: GetListByLearningPathIdAccountLearningPathListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath.accountLearningPathBySelectedLearningPathId
    );

  function countLikedValues(
    obj: GetListByLearningPathIdAccountLearningPathListItemDto[]
  ): number {
    let count = 0;
    Object.values(obj).forEach((value) => {
      if (value.isLiked === true) {
        count++;
      }
    });

    return count;
  }
  useEffect(() => {
    let likeCount = countLikedValues(
      accountLearningPathBySelectedLearningPathId
    );
    dispatch(setLearningPathLikeCount(likeCount));
    dispatch(
      setLearningPathLikeStatus(
        accountLearningPathBySelectedAccountIdAndLearningPathId?.isLiked ||
          false
      )
    );
    dispatch(
      setLearningPathSaveStatus(
        accountLearningPathBySelectedAccountIdAndLearningPathId?.isSaved ||
          false
      )
    );
  }, [accountLearningPathBySelectedLearningPathId]);

  const learningPathLikeCount: number = useSelector(
    (state: RootState) => state.accountLearningPath.learningPathLikeCount
  );

  //------------------------- Like status ---------------------------

  const learningPathLikeStatus: boolean = useSelector(
    (state: RootState) => state.accountLearningPath.learningPathLikeStatus
  );

  //console.log(learningPathLikeStatus);

  const [likeIcon, setLikeIcon] = useState("");

  const handleLikeButtonClick = () => {
    learningPathLikeStatus
      ? dispatch(decrementLearningPathLikeCount())
      : dispatch(incrementLearningPathLikeCount());
    dispatch(toggleLearningPathLikeStatus());
  };

  useEffect(() => {
    const newIcon = learningPathLikeStatus ? "bi-heart-fill" : "bi-heart";
    setLikeIcon(newIcon);
    const accountLearningPathIsLikedRequest: UpdateAccountLearningPathIsLikedRequest =
      {
        accountId:
          accountLearningPathBySelectedAccountIdAndLearningPathId?.accountId ??
          0,
        learningPathId:
          accountLearningPathBySelectedAccountIdAndLearningPathId?.learningPathId ??
          0,
        isLiked: learningPathLikeStatus,
      };
    dispatch(
      setAccountLearningPathIsLikedRequest(accountLearningPathIsLikedRequest)
    );
  }, [learningPathLikeStatus]);

  const accountLearningPathIsLikedRequest: UpdateAccountLearningPathIsLikedRequest | null =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath.accountLearningPathIsLikedRequest
    );

  const sendIsLikedRequest = async () => {
    try {
      if (accountLearningPathIsLikedRequest !== null) {
        await accountLearningPathService.updateIsLiked(
          accountLearningPathIsLikedRequest
        );
      }
    } catch (error) {
      console.error("Hata: isLiked durumu güncellenemedi.", error);
    }
  };

  useEffect(() => {
    if (accountLearningPathIsLikedRequest !== null) {
      sendIsLikedRequest();
    }
  }, [accountLearningPathIsLikedRequest]);

  //------------------------- Save status ---------------------------

  const [SaveIcon, setSaveIcon] = useState("bi-bookmark");

  const learningPathSaveStatus: boolean = useSelector(
    (state: RootState) => state.accountLearningPath.learningPathSaveStatus
  );

  const handleSaveButtonClick = () => {
    dispatch(toggleLearningPathSaveStatus());
  };

  useEffect(() => {
    const newIcon = learningPathSaveStatus ? "bi-bookmark-fill" : "bi-bookmark";
    setSaveIcon(newIcon);
    const accountLearningPathIsSavedRequest: UpdateAccountLearningPathIsSavedRequest =
      {
        accountId:
          accountLearningPathBySelectedAccountIdAndLearningPathId?.accountId ??
          0,
        learningPathId:
          accountLearningPathBySelectedAccountIdAndLearningPathId?.learningPathId ??
          0,
        isSaved: learningPathSaveStatus,
      };
    dispatch(
      setAccountLearningPathIsSavedRequest(accountLearningPathIsSavedRequest)
    );
  }, [learningPathSaveStatus]);

  const accountLearningPathIsSavedRequest: UpdateAccountLearningPathIsSavedRequest | null =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath.accountLearningPathIsSavedRequest
    );

  const sendIsSavedRequest = async () => {
    try {
      if (accountLearningPathIsSavedRequest) {
        await accountLearningPathService.updateIsSaved(
          accountLearningPathIsSavedRequest
        );
      }
    } catch (error) {
      console.error("Hata: isSaved durumu güncellenemedi.", error);
    }
  };
  useEffect(() => {
    if (accountLearningPathIsSavedRequest !== null) {
      sendIsSavedRequest();
    }
  }, [accountLearningPathIsSavedRequest]);

  return (
    <div className="learning-path-details-header">
      <div className="learning-path-details-header-left-col">
        <img
          className="learning-path-details-header-img"
          src={
            process.env.PUBLIC_URL +
            accountLearningPathBySelectedAccountIdAndLearningPathId?.imageUrl
          }
        />
      </div>
      <div className="learning-path-details-header-right-col">
        <div className="learning-path-details-header-right-col-body">
          <div className="learning-path-details-header-title-section">
            <h3 className="learning-path-details-header-title">
              {
                accountLearningPathBySelectedAccountIdAndLearningPathId?.learningPathName
              }
            </h3>
            <span className="learning-path-details-date-info">
              {formatedEndingTime + " tarihine kadar bitirebilirsin"}
            </span>
          </div>
          <div className="learning-path-details-header-activity-section">
            <span className="activity-score">
              {accountLearningPathBySelectedAccountIdAndLearningPathId?.totalNumberOfPoints +
                " Puan"}
            </span>
            <button
              className="activity-like-button"
              onClick={handleLikeButtonClick}
            >
              <i className={"bi activity-like-icon " + likeIcon}></i>
            </button>
            <button className="activity-like-count-button">
              <span className="activity-like-count">
                {
                  //accountLearningPathBySelectedAccountIdAndLearningPathId?.numberOfLikes
                  learningPathLikeCount
                }
              </span>
            </button>
            <button
              className="activity-favorite-button"
              onClick={handleSaveButtonClick}
            >
              <i className={"bi activity-favorite-icon " + SaveIcon}></i>
            </button>
          </div>
        </div>
        <div className="learning-path-details-header-right-col-footer ">
          <div className="progress learning-path-details-progress">
            <div
              className="progress-bar learning-path-details-progress-bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                width:
                  accountLearningPathBySelectedAccountIdAndLearningPathId?.percentComplete +
                  "%",
              }}
            ></div>
          </div>
          <div className="learning-path-details-progress-bar-value-text">
            <span>
              {"%" +
                accountLearningPathBySelectedAccountIdAndLearningPathId?.percentComplete}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetailsHeader;
