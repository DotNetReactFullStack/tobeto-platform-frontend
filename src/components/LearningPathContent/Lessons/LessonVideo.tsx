import React, { useEffect, useRef, useState } from "react";
import "./LessonVideo.css";

import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import lessonService from "../../../services/lessonService";
import { setLessonBySelectedId } from "../../../store/lesson/lessonSlice";
import { GetByIdLessonResponse } from "../../../models/lesson/getByIdLessonResponse";
import { RootState } from "../../../store/configureStore";
import accountLessonService from "../../../services/accountLessonService";
import {
  setAccountLessonBySelectedAccountIdAndLessonId,
  setLessonVideoIconColor,
  setLessonVideoIcon,
  setLessonVideoStatusTextColor,
  setLessonVideoStatusText,
  setLessonVideoPoint,
  setAccountLessonIsCompleteRequest,
  setLessonVideoIsComplete,
} from "../../../store/accountLesson/accountLessonSlice";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";
import {
  setLessonVideoCurrentDuration,
  setLessonVideoDuration,
} from "../../../store/video/videoSlice";
import { updateAccountLessonIsCompleteRequest } from "../../../models/accountLesson/updateAccountLessonIsCompleteRequest";

type Props = {};

const LessonVideo = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  //lessonBySelectedId

  const selectedLessonId = useSelector(
    (state: any) => state.lesson.selectedLessonId
  );

  //console.log("seçilenId", selectedLessonId);
  async function lessonDataBySelectedId(selectedId: number) {
    try {
      const lessonResponse = await lessonService.getById(selectedId);
      const data = lessonResponse.data;
      dispatch(setLessonBySelectedId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    lessonDataBySelectedId(selectedLessonId);
  }, [selectedLessonId]);

  const lessonBySelectedId: GetByIdLessonResponse | null = useSelector(
    (state: RootState) => state.lesson.lessonBySelectedId
  );

  // console.log("lessonBySelectedId", lessonBySelectedId);

  // ----------------- accountLessonDataBySelectedAccountIdAndLessonId ---------------------------

  const lessonVideoPoint: number = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoPoint
  );

  const lessonVideoIsComplete: boolean = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoIsComplete
  );
  async function accountLessonDataBySelectedAccountIdAndLessonId(
    selectedAccountId: number,
    selectedLessonId: number
  ) {
    try {
      const accountLessonResponse =
        await accountLessonService.getByAccountIdAndLessonId(
          selectedAccountId,
          selectedLessonId
        );
      const data = accountLessonResponse.data;
      dispatch(setAccountLessonBySelectedAccountIdAndLessonId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    accountLessonDataBySelectedAccountIdAndLessonId(
      accountId,
      selectedLessonId
    );
  }, [selectedLessonId]);

  const accountLessonBySelectedAccountIdAndLessonId: GetByAccountIdAndLessonIdAccountLessonResponse | null =
    useSelector(
      (state: RootState) =>
        state.accountLesson.accountLessonBySelectedAccountIdAndLessonId
    );

  useEffect(() => {
    const points = accountLessonBySelectedAccountIdAndLessonId?.points;
    const isComplete = accountLessonBySelectedAccountIdAndLessonId?.isComplete;

    if (points !== undefined) {
      dispatch(setLessonVideoPoint(points));
    }

    if (isComplete !== undefined) {
      dispatch(setLessonVideoIsComplete(isComplete));
    }
  }, [accountLessonBySelectedAccountIdAndLessonId]);

  // ------------------- Youtube -------------------------------------------

  const youtubeVideoId = useSelector((state: any) => state.video.videoId);

  const lessonVideoDuration = useSelector(
    (state: any) => state.video.lessonVideoDuration
  );

  const lessonVideoCurrentDuration = useSelector(
    (state: any) => state.video.lessonVideoCurrentDuration
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
    event.target.playVideo();

    const durationInSeconds = event.target.getDuration();
    dispatch(setLessonVideoDuration(durationInSeconds));
    const durationInMinutes = Math.round(durationInSeconds / 60);
    //console.log("uzunluk", durationInMinutes);

    youtubePlayerRef.current = event.target; // youtubePlayerRef'i video oynatıcısına atama
  };

  const onEnd = () => {
    //console.log("Video ended");
    // Videonun bittiğinde, son zamanı kaydedin
  };

  const onStateChange = (event: any) => {
    //console.log("Current time:", event.target.getCurrentTime());
  };

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
            <span>{lessonBySelectedId?.name}</span>
          </div>
          <div className="lesson-video-information">
            <span className="lesson-video-information-duration">
              {"Video - " + lessonBySelectedId?.duration}
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
