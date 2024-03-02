import React, { useEffect, useState } from "react";
import "./LearningPathDetailsHeader.css";
import accountLearningPathService from "../../../services/accountLearningPathService";
import {
  decrementLearningPathLikeCount,
  incrementLearningPathLikeCount,
  setLearningPathSaveStatus,
  setLearningPathLikeCount,
  setLearningPathLikeStatus,
  toggleLearningPathSaveStatus,
  toggleLearningPathLikeStatus,
  setAccountLearningPathIsSavedRequest,
  setAccountLearningPathIsLikedRequest,
  setLearningPathActivityScore,
  setLearningPathPercentComplete,
  setAccountLearningPathPercentCompleteRequest,
  setFilteredByLearningPathIdAccountLearningPath,
  setFilteredByLearningPathIdAccountLearningPaths,
} from "../../../store/accountLearningPath/accountLearningPathSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { useParams } from "react-router-dom";
import { GetListAccountLearningPathListItemDto } from "../../../models/accountLearningPaths/getListByLearningPathIdAccountLearningPathListItemDto";
import { UpdateAccountLearningPathIsSavedRequest } from "../../../models/accountLearningPaths/UpdateAccountLearningPathIsSavedRequest";
import { UpdateAccountLearningPathIsLikedRequest } from "../../../models/accountLearningPaths/UpdateAccountLearningPathIsLikedRequest";
import accountLessonService from "../../../services/accountLessonService";
import { setAccountLessonLearningPathDtoBySelectedAccountId } from "../../../store/accountLesson/accountLessonSlice";
import {
  setLessonCount,
  setTotalDuration,
} from "../../../store/learningPath/learningPathSlice";
import toastr from "toastr";
import { GetListByAccountIdAccountLearningPathListItemDto } from "../../../models/accountLearningPaths/getListByAccountIdAccountLearningPathListItemDto";

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

  const accountLearningPathByAccountId: GetListByAccountIdAccountLearningPathListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath.accountLearningPathListByAccountId
    );

  //GetListByAccountIdAccountLearningPath -> filtered LearningPathId

  const filteredByLearningPathIdAccountLearningPath: GetListByAccountIdAccountLearningPathListItemDto | null =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath.filteredByLearningPathIdAccountLearningPath
    );

  useEffect(() => {
    const filteredPaths: any = accountLearningPathByAccountId.filter(
      (path) => path.learningPathId === selectedLearningPathIdByParams
    );
    dispatch(
      setFilteredByLearningPathIdAccountLearningPath(
        filteredPaths.length > 0 ? filteredPaths[0] : null
      )
    );
  }, [selectedLearningPathIdByParams]);

  //-----------------------Ok---------------------------------

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
    filteredByLearningPathIdAccountLearningPath?.endingTime
  );

  // -------filteredByLearningPathIdAccountLearningPaths ------------

  const accountLearningPaths: GetListAccountLearningPathListItemDto[] =
    useSelector(
      (state: RootState) => state.accountLearningPath.accountLearningPaths
    );

  const filteredByLearningPathIdAccountLearningPaths: GetListAccountLearningPathListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath.filteredByLearningPathIdAccountLearningPaths
    );

  useEffect(() => {
    const filteredPaths: any[] = accountLearningPaths.filter(
      (path) => path.learningPathId === selectedLearningPathIdByParams
    );
    dispatch(
      setFilteredByLearningPathIdAccountLearningPaths(
        filteredPaths.length > 0 ? filteredPaths : []
      )
    );
  }, [selectedLearningPathIdByParams]);

  //--------------------- like count ----------------------

  function countLikedValues(
    obj: GetListAccountLearningPathListItemDto[]
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
    if (filteredByLearningPathIdAccountLearningPaths) {
      let likeCount = countLikedValues(
        filteredByLearningPathIdAccountLearningPaths
      );
      console.log("likeee", likeCount);
      dispatch(setLearningPathLikeCount(likeCount));
    }
  }, [filteredByLearningPathIdAccountLearningPaths]);

  const learningPathLikeCount: number = useSelector(
    (state: RootState) => state.accountLearningPath.learningPathLikeCount
  );

  //------------------- set Like - Save status -------------------------

  useEffect(() => {
    if (filteredByLearningPathIdAccountLearningPath) {
      dispatch(
        setLearningPathLikeStatus(
          filteredByLearningPathIdAccountLearningPath?.isLiked || false
        )
      );
      dispatch(
        setLearningPathSaveStatus(
          filteredByLearningPathIdAccountLearningPath?.isSaved || false
        )
      );
    }
  }, [filteredByLearningPathIdAccountLearningPath]);

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
    learningPathLikeStatus
      ? toastr.info("Beğeni geri çekildi.")
      : toastr.success("Eğitim beğenildi");
    dispatch(toggleLearningPathLikeStatus());
  };

  useEffect(() => {
    const newIcon = learningPathLikeStatus ? "bi-heart-fill" : "bi-heart";
    setLikeIcon(newIcon);
    const accountLearningPathIsLikedRequest: UpdateAccountLearningPathIsLikedRequest =
      {
        accountId: accountId ?? 0,
        learningPathId: selectedLearningPathIdByParams ?? 0,
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
    learningPathSaveStatus
      ? toastr.info("Favoriden kaldırıldı.")
      : toastr.success("Favoriye eklendi.");
  };

  useEffect(() => {
    const newIcon = learningPathSaveStatus ? "bi-bookmark-fill" : "bi-bookmark";

    setSaveIcon(newIcon);
    const accountLearningPathIsSavedRequest: UpdateAccountLearningPathIsSavedRequest =
      {
        accountId: accountId ?? 0,
        learningPathId: selectedLearningPathIdByParams ?? 0,
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

  //-------------Percent Complete Calculator---------------------

  const accountLessonLearningPathDtos = useSelector(
    (state: any) => state.accountLesson.accountLessonLearningPathDtosByAccountId
  );

  const learningPathActivityScore = useSelector(
    (state: any) => state.accountLearningPath.learningPathActivityScore
  );

  const learningPathPercentComplete = useSelector(
    (state: any) => state.accountLearningPath.learningPathPercentComplete
  );

  const lessonVideoPoint = useSelector(
    (state: any) => state.accountLesson.lessonVideoPoint
  );

  async function accountLessonLearningPathDtoDataBydAccountId(
    accountId: number
  ) {
    try {
      const accountLessonLearningPathDtoResponse =
        await accountLessonService.getListByAccountIdLearningPathDto(accountId);
      const data = accountLessonLearningPathDtoResponse.data.items;
      dispatch(setAccountLessonLearningPathDtoBySelectedAccountId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    accountLessonLearningPathDtoDataBydAccountId(accountId);
  }, [accountId, selectedLearningPathIdByParams, lessonVideoPoint]);

  async function calculateTotalProgressByLearningPathId(
    id: number
  ): Promise<any[]> {
    const filteredDtos = accountLessonLearningPathDtos.filter(
      (dto: any) => dto.learningPathId === id
    );
    const filteredDtosCount = filteredDtos.length;
    dispatch(setLessonCount(filteredDtosCount));

    const totalDurationData: number = filteredDtos.reduce(
      (total: number, dto: any) => total + dto.lessonDuration,
      0
    );
    dispatch(setTotalDuration(totalDurationData));

    const totalPointsDuration = filteredDtos.reduce(
      (total: number, dto: any) =>
        total + (dto.lessonDuration * dto.points) / 100,
      0
    );
    const totalProgress = parseFloat(
      ((totalPointsDuration / totalDurationData) * 100).toFixed(1)
    );

    dispatch(setLearningPathActivityScore(totalProgress));

    const ceiledTotalProgress = Math.ceil(totalProgress);
    dispatch(setLearningPathPercentComplete(ceiledTotalProgress));

    const isCompleteData = ceiledTotalProgress === 100;
    const isContinueData = ceiledTotalProgress > 0 && ceiledTotalProgress < 100;
    await dispatch(
      setAccountLearningPathPercentCompleteRequest({
        accountId: accountId,
        learningPathId: id,
        totalNumberOfPoints: ceiledTotalProgress,
        percentComplete: ceiledTotalProgress,
        isContinue: isContinueData,
        isComplete: isCompleteData,
      })
    );

    return [totalDurationData, totalPointsDuration, totalProgress];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (
          accountLessonLearningPathDtos &&
          accountLessonLearningPathDtos.length > 0
        ) {
          await calculateTotalProgressByLearningPathId(
            selectedLearningPathIdByParams
          );
        }
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchData();
  }, [accountLessonLearningPathDtos, lessonVideoPoint]);

  //-- updateAccountLearningPathPercentCompleteRequest

  const updateAccountLearningPathPercentCompleteRequest = useSelector(
    (state: any) =>
      state.accountLearningPath.accountLearningPathPercentCompleteRequest
  );

  const sendIsPercentCompleteRequest = async () => {
    try {
      //console.log(updateAccountLearningPathPercentCompleteRequest);
      if (updateAccountLearningPathPercentCompleteRequest) {
        await accountLearningPathService.updatePercentComplete(
          updateAccountLearningPathPercentCompleteRequest
        );
      }
    } catch (error) {
      console.error("Hata: PercentComplete durumu güncellenemedi.", error);
    }
  };

  useEffect(() => {
    if (updateAccountLearningPathPercentCompleteRequest) {
      sendIsPercentCompleteRequest();
    }
  }, [updateAccountLearningPathPercentCompleteRequest]);

  // --------------------- learning-path-details-date-info----------------------

  const [learningPathDetailsInfo, setLearningPathDetailsInfo] = useState("");
  const [learningPathDetailsInfoColor, setLearningPathDetailsInfoColor] =
    useState("");

  useEffect(() => {
    if (learningPathPercentComplete == 100) {
      setLearningPathDetailsInfo(" Tebrikler. Başardın!");
      setLearningPathDetailsInfoColor("green");
    } else {
      setLearningPathDetailsInfo(
        formatedEndingTime + " tarihine kadar bitirebilirsin"
      );
      setLearningPathDetailsInfoColor("");
    }
  }, [learningPathPercentComplete]);

  return (
    <div className="learning-path-details-header">
      <div className="learning-path-details-header-left-col">
        <img
          className="learning-path-details-header-img"
          src={
            process.env.PUBLIC_URL +
            filteredByLearningPathIdAccountLearningPath?.imageUrl
          }
        />
      </div>
      <div className="learning-path-details-header-right-col">
        <div className="learning-path-details-header-right-col-body">
          <div className="learning-path-details-header-title-section">
            <h3 className="learning-path-details-header-title">
              {filteredByLearningPathIdAccountLearningPath?.learningPathName}
            </h3>
            <span
              className="learning-path-details-date-info"
              style={{ color: learningPathDetailsInfoColor }}
            >
              {learningPathPercentComplete == 100 && (
                <i className="bi bi-award-fill"></i>
              )}
              {learningPathDetailsInfo}
            </span>
          </div>
          <div className="learning-path-details-header-activity-section">
            <span className="activity-score">
              {learningPathActivityScore + " Puan"}
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
                width: learningPathPercentComplete + "%",
              }}
            ></div>
          </div>
          <div className="learning-path-details-progress-bar-value-text">
            <span>{"%" + learningPathPercentComplete}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathDetailsHeader;
