import React from "react";
import "./SocialMediaAccountForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let socialMediaPlatformsOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const socialMediaPlatforms = [
  {
    id: '1',
    name: 'GitHub',
    priority: 4,
    visibility: true
  },
  {
    id: '2',
    name: 'LinkedIn',
    priority: 3,
    visibility: true
  },
  {
    id: '3',
    name: 'Instagram',
    priority: 2,
    visibility: true
  },
  {
    id: '4',
    name: 'Twitter',
    priority: 1,
    visibility: true
  }
];

const SocialMediaAccountsFrom = (props: Props) => {
  return (
    <div className="social-media-account-form">
      <div className="social-media-account-input-section">
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
      <button type="submit" className="social-media-account-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default SocialMediaAccountsFrom;
