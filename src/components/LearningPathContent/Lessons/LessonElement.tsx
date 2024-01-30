import React, { useEffect, useState } from "react";
import "./LessonElement.css";
import { useDispatch, useSelector } from "react-redux";
import { setVideoId } from "../../../store/video/videoSlice";

type Props = {
  lessonName: string;
  videoId: string;
};

const LessonElement = ({ lessonName, videoId }: Props) => {
  const dispatch = useDispatch();

  const handleLessonElementClick = () => {
    dispatch(setVideoId(videoId));
  };

  return (
    <div className="lesson-element" onClick={handleLessonElementClick}>
      <div className="lesson-element-left-col">
        <div className="lesson-element-title">{lessonName}</div>
        <div className="lesson-element-content">
          <span>Video</span>
          <span>-</span>
          <span>14 dk</span>
        </div>
      </div>
      <div className="lesson-element-right-col">
        <i className="bi bi-check-circle-fill lesson-element-status-icon" />
      </div>
    </div>
  );
};

export default LessonElement;
