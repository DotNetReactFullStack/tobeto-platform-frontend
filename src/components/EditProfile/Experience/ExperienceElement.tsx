import React from "react";
import "./ExperienceElement.css";
import DeleteModal from "../Modals/DeleteModal";
import DetailModal from "../Modals/DetailModal";

type Props = {
  id: string;
  startingDate: string;
  endingDate: string;
  companyName: string;
  jobTitle: string;
  industry: string;
  cityName: string;
  description: string;
};

const ExperienceElement = ({
  id,
  startingDate,
  endingDate,
  companyName,
  jobTitle,
  industry,
  cityName,
  description,
}: Props) => {
  return (
    <div className="experience-element">
      <div className="experience-element-content">
        <div className="experience-element-header">
          <i className="bi bi-calendar2-range"></i>
          <span>{startingDate + " - " + endingDate}</span>
        </div>
        <div className="experience-element-body">
          <div className="experience-element-company-name">
            <span>Kurum Adı</span>
            <span>{companyName}</span>
          </div>
          <div className="experience-element-job">
            <span>Pozisyon</span>
            <span>{jobTitle}</span>
          </div>
          <div className="experience-element-sector">
            <span>Sektör</span>
            <span>{industry}</span>
          </div>
          <div className="experience-element-city">
            <span>Şehir</span>
            <span>{cityName}</span>
          </div>
        </div>
      </div>
      <div className="experience-element-buttons">
        <button
          className="experience-element-detail-button"
          data-bs-toggle="modal"
          data-bs-target={"#detail-" + id}
        >
          <i className="bi bi-three-dots experience-element-detail-button-icon"></i>
        </button>
        <DetailModal
          detailModalId={id}
          detailModalTitle="İş Açıklaması"
          detailModalContent={description}
        />
        <button
          className="experience-element-delete-button"
          data-bs-toggle="modal"
          data-bs-target={"#accountExperienceId" + id}
        >
          <i className="bi bi-trash experience-element-delete-button-icon"></i>
        </button>
        <DeleteModal deleteModalId={"accountExperienceId" + id} deleteModalTitle="deneyimi" />
      </div>
    </div>
  );
};

export default ExperienceElement;
