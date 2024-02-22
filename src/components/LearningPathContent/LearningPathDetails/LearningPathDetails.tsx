import React, { useEffect } from "react";
import "./LearningPathDetails.css";
import LearningPathDetailsHeader from "./LearningPathDetailsHeader";
import LearningPathDetailsNavTabs from "./LearningPathDetailsNavTabs";
import { useDispatch, useSelector } from "react-redux";
import accountLearningPathService from "../../../services/accountLearningPathService";
import { setAccountLearningPathBySelectedAccountIdAndLearningPathId } from "../../../store/accountLearningPath/accountLearningPathSlice";
import { GetByAccountIdAndLearningPathIdAccountLearningPathResponse } from "../../../models/accountLearningPaths/getByAccountIdAndLearningPathIdAccountLearningPathResponse";
import { RootState } from "../../../store/configureStore";
import courseLearningPathService from "../../../services/courseLearningPathService";
import { setCourseLearningPathsBySelectedLearningPathId } from "../../../store/courseLearningPath/courseLearningPathSlice";
import { GetListByLearningPathIdCourseLearningPathListItemDto } from "../../../models/courseLearningPaths/GetListByLearningPathIdCourseLearningPathListItemDto";
import {
  setLessonBySelectedId,
  setLessonsBySelectedCourseId,
} from "../../../store/lesson/lessonSlice";
import lessonService from "../../../services/lessonService";
import { GetListByCourseIdLessonListItemDto } from "../../../models/lesson/getListByCourseIdLessonListItemDto";
import { GetByIdLessonResponse } from "../../../models/lesson/getByIdLessonResponse";
import accountLessonService from "../../../services/accountLessonService";
import { setAccountLessonBySelectedAccountIdAndLessonId } from "../../../store/accountLesson/accountLessonSlice";
import { GetByAccountIdAndLessonIdAccountLessonResponse } from "../../../models/accountLesson/getByAccountIdAndLessonIdAccountLessonResponse";

type Props = {};

const LearningPathDetails = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  // ----------------- courseLearningPathDataBySelectedLearningPathId ---------------------------

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

  console.log(
    "courseLearningPathsBySelectedLearningPathId",
    courseLearningPathsBySelectedLearningPathId
  );

  // ----------------- lessonDataBySelectedCourseId ---------------------------

  const selectedCourseIdFakeData: number = 1;

  async function lessonDataBySelectedCourseId(selectedCourseId: number) {
    try {
      const lessonsResponse = await lessonService.getListByCourseId(
        selectedCourseId
      );
      const data = lessonsResponse.data.items;
      dispatch(setLessonsBySelectedCourseId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    lessonDataBySelectedCourseId(selectedCourseIdFakeData);
  }, []);

  const lessonsBySelectedCourseId: GetListByCourseIdLessonListItemDto[] =
    useSelector((state: RootState) => state.lesson.lessonsBySelectedCourseId);

  console.log("lessonsBySelectedCourseId", lessonsBySelectedCourseId);

  // ----------------- lessonDataBySelectedId ---------------------------

  const selectedLessonIdFakeData: number = 1;

  async function lessonDataBySelectedId(selectedId: number) {
    try {
      const lessonResponse = await lessonService.getById(selectedId);
      const data = lessonResponse.data;
      dispatch(setLessonBySelectedId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    lessonDataBySelectedId(selectedLessonIdFakeData);
  }, []);

  const lessonBySelectedId: GetByIdLessonResponse | null = useSelector(
    (state: RootState) => state.lesson.lessonBySelectedId
  );

  console.log("lessonBySelectedId", lessonBySelectedId);

  // ----------------- accountLessonDataBySelectedAccountIdAndLessonId ---------------------------

  //const selectedLessonIdFakeData: number = 1;

  async function accountLessonDataBySelectedAccountIdAndLessonId(
    selectedAccountId: number,
    selectedLessontId: number
  ) {
    try {
      const accountLessonResponse =
        await accountLessonService.getListByAccountIdAndLessonId(
          selectedAccountId,
          selectedLessontId
        );
      const data = accountLessonResponse.data;
      dispatch(setAccountLessonBySelectedAccountIdAndLessonId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    accountLessonDataBySelectedAccountIdAndLessonId(
      accountId,
      selectedLessonIdFakeData
    );
  }, []);

  const accountLessonBySelectedAccountIdAndLessonId: GetByAccountIdAndLessonIdAccountLessonResponse | null =
    useSelector(
      (state: RootState) =>
        state.accountLesson.accountLessonBySelectedAccountIdAndLessonId
    );

  console.log(
    "accountLessonBySelectedAccountIdAndLessonId",
    accountLessonBySelectedAccountIdAndLessonId
  );

  return (
    <div className="learning-path-details">
      <LearningPathDetailsHeader />
      <LearningPathDetailsNavTabs />
    </div>
  );
};

export default LearningPathDetails;
