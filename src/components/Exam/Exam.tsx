import React from "react";
import "./Exam.css";
import ExamDetailModal from "./ExamDetailModal";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import ExamElement from "./ExamElement";

type Props = {};

const examFakeData: any[] = [
  {
    title: "Herkes için Kodlama 1A Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: "Herkes İçin Kodlama - 1A",
    duration: "45 Dakika",
  },
  {
    title: "Herkes için Kodlama 1B Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: "Herkes İçin Kodlama - 1B",
    duration: "45 Dakika",
  },
  {
    title: ".Net 1A Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: ".Net 1A",
    duration: "60 Dakika",
  },
  {
    title: ".Net 1B Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: ".Net - 1B",
    duration: "60 Dakika",
  },
  {
    title: "Java 1A Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: "Java - 1A",
    duration: "60 Dakika",
  },
  {
    title: "Java 1B Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: "Java - 1B",
    duration: "60 Dakika",
  },
];

const Exam = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="exam-component">
        <div className="exam-component-header">
          <span className="exam-component-header-title">Sınavlarım</span>
        </div>
        <div className="exam-component-body">

          {examFakeData.slice(0, 2).map((value, index) => (
            <ExamElement
              key={index}
              title={value.title}
              examStatusImageUrl={value.examStatusImageUrl}
              subTitle={value.subTitle}
              duration={value.duration}
            />
          ))}
        </div>
        {
          (examFakeData.length > 2)
            ? <ShowMoreButton redirectUrl="/my-exams" />
            : <></>
        }
      </div>
      <ExamDetailModal />
    </div>
  );
};

export default Exam;
