import React from "react";
import "./ExamDetailModal.css";

type Props = {
  id: string;
  title: string;
  content: string;
  duration: number;
  numberOfQuestions: number;
};

const ExamDetailModal = ({
  id,
  title,
  content,
  duration,
  numberOfQuestions,
}: Props) => {
  return (
    <div
      className="modal modal-xl fade"
      id={id}
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
          <div className="modal-body">{content}</div>
          <div className="modal-body exam-detail">
            <span>{"Sınav Süresi : " + duration + " Dakika"}</span>
            <br />
            <span>{"Soru Sayısı : " + numberOfQuestions}</span>
            <br />
            <span>Soru Tipi : Çoktan Seçmeli</span>
          </div>
          <div className="modal-footer exam-detail-modal-footer-buttons">
            <button
              type="button"
              className="exem-detail-modal-close-button"
              data-bs-dismiss="modal"
            >
              Kapat
            </button>
            <button
              type="button"
              className="exem-detail-modal-view-report-button"
            >
              Raporu Görüntüle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailModal;
