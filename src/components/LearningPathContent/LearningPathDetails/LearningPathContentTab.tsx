import React, { useEffect, useState } from "react";
import "./LearningPathContentTab.css";
import CourseList from "../Courses/CourseList";
import LessonVideo from "../Lessons/LessonVideo";

type Props = {};

const LearningPathContentTab = (props: Props) => {
  return (
    <div className="learning-path-content-tab">
      <div className="learning-path-content-tab-left-col">
        <CourseList />
      </div>
      <div className="learning-path-content-tab-right-col">
        <LessonVideo />
      </div>
    </div>
  );
};

export default LearningPathContentTab;
