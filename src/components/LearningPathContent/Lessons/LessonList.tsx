import React, { useEffect } from "react";
import "./LessonList.css";
import LessonElement from "./LessonElement";
import { useDispatch, useSelector } from "react-redux";
import lessonService from "../../../services/lessonService";
import { setLessonList } from "../../../store/lesson/lessonSlice";
import { RootState } from "../../../store/configureStore";
import { GetListByAccountIdAccountLessonListItemDto } from "../../../models/accountLesson/getListByAccountIdAccountLessonListItemDto";
import accountLessonService from "../../../services/accountLessonService";
import { setAccountLessonsBySelectedAccountId } from "../../../store/accountLesson/accountLessonSlice";
import { GetListLessonListItemDto } from "../../../models/lesson/getListLessonListItemDto";

type Props = {};

const LessonList = (props: Props) => {
  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );
  const selectedCourseId = useSelector(
    (state: any) => state.course.selectedCourseId
  );

  const selectedLessonId = useSelector(
    (state: any) => state.lesson.selectedLessonId
  );

  const lessonVideoPoint: number = useSelector(
    (state: RootState) => state.accountLesson.lessonVideoPoint
  );

  const lessonList: GetListLessonListItemDto[] = useSelector(
    (state: RootState) => state.lesson.lessonList
  );

  //----------------- lessonListData ---------------------------

  async function lessonListData() {
    try {
      const lessonListResponse = await lessonService.getListAll();
      const data = lessonListResponse.data.items;
      dispatch(setLessonList(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    lessonListData();
  }, []);

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
      {lessonList &&
        lessonList.length > 0 &&
        lessonList
          .filter((lesson) => lesson.courseId === selectedCourseId)
          .map((lesson, index) => {
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
