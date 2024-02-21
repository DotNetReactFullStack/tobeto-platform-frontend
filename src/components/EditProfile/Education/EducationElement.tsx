import React from "react";
import "./EducationElement.css";
import DeleteModal from "../Modals/DeleteModal";
import { BaseService } from "../../../core/services/baseService";
import accountCollegeMetadataService from "../../../services/accountCollegeMetadataService";

type Props = {
  id: number;
  graduationStatusName: string;
  collegeName: string;
  educationProgramName: string;
  startingYear: string;
  graduationYear: string;
  programOnGoing: boolean;
};

const EducationElement = ({
  id,
  graduationStatusName,
  collegeName,
  educationProgramName,
  startingYear,
  graduationYear,
  programOnGoing,
}: Props) => {
  return (
    <div className="education-element">
      <div className="education-element-content">
        <div className="education-element-header">
          <div className="education-element-header-left-side">
            <i className="bi bi-calendar2-range"></i>
            <span>{startingYear + " - " + graduationYear}</span>
          </div>
          <div className="education-element-header-right-side">
            <span>{graduationStatusName}</span>
          </div>
        </div>
        <div className="education-element-body">
          <div className="education-element-college">
            <span>Üniversite</span>
            <span>{collegeName}</span>
          </div>
          <div className="education-element-program">
            <span>Bölüm</span>
            <span>{educationProgramName}</span>
          </div>
        </div>
      </div>
      <div className="education-element-button">
        <button
          className="education-element-delete-button"
          data-bs-toggle="modal"
          data-bs-target={"#educationElementId-" + id}
        >
          <i className="bi bi-trash education-element-delete-button-icon"></i>
        </button>
        <DeleteModal
          entityService={accountCollegeMetadataService}
          entityId={"educationElementId-" + id}
          deleteModalTitle="eğitimi"
        />
      </div>
    </div>
  );
};

export default EducationElement;
