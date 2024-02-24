import React, { useEffect, useState } from "react";
import "./LessonElement.css";
import { useDispatch, useSelector } from "react-redux";
import { setVideoId } from "../../../store/video/videoSlice";
import { setSelectedLessonId } from "../../../store/lesson/lessonSlice";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";

type Props = {
  lessonId: number;
  name: string;
  duration: number;
  videoId: string;
  lessonElementIcon: string;
};

const LessonElement = ({
  lessonId,
  name,
  duration,
  videoId,
  lessonElementIcon,
}: Props) => {
  const dispatch = useDispatch();

  const handleLessonElementClick = () => {
    dispatch(setVideoId(videoId));
    dispatch(setSelectedLessonId(lessonId));
  };

  return (
    <div className="lesson-element" onClick={handleLessonElementClick}>
      <div className="lesson-element-left-col">
        <div className="lesson-element-title">{name}</div>
        <div className="lesson-element-content">
          <span>Video</span>
          <span>-</span>
          <span>{duration + " dk"}</span>
        </div>
      </div>
      <div className="lesson-element-right-col">
        <i className={"bi lesson-element-status-icon " + lessonElementIcon} />
      </div>
    </div>
  );
};

export default LessonElement;
