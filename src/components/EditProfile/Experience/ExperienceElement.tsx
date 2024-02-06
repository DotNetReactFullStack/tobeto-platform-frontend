import React from "react";
import "./ExperienceElement.css";
import DeleteModal from "../Modals/DeleteModal";

type Props = {
  experienceId: string;
  jobStartDate: string;
  jobEndDate: string;
  companyName: string;
  job: string;
  sector: string;
  experienceCity: string;
};

const ExperienceElement = ({
  experienceId,
  jobStartDate,
  jobEndDate,
  companyName,
  job,
  sector,
  experienceCity,
}: Props) => {
  return (
    <div className="experience-element">
      <div className="experience-element-content">
        <div className="experience-element-header">
          <i className="bi bi-calendar2-range"></i>
          <span>{jobStartDate + " - " + jobEndDate}</span>
        </div>
        <div className="experience-element-body">
          <div className="experience-element-company-name">
            <span>Kurum Adı</span>
            <span>{companyName}</span>
          </div>
          <div className="experience-element-job">
            <span>Pozisyon</span>
            <span>{job}</span>
          </div>
          <div className="experience-element-sector">
            <span>Sektör</span>
            <span>{sector}</span>
          </div>
          <div className="experience-element-city">
            <span>Şehir</span>
            <span>{experienceCity}</span>
          </div>
        </div>
      </div>
      <div className="experience-element-buttons">
        <button className="experience-element-edit-button">
          <i className="bi bi-three-dots experience-element-edit-button-icon"></i>
        </button>
        <button
          className="experience-element-delete-button"
          data-bs-toggle="modal"
          data-bs-target={"#" + experienceId}
        >
          <i className="bi bi-trash experience-element-delete-button-icon"></i>
          <DeleteModal
            deleteModalId={experienceId}
            deleteModalTitle="deneyimi"
          />
        </button>
      </div>
    </div>
  );
};

export default ExperienceElement;
