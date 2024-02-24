import React from "react";
import "./SurveyDetailModal.css";

type Props = {
  id: string;
  title: string;
  content: string;
  organizationName: string;
  publishedDate: string;
  connectionLink: string;
};

const SurveyDetailModal = ({ id, title, content, organizationName, publishedDate, connectionLink }: Props) => {
  return (
    <div
      className="modal modal-xl fade"
      id={`surveyElement${id}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {content}
          </div>
          <div className="modal-body survey-detail">
            Organizasyon: <span>{organizationName}</span>
            <br />
            Yayınlanma tarihi: <span>{publishedDate}</span>
          </div>
          <div className="modal-footer survey-detail-modal-footer-buttons">
            <button
              type="button"
              className="exem-detail-modal-close-button"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
            <a href={connectionLink} target="_blank">
              <button
                type="button"
                className="exem-detail-modal-view-report-button"
              >
                Ankete Git
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetailModal;
