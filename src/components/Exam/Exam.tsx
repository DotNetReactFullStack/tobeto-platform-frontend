import React from "react";
import "./Exam.css";
import ExamDetailModal from "./ExamDetailModal";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import ExamElement from "./ExamElement";

type Props = {};

const Exam = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="exam-component">
        <div className="exam-component-header">
          <span className="exam-component-header-title">Sınavlarım</span>
        </div>
        <div className="exam-component-body">
          <ExamElement />
          <ExamElement />
          <ExamElement />
          <ExamElement />
        </div>
        <ShowMoreButton />
      </div>
      <ExamDetailModal />
    </div>
  );
};

export default Exam;
