import React from "react";
import "./Survey.css";
import SurveyElement from "./SurveyElement";
import SurveyDetailModal from "./SurveyDetailModal";

type Props = {};

const surveyFakeData: any[] = [
  {
    id: 'anket1',
    title: 'Anket 1',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
    organization: 'İstanbul Kodluyor',
    publishedDate: '15.01.2024',
    surveyStatus: false,
    surveyLink: 'https://form.jotform.com/240143980661960',
  },
  {
    id: 'anket2',
    title: 'Anket 2',
    content: `Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
    organization: 'Tobeto',
    publishedDate: '15.01.2024',
    surveyStatus: true,
    surveyLink: 'https://form.jotform.com/240143980661960',
  },
  {
    id: 'anket3',
    title: 'Anket 3',
    content: `The Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
    organization: 'Enocta',
    publishedDate: '15.01.2024',
    surveyStatus: true,
    surveyLink: 'https://form.jotform.com/240143980661960',
  },
];

const Survey = (props: Props) => {
  return (
    <>
      <div className="survey-component">
        {
          (surveyFakeData.length > 0)
            ?
            surveyFakeData.slice(0, 2).map(({ id, title, content, organization, publishedDate, surveyStatus, surveyLink }, index) => (
              <>
                <SurveyElement
                  key={index}
                  id={id}
                  title={title}
                  organization={organization}
                  surveyStatus={surveyStatus}
                />
                <SurveyDetailModal
                  id={id}
                  title={title}
                  content={content}
                  organization={organization}
                  publishedDate={publishedDate}
                  surveyLink={surveyLink}
                />
              </>
            ))
            : <></>
        }
      </div>

      {
        !(surveyFakeData.length > 0)
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
