import React from "react";
import "./Survey.css";
import SurveyElement from "./SurveyElement";
import SurveyDetailModal from "./SurveyDetailModal";

type Props = {};

const Survey = (props: Props) => {
  return (
    <div className="survey-component">
      <img
        className="image-survey-not-found"
        src={process.env.PUBLIC_URL + "/assets/images/survey-not-found.svg"}
      />
      <div className="information-text">
        Atanmış herhangi anketiniz bulunmamaktadır.
      </div>
      <SurveyElement />
      <SurveyDetailModal />
    </div>
  );
};

export default Survey;
