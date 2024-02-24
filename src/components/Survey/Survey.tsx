import React, { useEffect } from "react";
import "./Survey.css";
import SurveyElement from "./SurveyElement";
import SurveyDetailModal from "./SurveyDetailModal";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { useDispatch, useSelector } from "react-redux";
import surveyService from "../../services/surveyService";
import { setSurveys } from "../../store/survey/surveySlice";
import { RootState } from "../../store/configureStore";
import { GetListSurveyListItemDto } from "../../models/surveys/getListSurveyListItemDto";

type Props = {};

const Survey = (props: Props) => {

  const dispatch = useDispatch();

  // refactor
  async function fetchSurveyData() {
    try {
      const surveyDataResponse =
        await surveyService.getAll();
      const data = surveyDataResponse.data.items;

      // refactor
      for (let index = 0; index < data.length; index++) {
        const originalDate = new Date(data[index]["publishedDate"]);
        data[index]["publishedDate"] = `${originalDate.getDate().toString().padStart(2, '0')}-${(originalDate.getMonth() + 1).toString().padStart(2, '0')}-${originalDate.getFullYear().toString().padStart(4, '0')}`;
      }

      dispatch(setSurveys(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  const surveys: GetListSurveyListItemDto[] = useSelector((state: RootState) => state.survey.surveys);

  useEffect(() => {
    fetchSurveyData();
  }, []);

  return (
    <>
      <div className="survey-component">
        {
          (surveys.length > 0)
            ?
            surveys.slice(0, 2).map(({ id, title, content, organizationName, publishedDate, connectionLink }, index) => (
              <div key={index}>
                <SurveyElement
                  id={id.toString()}
                  title={title}
                  organizationName={organizationName}
                  surveyStatus={false}
                />
                <SurveyDetailModal
                  id={id.toString()}
                  title={title}
                  content={content}
                  organizationName={organizationName}
                  publishedDate={publishedDate}
                  connectionLink={connectionLink}
                />
              </div>
            ))
            : <></>
        }
      </div>
      {
        (surveys.length > 2)
          ? <ShowMoreButton redirectUrl="/my-profile" />
          : <></>
      }

      {
        !(surveys.length > 0)
          ?
          <div className="survey-not-found-component">
            <img
              className="image-survey-not-found"
              src={process.env.PUBLIC_URL + "/assets/images/survey-not-found.svg"}
            />
            <div className="information-text">
              Atanmış herhangi anketiniz bulunmamaktadır.
            </div>
          </div>
          : <></>
      }
    </>
  );
};

export default Survey;
