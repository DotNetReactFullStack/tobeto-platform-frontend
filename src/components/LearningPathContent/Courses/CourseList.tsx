import React, { useEffect } from "react";
import "./CourseList.css";
import CourseElement from "./CourseElement";
import { useDispatch, useSelector } from "react-redux";
import courseLearningPathService from "../../../services/courseLearningPathService";
import { setCourseLearningPathsBySelectedLearningPathId } from "../../../store/courseLearningPath/courseLearningPathSlice";
import { GetListByLearningPathIdCourseLearningPathListItemDto } from "../../../models/courseLearningPaths/GetListByLearningPathIdCourseLearningPathListItemDto";
import { RootState } from "../../../store/configureStore";

type Props = {
  courseListData: any[];
};

const CourseList = ({ courseListData }: Props) => {
  // ----------------- courseLearningPathDataBySelectedLearningPathId ---------------------------

  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  const selectedLearningPathIdFakeData: number = 1;

  async function courseLearningPathDataBySelectedLearningPathId(
    selectedLearningPathId: number
  ) {
    try {
      const courseLearningPathsresponse =
        await courseLearningPathService.getListByLearningPathId(
          selectedLearningPathId
        );
      const data = courseLearningPathsresponse.data.items;
      dispatch(setCourseLearningPathsBySelectedLearningPathId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    courseLearningPathDataBySelectedLearningPathId(
      selectedLearningPathIdFakeData
    );
  }, []);

  const courseLearningPathsBySelectedLearningPathId: GetListByLearningPathIdCourseLearningPathListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.courseLearningPath.courseLearningPathsBySelectedLearningPathId
    );

  // console.log(
  //   "courseLearningPathsBySelectedLearningPathId",
  //   courseLearningPathsBySelectedLearningPathId
  // );

  return (
    <div className="course-list">
      {courseLearningPathsBySelectedLearningPathId.length > 0 &&
        courseLearningPathsBySelectedLearningPathId.map((value, index) => (
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
