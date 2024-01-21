import React from "react";
import "./CourseList.css";
import CourseElement from "./CourseElement";

type Props = {
  courseListData: any[];
};

const CourseList = ({ courseListData }: Props) => {
  return (
    <div className="course-list">
      {courseListData.map((value, index) => (
        <CourseElement
          key={index}
          collapseId={"collapse-course" + index}
          courseName={value.courseName}
          lessonListData={value.lessonList}
        />
      ))}
    </div>
  );
};

export default CourseList;
