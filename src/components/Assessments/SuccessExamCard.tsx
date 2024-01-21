import React from "react";
import "./SuccessExamCard.css";
import SuccessExamCardElement from "./SuccessExamCardElement";

type Props = {};

const successExamCardFakeData: any[] = [
  { title: "Front End", redirectUrl: "/my-exams" },
  { title: "Full Stack", redirectUrl: "/my-exams" },
  { title: "Back End", redirectUrl: "/my-exams" },
  { title: "Microsoft SQL Server", redirectUrl: "/my-exams" },
  { title: "Masaüstü Programlama", redirectUrl: "/my-exams" },
];

const SuccessExamCard = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="success-exam-card-component">
        {successExamCardFakeData.map((value, index) => (
          <SuccessExamCardElement
            key={index}
            title={value.title}
            redirectUrl={value.redirectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessExamCard;
