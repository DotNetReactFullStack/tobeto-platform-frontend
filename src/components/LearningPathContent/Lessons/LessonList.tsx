import React, { useEffect } from "react";
import "./LessonList.css";
import LessonElement from "./LessonElement";
import { useDispatch, useSelector } from "react-redux";
import lessonService from "../../../services/lessonService";
import { setLessonsBySelectedCourseId } from "../../../store/lesson/lessonSlice";
import { GetListByCourseIdLessonListItemDto } from "../../../models/lesson/getListByCourseIdLessonListItemDto";
import { RootState } from "../../../store/configureStore";

type Props = {
  selectedCourseId: number;
};

const LessonList = ({ selectedCourseId }: Props) => {
  const dispatch = useDispatch();

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
  }, []);

  const lessonsBySelectedCourseId: GetListByCourseIdLessonListItemDto[] =
    useSelector((state: RootState) => state.lesson.lessonsBySelectedCourseId);

  //console.log("lessonsBySelectedCourseId", lessonsBySelectedCourseId);

  return (
    <div>
      {lessonsBySelectedCourseId.length > 0 &&
        lessonsBySelectedCourseId.map((value, index) => (
          <LessonElement
            key={index}
            lessonId={value.id}
            name={value.name}
            duration={value.duration}
            videoId={value.videoUrl}
          />
        ))}
    </div>
  );
};

export default LessonList;
