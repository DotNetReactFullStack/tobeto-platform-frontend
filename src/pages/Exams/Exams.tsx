import React from "react";
import "./Exams.css";
import ExamElement from "../../components/Exam/ExamElement";
import Banner from "../../components/Banner/Banner";
import ExamDetailModal from "../../components/Exam/ExamDetailModal";
import Pagination from "../../components/Pagination/Pagination";

type Props = {};

const examFakeData: any[] = [
  {
    id: "sinav1",
    title: "Herkes için Kodlama 1A Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: "Herkes İçin Kodlama - 1A",
    duration: 45,
    content: "Herkes için Kodlama 1A Değerlendirme Sınavı -> İçerik",
    numberOfQuestions: 25,
  },
  {
    id: "sinav2",
    title: "Herkes için Kodlama 1B Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: "Herkes İçin Kodlama - 1B",
    duration: 30,
    content: "Herkes için Kodlama 1B Değerlendirme Sınavı -> İçerik",
    numberOfQuestions: 40,
  },
  {
    id: "sinav3",
    title: ".Net 1A Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: ".Net 1A",
    duration: 50,
    content: ".Net 1A Değerlendirme Sınavı -> İçerik",
    numberOfQuestions: 32,
  },
  {
    id: "sinav4",
    title: ".Net 1B Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: ".Net - 1B",
    duration: 70,
    content: ".Net 1B Değerlendirme Sınavı -> İçerik",
    numberOfQuestions: 50,
  },
  {
    id: "sinav5",
    title: "Java 1A Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: "Java - 1A",
    duration: 40,
    content: "Java 1A Değerlendirme Sınavı -> İçerik",
    numberOfQuestions: 20,
  },
  {
    id: "sinav6",
    title: "Java 1B Değerlendirme Sınavı",
    examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
    subTitle: "Java - 1B",
    duration: 100,
    content: "Java 1B Değerlendirme Sınavı -> İçerik",
    numberOfQuestions: 80,
  },
];

const Exams = (props: Props) => {
  return (
    <>
      <Banner bannerTitle="Sınavlarım" />
      <div className="exams-page container main-section">
        {examFakeData.map((value, index) => (
          <>
            <ExamElement
              key={index}
              id={value.id}
              title={value.title}
              examStatusImageUrl={value.examStatusImageUrl}
              subTitle={value.subTitle}
              duration={value.duration}
            />
            <ExamDetailModal
              key={index}
              id={value.id}
              title={value.title}
              content={value.content}
              duration={value.duration}
              numberOfQuestions={value.numberOfQuestions}
            />
          </>
        ))}
        <Pagination />
      </div>
    </>
  );
};

export default Exams;
