import React, { useEffect } from "react";
import "./CourseList.css";
import CourseElement from "./CourseElement";
import { useDispatch, useSelector } from "react-redux";
import courseLearningPathService from "../../../services/courseLearningPathService";
import { setFilteredByLearningPathIdCourseLearningPaths } from "../../../store/courseLearningPath/courseLearningPathSlice";
import { GetListByLearningPathIdCourseLearningPathListItemDto } from "../../../models/courseLearningPaths/GetListByLearningPathIdCourseLearningPathListItemDto";
import { RootState } from "../../../store/configureStore";
import { useParams } from "react-router-dom";
import { GetListCourseLearningPathListItemDto } from "../../../models/courseLearningPaths/getListCourseLearningPathListItemDto";

type Props = {};

const CourseList = (props: Props) => {
  // ----------------- courseLearningPathDataBySelectedLearningPathId ---------------------------

  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  const params = useParams<{ learningPathId: string }>();
  const selectedLearningPathIdByParams = parseInt(
    params.learningPathId || "0",
    10
  );

  const courseLearningPaths: GetListCourseLearningPathListItemDto[] =
    useSelector(
      (state: RootState) => state.courseLearningPath.courseLearningPaths
    );

  // GetListCourseLearningPaths -> filteredLearningPathId

  const filteredByLearningPathIdCourseLearningPaths: GetListByLearningPathIdCourseLearningPathListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.courseLearningPath.filteredByLearningPathIdCourseLearningPaths
    );

  useEffect(() => {
    const filteredPaths: any = courseLearningPaths.filter(
      (path) => path.learningPathId === selectedLearningPathIdByParams
    );
    dispatch(
      setFilteredByLearningPathIdCourseLearningPaths(
        filteredPaths.length > 0 ? filteredPaths : []
      )
    );
  }, [selectedLearningPathIdByParams]);

  return (
    <div className="course-list">
      {filteredByLearningPathIdCourseLearningPaths &&
        filteredByLearningPathIdCourseLearningPaths.length > 0 &&
        filteredByLearningPathIdCourseLearningPaths.map((value, index) => (
          <CourseElement
            key={index}
            collapseId={"collapse-course" + value.id}
            courseId={value.courseId}
            courseName={value.courseName}
          />
        ))}
    </div>
  );
};

export default CourseList;
