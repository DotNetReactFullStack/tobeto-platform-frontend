import React, { useEffect } from "react";
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
  setLessonElementIcon,
  setLessonElementIconColor,
} from "../../../store/accountLesson/accountLessonSlice";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";

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

  async function accountLessonDataBySelectedAccountIdAndLessonId(
    selectedAccountId: number,
    selectedLessontId: number
  ) {
    try {
      const accountLessonResponse =
        await accountLessonService.getByAccountIdAndLessonId(
          selectedAccountId,
          selectedLessontId
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

  const points =
    accountLessonBySelectedAccountIdAndLessonId?.points !== undefined
      ? accountLessonBySelectedAccountIdAndLessonId.points
      : accountLessonBySelectedAccountIdAndLessonId?.points ?? 0;

  // console.log(
  //   "accountLessonBySelectedAccountIdAndLessonId",
  //   accountLessonBySelectedAccountIdAndLessonId
  // );

  // ------------------- Youtube -------------------------------------------

  const youtubeVideoId = useSelector((state: any) => state.video.videoId);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();

    const durationInSeconds = event.target.getDuration();
    const durationInMinutes = Math.round(durationInSeconds / 60);
    //console.log("uzunluk", durationInMinutes);
  };

  const onEnd = () => {
    //console.log("Video ended");
  };

  const onStateChange = (event: any) => {
    //console.log("Current time:", event.target.getCurrentTime());
  };

  // -------------------- is Complete ---------------------

  const lessonVideoPoint: number = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoPoint
  );

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
    if (
      typeof accountLessonBySelectedAccountIdAndLessonId?.points ===
        "undefined" &&
      typeof accountLessonBySelectedAccountIdAndLessonId?.isComplete ===
        "undefined"
    ) {
      dispatch(setLessonVideoIcon("bi-circle-fill"));
      dispatch(setLessonVideoIconColor("#818181"));
      dispatch(setLessonVideoStatusText("Başlamadın"));
      dispatch(setLessonVideoStatusTextColor("#000000"));

      return;
    }
    if (
      accountLessonBySelectedAccountIdAndLessonId?.points == 100 ||
      accountLessonBySelectedAccountIdAndLessonId?.isComplete
    ) {
      dispatch(setLessonVideoIcon("bi-check-circle-fill"));
      dispatch(setLessonVideoIconColor("#3dcb79"));
      dispatch(setLessonElementIcon("bi-check-circle-fill"));
      dispatch(setLessonElementIconColor("#3dcb79"));
      dispatch(setLessonVideoStatusText("Tebrikler, tamamladın!"));
      dispatch(setLessonVideoStatusTextColor("#3dcb79"));
    } else if (
      accountLessonBySelectedAccountIdAndLessonId?.points > 0 &&
      !accountLessonBySelectedAccountIdAndLessonId?.isComplete
    ) {
      dispatch(setLessonVideoIcon("bi-droplet-half"));
      dispatch(setLessonVideoIconColor("#3dcb79"));
      dispatch(setLessonElementIcon("bi-droplet-half"));
      dispatch(setLessonElementIconColor("#3dcb79"));
      dispatch(setLessonVideoStatusText("Devam ediyor"));
      dispatch(setLessonVideoStatusTextColor("#000000"));
    } else {
      dispatch(setLessonVideoIcon("bi-circle-fill"));
      dispatch(setLessonVideoIconColor("#818181"));
      dispatch(setLessonElementIcon(""));
      dispatch(setLessonVideoStatusText("Başlamadın"));
      dispatch(setLessonVideoStatusTextColor("#000000"));
    }
  }, [accountLessonBySelectedAccountIdAndLessonId]);

  //console.log(accountLessonBySelectedAccountIdAndLessonId?.isComplete);

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
              {points + "Puan"}
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
