import React from "react";
import "./LearningPathAboutTab.css";
import { GetByAccountIdAndLearningPathIdAccountLearningPathResponse } from "../../../models/accountLearningPaths/getByAccountIdAndLearningPathIdAccountLearningPathResponse";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";

type Props = {};

const LearningPathInfo = (props: Props) => {
  const accountLearningPathBySelectedAccountIdAndLearningPathId: GetByAccountIdAndLearningPathIdAccountLearningPathResponse | null =
    useSelector(
      (state: RootState) =>
        state.accountLearningPath
          .accountLearningPathBySelectedAccountIdAndLearningPathId
    );

  function formatDateToLocaleStringWithTime(dateString?: string): string {
    if (!dateString) {
      return "";
    }
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${day} ${month} ${year} ${time}`;
  }

  const formatedStatingTime: string = formatDateToLocaleStringWithTime(
    accountLearningPathBySelectedAccountIdAndLearningPathId?.startingTime
  );

  const formatedEndingTime: string = formatDateToLocaleStringWithTime(
    accountLearningPathBySelectedAccountIdAndLearningPathId?.endingTime
  );

  const totalDuration = useSelector(
    (state: any) => state.learningPath.totalDuration
  );

  const totalDurationHours = Math.floor(totalDuration / 60);
  const totalMinutes = totalDuration % 60;

  const lessonCount = useSelector(
    (state: any) => state.learningPath.lessonCount
  );

  return (
    <div className="learning-path-info">
      <div className="learning-path-times">
        <div className="learning-path-icons-section">
          <i className="bi bi-calendar-minus learning-path-info-icon"></i>
        </div>
        <div className="learning-path-info-section">
          <div className="learning-path-info-subsection">
            <div className="learning-path-info-title-text">Başlangıç</div>
            <div className="learning-path-info-content-text">
              {formatedStatingTime}
            </div>
          </div>
          <div className="learning-path-info-subsection">
            <div className="learning-path-info-title-text">Bitiş</div>
            <div className="learning-path-info-content-text">
              {formatedEndingTime}
            </div>
          </div>
        </div>
      </div>
      <div className="learning-path-total-duration">
        <div className="learning-path-icons-section">
          <i className="bi bi-stopwatch learning-path-info-icon"></i>
        </div>
        <div className="learning-path-info-section">
          <div className="learning-path-info-subsection">
            <div className="learning-path-info-title-text">Toplam Süre</div>
            <div className="learning-path-info-content-text">
              {totalDurationHours + " Saat " + totalMinutes + " Daika"}
            </div>
          </div>
        </div>
      </div>
      <div className="learning-path-total-video">
        <div className="learning-path-icons-section">
          <i className="bi bi-camera-reels learning-path-info-icon"></i>
        </div>
        <div className="learning-path-info-section">
          <div className="learning-path-info-subsection">
            <div className="learning-path-info-title-text">Toplam Video</div>
            <div className="learning-path-info-content-text">{lessonCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathInfo;
