import React, { useEffect } from "react";
import "./LessonVideo.css";

import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import lessonService from "../../../services/lessonService";
import { setLessonBySelectedId } from "../../../store/lesson/lessonSlice";
import { GetByIdLessonResponse } from "../../../models/lesson/getByIdLessonResponse";
import { RootState } from "../../../store/configureStore";
import accountLessonService from "../../../services/accountLessonService";
import { setAccountLessonBySelectedAccountIdAndLessonId } from "../../../store/accountLesson/accountLessonSlice";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";

type Props = {};

const LessonVideo = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  // Youtube

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
  };

  const onEnd = () => {
    console.log("Video ended");
  };

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
        await accountLessonService.getListByAccountIdAndLessonId(
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

  return (
    <div className="lesson-video">
      <div className="lesson-video-section">
        <YouTube
          videoId={youtubeVideoId}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
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
              <i className="bi bi-droplet-half lesson-video-information-status-icon"></i>
              <span className="lesson-video-information-status-text">
                Devam ediyor
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
