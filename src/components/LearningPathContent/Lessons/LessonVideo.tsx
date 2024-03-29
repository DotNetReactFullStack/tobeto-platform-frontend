import React, { useEffect, useRef, useState } from "react";
import "./LessonVideo.css";

import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import lessonService from "../../../services/lessonService";
import {
  setFilteredByIdlesson,
  setUpdateLessonDuration,
} from "../../../store/lesson/lessonSlice";
import { GetByIdLessonResponse } from "../../../models/lesson/getByIdLessonResponse";
import { RootState } from "../../../store/configureStore";
import accountLessonService from "../../../services/accountLessonService";
import {
  setLessonVideoIconColor,
  setLessonVideoIcon,
  setLessonVideoStatusTextColor,
  setLessonVideoStatusText,
  setLessonVideoPoint,
  setAccountLessonIsCompleteRequest,
  setLessonVideoIsComplete,
  setFilteredByLessonIdAccountLessonsBySelectedAccountId,
} from "../../../store/accountLesson/accountLessonSlice";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";
import {
  setLessonVideoCurrentDuration,
  setLessonVideoDuration,
} from "../../../store/video/videoSlice";
import { updateAccountLessonIsCompleteRequest } from "../../../models/accountLesson/updateAccountLessonIsCompleteRequest";
import { UpdateLessonDurationRequest } from "../../../models/lesson/updateLessonDurationRequest";
import { GetListLessonListItemDto } from "../../../models/lesson/getListLessonListItemDto";
import { GetListByAccountIdAccountLessonListItemDto } from "../../../models/accountLesson/getListByAccountIdAccountLessonListItemDto";

type Props = {};

const LessonVideo = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  const lessonList: GetListLessonListItemDto[] = useSelector(
    (state: RootState) => state.lesson.lessonList
  );

  //lessonBySelectedId

  const selectedLessonId = useSelector(
    (state: any) => state.lesson.selectedLessonId
  );

  const filteredByIdlesson: GetByIdLessonResponse | null = useSelector(
    (state: RootState) => state.lesson.filteredByIdlesson
  );

  useEffect(() => {
    const filteredPaths: any[] = lessonList.filter(
      (path) => path.id === selectedLessonId
    );
    dispatch(
      setFilteredByIdlesson(filteredPaths.length > 0 ? filteredPaths[0] : null)
    );
  }, [selectedLessonId]);

  // -------- filteredByLessonId AccountLessonsBySelectedAccountId--------------------

  const lessonVideoPoint: number = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoPoint
  );

  const lessonVideoIsComplete: boolean = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoIsComplete
  );

  const accountLessonsBySelectedAccountId: GetListByAccountIdAccountLessonListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountLesson.accountLessonsBySelectedAccountId
    );

  const filteredByLessonIdAccountLessonsBySelectedAccountId: GetByAccountIdAndLessonIdAccountLessonResponse | null =
    useSelector(
      (state: RootState) =>
        state.accountLesson.filteredByLessonIdAccountLessonsBySelectedAccountId
    );

  useEffect(() => {
    const filteredPaths: any[] = accountLessonsBySelectedAccountId.filter(
      (path) => path.lessonId === selectedLessonId
    );
    dispatch(
      setFilteredByLessonIdAccountLessonsBySelectedAccountId(
        filteredPaths.length > 0 ? filteredPaths[0] : null
      )
    );
  }, [selectedLessonId]);

  //---------------SetLessonVideoPoint , SetLessonVideoIsComplete--------------

  useEffect(() => {
    const points = filteredByLessonIdAccountLessonsBySelectedAccountId?.points;
    const isComplete =
      filteredByLessonIdAccountLessonsBySelectedAccountId?.isComplete;

    if (points !== undefined) {
      dispatch(setLessonVideoPoint(points));
    }

    if (isComplete !== undefined) {
      dispatch(setLessonVideoIsComplete(isComplete));
    }
  }, [filteredByLessonIdAccountLessonsBySelectedAccountId]);

  // ------------------- Youtube -------------------------------------------

  const youtubeVideoId = useSelector((state: any) => state.video.videoId);

  const lessonVideoDuration = useSelector(
    (state: any) => state.video.lessonVideoDuration
  );

  const lessonVideoCurrentDuration = useSelector(
    (state: any) => state.video.lessonVideoCurrentDuration
  );

  const updateLessonDuration = useSelector(
    (state: any) => state.lesson.updateLessonDuration
  );

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const youtubePlayerRef = useRef<any>(null); // useRef ile youtubePlayerRef tanımlaması

  const onReady = (event: any) => {
    event.target.pauseVideo(); // Videoyu duraklat

    const durationInSeconds = event.target.getDuration();
    dispatch(setLessonVideoDuration(durationInSeconds));
    const durationInMinutes = Math.round(durationInSeconds / 60);
    //console.log("uzunluk", durationInMinutes);

    youtubePlayerRef.current = event.target; // youtubePlayerRef'i video oynatıcısına atama
    const updateLessonDurationData: UpdateLessonDurationRequest = {
      id: Number(selectedLessonId),
      duration: Number(durationInMinutes),
    };
    dispatch(setUpdateLessonDuration(updateLessonDurationData));
  };

  const onEnd = () => {
    //console.log("Video ended");
    // Videonun bittiğinde, son zamanı kaydedin
  };

  const onStateChange = (event: any) => {
    //console.log("Current time:", event.target.getCurrentTime());
  };

  const sendUpdateLessonDurationRequest = async (
    updateLessonDurationData: UpdateLessonDurationRequest
  ) => {
    try {
      if (
        updateLessonDurationData !== null &&
        updateLessonDurationData !== undefined
      ) {
        await lessonService.updateLessonDuration(updateLessonDurationData);
      }
    } catch (error) {
      console.error("Hata: Duration durumu güncellenemedi.", error);
    }
  };

  useEffect(() => {
    if (updateLessonDuration !== null && updateLessonDuration !== undefined) {
      sendUpdateLessonDurationRequest(updateLessonDuration);
    }
  }, [updateLessonDuration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (youtubePlayerRef.current?.getPlayerState() === 1) {
        // Video oynatılıyorsa (getPlayerState() 1 döndürür)
        const currentDurationInSeconds =
          youtubePlayerRef.current?.getCurrentTime();
        dispatch(setLessonVideoCurrentDuration(currentDurationInSeconds));
      }
    }, 250); // 0,25 saniyede bir currentDuration yenilenir.

    return () => clearInterval(interval);
  }, []);

  // ------------------- Point & isComplete Calculation -----------

  useEffect(() => {
    const progressPercentage = Math.round(
      (lessonVideoCurrentDuration / lessonVideoDuration) * 100
    );
    dispatch(setLessonVideoPoint(progressPercentage));
    let isComplete = false;
    if (progressPercentage > 95) {
      isComplete = true;
    }
    dispatch(setLessonVideoIsComplete(isComplete));
    //console.log("%", progressPercentage);
  }, [lessonVideoCurrentDuration, lessonVideoDuration]);

  useEffect(() => {
    let isComplete = false;
    let points = lessonVideoPoint;
    if (points > 95) {
      isComplete = true;
      points = 100;
    }
    const accountLessonIsCompleteRequestData: updateAccountLessonIsCompleteRequest =
      {
        lessonId: selectedLessonId,
        accountId: accountId,
        points: points,
        isComplete: isComplete,
      };
    dispatch(
      setAccountLessonIsCompleteRequest(accountLessonIsCompleteRequestData)
    );
  }, [lessonVideoPoint]);

  const accountLessonIsCompleteRequest: updateAccountLessonIsCompleteRequest | null =
    useSelector(
      (state: RootState) => state.accountLesson.accountLessonIsCompleteRequest
    );

  const sendIsCompleteRequest = async () => {
    try {
      if (accountLessonIsCompleteRequest !== null) {
        await accountLessonService.updateIsComplete(
          accountLessonIsCompleteRequest
        );
      }
    } catch (error) {
      console.error("Hata: isLiked durumu güncellenemedi.", error);
    }
  };

  useEffect(() => {
    if (accountLessonIsCompleteRequest !== null) {
      sendIsCompleteRequest();
    }
  }, [accountLessonIsCompleteRequest]);

  // -------------------- is Complete Icon---------------------

  const lessonVideoIcon: string = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoIcon
  );
  const lessonVideoIconColor: string = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoIconColor
  );

  const lessonVideoStatusText: string = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoStatusText
  );
  const lessonVideoStatusTextColor: string = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoStatusTextColor
  );

  useEffect(() => {
    if (lessonVideoPoint > 95 || lessonVideoIsComplete) {
      dispatch(setLessonVideoIcon("bi-check-circle-fill"));
      dispatch(setLessonVideoIconColor("#3dcb79"));

      dispatch(setLessonVideoStatusText("Tebrikler, tamamladın!"));
      dispatch(setLessonVideoStatusTextColor("#3dcb79"));
    } else if (lessonVideoPoint > 0 && !lessonVideoIsComplete) {
      dispatch(setLessonVideoIcon("bi-droplet-half"));
      dispatch(setLessonVideoIconColor("#3dcb79"));

      dispatch(setLessonVideoStatusText("Devam ediyor"));
      dispatch(setLessonVideoStatusTextColor("#000000"));
    } else {
      dispatch(setLessonVideoIcon("bi-circle-fill"));
      dispatch(setLessonVideoIconColor("#818181"));

      dispatch(setLessonVideoStatusText("Başlamadın"));
      dispatch(setLessonVideoStatusTextColor("#000000"));
    }
  }, [lessonVideoPoint]);

  return (
    <div className="lesson-video">
      <div className="lesson-video-section">
        <YouTube
          videoId={youtubeVideoId}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
          onStateChange={onStateChange}
        />
      </div>
      <div className="lesson-video-body">
        <div className="lesson-video-content">
          <div className="lesson-video-title">
            <span>{filteredByIdlesson?.name}</span>
          </div>
          <div className="lesson-video-information">
            <span className="lesson-video-information-duration">
              {"Video - " + filteredByIdlesson?.duration + " dk"}
            </span>
            <span className="lesson-video-information-account-point">
              {lessonVideoPoint + " Puan"}
            </span>
            <div className="lesson-video-information-status">
              <i
                className={
                  "bi lesson-video-information-status-icon " + lessonVideoIcon
                }
                style={{ color: lessonVideoIconColor }}
              ></i>
              <span
                className="lesson-video-information-status-text"
                style={{ color: lessonVideoStatusTextColor }}
              >
                {lessonVideoStatusText}
              </span>
            </div>
          </div>
        </div>
        <div className="lesson-video-detail-button-section">
          <button className="lesson-video-detail-button">
            <span className="lesson-video-detail-button-text">DETAY</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonVideo;
