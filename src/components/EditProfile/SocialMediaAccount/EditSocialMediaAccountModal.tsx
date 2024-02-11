import React from "react";
import "./EditSocialMediaAccountModal.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";

type Props = {
  editSocialMediaAccountModalId: string;
};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let socialMediaPlatformsOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const socialMediaPlatforms = [
  {
    id: "1",
    name: "GitHub",
    priority: 4,
    visibility: true,
  },
  {
    id: "2",
    name: "LinkedIn",
    priority: 3,
    visibility: true,
  },
  {
    id: "3",
    name: "Instagram",
    priority: 2,
    visibility: true,
  },
  {
    id: "4",
    name: "Twitter",
    priority: 1,
    visibility: true,
  },
];

const EditSocialMediaAccountModal = ({
  editSocialMediaAccountModalId,
}: Props) => {
  return (
    <div
      className="modal fade"
      id={"edit-" + editSocialMediaAccountModalId}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header edit-social-media-account-modal-header">
            Medya Hesabı Güncelleme
          </div>
          <div className="modal-body edit-social-media-account-modal-body">
            <InputContainer
              inputContainerClasses="social-media-account-type-input-container input-container-w-30"
              elementType={FormElementType.Select}
              inputName="account-type"
              defaultOptionText="Seçiniz"
              optionData={socialMediaPlatforms}
              optionDataFilters={socialMediaPlatformsOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
            />

            <InputContainer
              inputContainerClasses="social-media-account-link-input-container input-container-w-70"
              inputType={InputType.URL}
              inputName="account-url"
              inputPlaceholder="http://"
            />
          </div>
          <div className="modal-footer edit-social-media-account-modal-footer">
            <button type="button" className="btn btn-primary">
              <i className="bi bi-arrow-repeat"></i>
              Güncelle
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="bi bi-x-lg"></i>
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSocialMediaAccountModal;
