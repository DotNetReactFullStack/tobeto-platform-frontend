import React from "react";
import "./ForeignLanguageElement.css";
import DeleteModal from "../Modals/DeleteModal";
import { BaseService } from "../../../core/services/baseService";
import accountForeignLanguageMetadataService from "../../../services/accountForeignLanguageMetadataService";

type Props = {
  id: number;
  foreignLanguageName: string;
  foreignLanguageLevelName: string;
};

const ForeignLanguageElement = ({
  id,
  foreignLanguageName,
  foreignLanguageLevelName,
}: Props) => {
  return (
    <div className="foreing-language-element">
      <div className="foreing-language-element-body">
        <div className="foreing-language-element-icon">
          <i className="bi bi-globe2"></i>
        </div>
        <div className="foreing-language-element-content">
          <div className="foreing-language-element-language-name">
            <span>{foreignLanguageName}</span>
          </div>
          <div className="foreing-language-element-language-level">
            <span>{foreignLanguageLevelName}</span>
          </div>
        </div>
      </div>
      <div>
        <button
          className="foreing-language-element-delete-button"
          data-bs-toggle="modal"
          data-bs-target={"#foreignLanguageElementId-" + id}
        >
          <i className="bi bi-trash foreing-language-element-delete-button-icon"></i>
        </button>
        <DeleteModal
          entityService={accountForeignLanguageMetadataService}
          entityId={"foreignLanguageElementId-" + id}
          deleteModalTitle="yabancı dili"
        />
      </div>
    </div>
  );
};

export default ForeignLanguageElement;
