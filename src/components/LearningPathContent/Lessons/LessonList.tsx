import React from "react";
import "./LessonList.css";
import LessonElement from "./LessonElement";

type Props = {
  lessonListData: any[];
};

const LessonList = ({ lessonListData }: Props) => {
  return (
    <div>
      {lessonListData.map((value, index) => (
        <LessonElement
          key={index}
          lessonName={value.lessonName}
          videoId={value.videoId}
        />
      ))}
    </div>
  );
};

export default LessonList;
