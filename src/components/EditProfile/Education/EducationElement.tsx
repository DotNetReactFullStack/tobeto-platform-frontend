import React from "react";
import "./EducationElement.css";
import DeleteModal from "../Modals/DeleteModal";
import { BaseService } from "../../../core/services/baseService";

type Props = {
  educationId: string;
  programStartDate: string;
  programEndDate: string;
  graduationStatus: string;
  college: string;
  program: string;
};

const EducationElement = ({
  educationId,
  programStartDate,
  programEndDate,
  graduationStatus,
  college,
  program,
}: Props) => {
  return (
    <div className="education-element">
      <div className="education-element-content">
        <div className="education-element-header">
          <div className="education-element-header-left-side">
            <i className="bi bi-calendar2-range"></i>
            <span>{programStartDate + " - " + programEndDate}</span>
          </div>
          <div className="education-element-header-right-side">
            <span>{graduationStatus}</span>
          </div>
        </div>
        <div className="education-element-body">
          <div className="education-element-college">
            <span>Üniversite</span>
            <span>{college}</span>
          </div>
          <div className="education-element-program">
            <span>Bölüm</span>
            <span>{program}</span>
          </div>
        </div>
      </div>
      <div className="education-element-button">
        <button
          className="education-element-delete-button"
          data-bs-toggle="modal"
          data-bs-target={"#id-" + educationId}
        >
          <i className="bi bi-trash education-element-delete-button-icon"></i>
        </button>
        <DeleteModal
          entityService={new BaseService()}
          entityId={"id-" + educationId}
          deleteModalTitle="eğitimi" />
      </div>
    </div>
  );
};

export default EducationElement;
