import React, { useEffect, useState } from "react";
import "./CourseElement.css";
import LessonList from "../Lessons/LessonList";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCourseId } from "../../../store/course/courseSlice";
import { RootState } from "../../../store/configureStore";
import { useLocation } from "react-router-dom";

type Props = {
  collapseId: string;
  courseId: number;
  courseName: string;
};

const CourseElement = ({ collapseId, courseId, courseName }: Props) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const [courseElementIcon, setCourseElementIcon] =
    useState("bi-chevron-right");

  const dispatch = useDispatch();
  const location = useLocation();

  const handleCourseElementClick = () => {
    const newIcon = isCollapseOpen ? "bi-chevron-right" : "bi-chevron-down";
    setCourseElementIcon(newIcon);
    setIsCollapseOpen(!isCollapseOpen);
    dispatch(setSelectedCourseId(courseId));
  };

  const selectedCourseId = useSelector(
    (state: RootState) => state.course.selectedCourseId
  );

  useEffect(() => {
    setIsCollapseOpen(selectedCourseId === courseId);
  }, [selectedCourseId]);

  useEffect(() => {
    setIsCollapseOpen(false);
    setCourseElementIcon("bi-chevron-right");
  }, [location.pathname]); // location.pathname değiştiğinde useEffect çalışacak

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

      <div
        className={"collapse " + (isCollapseOpen ? "show" : "")}
        id={"course-" + collapseId}
      >
        <div className="collapse-lesson-list">
          <LessonList />
        </div>
      </div>
    </div>
  );
};

export default CourseElement;
