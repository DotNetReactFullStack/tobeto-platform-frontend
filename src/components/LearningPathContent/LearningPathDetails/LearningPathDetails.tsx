import React, { useEffect } from "react";
import "./LearningPathDetails.css";
import LearningPathDetailsHeader from "./LearningPathDetailsHeader";
import LearningPathDetailsNavTabs from "./LearningPathDetailsNavTabs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  LastWatchedVideo,
  setLastWatchedVideoForLearningPath,
  setVideoId,
} from "../../../store/video/videoSlice";
import { setSelectedLessonId } from "../../../store/lesson/lessonSlice";

type Props = {};

const LearningPathDetails = (props: Props) => {
  const params = useParams<{ learningPathId: string }>();
  const selectedLearningPathIdByParams = params.learningPathId || "0";

  const youtubeVideoId = useSelector((state: any) => state.video.videoId);

  const selectedLessonId = useSelector(
    (state: any) => state.lesson.selectedLessonId
  );
  const lastWatchedVideos = useSelector(
    (state: any) => state.video.lastWatchedVideos
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setLastWatchedVideoForLearningPath({
        learningPathId: selectedLearningPathIdByParams,
        videoId: youtubeVideoId,
        lessonId: selectedLessonId,
      })
    );
  }, [youtubeVideoId]);

  useEffect(() => {
    // const watchedVideo = lastWatchedVideos.find(
    //   (video: LastWatchedVideo) =>
    //     video.learningPathId === selectedLearningPathIdByParams
    // );
    // if (watchedVideo) {
    //   dispatch(setVideoId(watchedVideo.videoId));
    //   dispatch(setSelectedLessonId(watchedVideo.lessonId));
    // }

    const watchedVideo = lastWatchedVideos.find(
      (video: LastWatchedVideo) =>
        video.learningPathId === selectedLearningPathIdByParams
    );
    if (watchedVideo !== undefined) {
      dispatch(setVideoId(watchedVideo.videoId));
      dispatch(setSelectedLessonId(watchedVideo.lessonId));
    } else {
    }

  }, [selectedLearningPathIdByParams]);

  return (
    <div className="learning-path-details">
      <LearningPathDetailsHeader />
      <LearningPathDetailsNavTabs />
    </div>
  );
};

export default LearningPathDetails;
