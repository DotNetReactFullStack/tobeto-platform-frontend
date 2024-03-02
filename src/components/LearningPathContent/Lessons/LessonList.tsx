import React, { useEffect } from "react";
import "./LessonList.css";
import LessonElement from "./LessonElement";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import { GetListByAccountIdAccountLessonListItemDto } from "../../../models/accountLesson/getListByAccountIdAccountLessonListItemDto";
import { GetListLessonListItemDto } from "../../../models/lesson/getListLessonListItemDto";
import { GetListByCourseIdLessonListItemDto } from "../../../models/lesson/getListByCourseIdLessonListItemDto";
import { setFilteredByCourseIdlessons } from "../../../store/lesson/lessonSlice";

type Props = {};

const LessonList = (props: Props) => {
  const dispatch = useDispatch();

  const selectedCourseId = useSelector(
    (state: any) => state.course.selectedCourseId
  );

  const lessonList: GetListLessonListItemDto[] = useSelector(
    (state: RootState) => state.lesson.lessonList
  );

  const accountLessonsByAccountId: GetListByAccountIdAccountLessonListItemDto[] =
    useSelector(
      (state: RootState) =>
        state.accountLesson.accountLessonsBySelectedAccountId
    );

  // -------filteredByCourseId Lessons ------------

  const filteredByCourseIdlessons: GetListByCourseIdLessonListItemDto[] =
    useSelector((state: RootState) => state.lesson.filteredByCourseIdlessons);

  useEffect(() => {
    const filteredPaths: any[] = lessonList.filter(
      (path) => path.courseId === selectedCourseId
    );
    dispatch(
      setFilteredByCourseIdlessons(
        filteredPaths.length > 0 ? filteredPaths : []
      )
    );
  }, [selectedCourseId]);

  return (
    <div>
      {filteredByCourseIdlessons &&
        filteredByCourseIdlessons.length > 0 &&
        filteredByCourseIdlessons.map((lesson, index) => {
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
