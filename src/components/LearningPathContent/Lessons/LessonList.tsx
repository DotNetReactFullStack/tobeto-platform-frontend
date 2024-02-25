import React, { useEffect } from "react";
import "./LessonList.css";
import LessonElement from "./LessonElement";
import { useDispatch, useSelector } from "react-redux";
import lessonService from "../../../services/lessonService";
import { setLessonsBySelectedCourseId } from "../../../store/lesson/lessonSlice";
import { GetListByCourseIdLessonListItemDto } from "../../../models/lesson/getListByCourseIdLessonListItemDto";
import { RootState } from "../../../store/configureStore";
import { GetListByAccountIdAccountLessonListItemDto } from "../../../models/accountLesson/getListByAccountIdAccountLessonListItemDto";
import accountLessonService from "../../../services/accountLessonService";
import { setAccountLessonsBySelectedAccountId } from "../../../store/accountLesson/accountLessonSlice";

type Props = {
  selectedCourseId: number;
};

const LessonList = ({ selectedCourseId }: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  const selectedLessonId = useSelector(
    (state: any) => state.lesson.selectedLessonId
  );

  const lessonVideoPoint: number = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoPoint
  );

  // ----------------- lessonDataBySelectedCourseId ---------------------------

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
    lessonDataBySelectedCourseId(selectedCourseId);
  }, [selectedCourseId, lessonVideoPoint]);

  const lessonsBySelectedCourseId: GetListByCourseIdLessonListItemDto[] =
    useSelector((state: RootState) => state.lesson.lessonsBySelectedCourseId);

  // ----------------- AccountLessonDataByAccountId ---------------------------

  async function fetchAccountLessonsDataByAccountId(accountId: number) {
    try {
      const accountLessonsResponse =
        await accountLessonService.getListByAccountId(accountId);
      const data = accountLessonsResponse.data.items;
      dispatch(setAccountLessonsBySelectedAccountId(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchAccountLessonsDataByAccountId(accountId);
  }, [selectedLessonId, lessonVideoPoint]);

  const accountLessonsByAccountId: GetListByAccountIdAccountLessonListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountLesson.accountLessonsBySelectedAccountId
    );

  return (
    <div>
      {lessonsBySelectedCourseId.length > 0 &&
        lessonsBySelectedCourseId.map((lesson, index) => {
          const matchingAccountLesson = accountLessonsByAccountId.find(
            (accountLesson) => accountLesson.lessonId === lesson.id
          );

          let lessonElementIcon = "";
          if (matchingAccountLesson) {
            if (
              matchingAccountLesson.points == 100 ||
              matchingAccountLesson.isComplete
            ) {
              lessonElementIcon = "bi-check-circle-fill";
            } else if (
              matchingAccountLesson.points > 0 &&
              !matchingAccountLesson.isComplete
            ) {
              lessonElementIcon = "bi-droplet-half";
            }
          }
          return (
            <LessonElement
              key={index}
              lessonId={lesson.id}
              name={lesson.name}
              duration={lesson.duration}
              videoId={lesson.videoUrl}
              lessonElementIcon={lessonElementIcon}
            />
          );
        })}
    </div>
  );
};

export default LessonList;
