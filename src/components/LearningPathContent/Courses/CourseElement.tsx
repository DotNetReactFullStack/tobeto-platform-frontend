import React, { useState } from "react";
import "./CourseElement.css";
import LessonList from "../Lessons/LessonList";

type Props = {
  collapseId: string;
  courseId: number;
  courseName: string;
};

const CourseElement = ({ collapseId, courseId, courseName }: Props) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(true);
  const [courseElementIcon, setCourseElementIcon] =
    useState("bi-chevron-right");

  const handleCourseElementClick = () => {
    const newIcon = isCollapseOpen ? "bi-chevron-down" : "bi-chevron-right";
    setCourseElementIcon(newIcon);
    setIsCollapseOpen(!isCollapseOpen);
  };
  return (
    <div className="course-element">
      <button
        className="course-element-collapse-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#course-" + collapseId}
        aria-expanded="false"
        aria-controls={collapseId}
        onClick={handleCourseElementClick}
      >
        <i className={"bi course-element-collapse-icon " + courseElementIcon} />
        <span className="course-element-collapse-text">{courseName}</span>
      </button>

      <div className="collapse" id={"course-" + collapseId}>
        <div className="collapse-lesson-list">
          <LessonList selectedCourseId={courseId} />
        </div>
      </div>
    </div>
  );
};

export default CourseElement;
