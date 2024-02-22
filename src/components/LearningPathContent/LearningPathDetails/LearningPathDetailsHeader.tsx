import React, { useEffect, useState } from "react";
import "./LearningPathDetailsHeader.css";
import accountLearningPathService from "../../../services/accountLearningPathService";
import { setAccountLearningPathBySelectedAccountIdAndLearningPathId } from "../../../store/accountLearningPath/accountLearningPathSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { GetByAccountIdAndLearningPathIdAccountLearningPathResponse } from "../../../models/accountLearningPaths/getByAccountIdAndLearningPathIdAccountLearningPathResponse";
import { useParams } from "react-router-dom";

type Props = {};

const LearningPathDetailsHeader = (props: Props) => {
  const [isLike, setIsLike] = useState(false);
  const [likeIcon, setLikeIcon] = useState("bi-heart");

  const handleLikeButtonClick = () => {
    const newIcon = isLike ? "bi-heart" : "bi-heart-fill";
    setLikeIcon(newIcon);
    setIsLike(!isLike);
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState("bi-bookmark");

  const handleFavoriteButtonClick = () => {
    const newIcon = isFavorite ? "bi-bookmark" : "bi-bookmark-fill";
    setFavoriteIcon(newIcon);
    setIsFavorite(!isFavorite);
  };

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
  }, []);

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
                  accountLearningPathBySelectedAccountIdAndLearningPathId?.numberOfLikes
                }
              </span>
            </button>
            <button
              className="activity-favorite-button"
              onClick={handleFavoriteButtonClick}
            >
              <i className={"bi activity-favorite-icon " + favoriteIcon}></i>
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
