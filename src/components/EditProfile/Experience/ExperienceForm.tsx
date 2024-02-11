import React from "react";
import "./ExperienceForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let citiesOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const cities = [
  {
    id: '1',
    countryId: '1',
    name: 'Artvin',
    priority: 6,
    visibility: true
  },
  {
    id: '2',
    countryId: '1',
    name: 'Sinop',
    priority: 5,
    visibility: true
  },
  {
    id: '3',
    countryId: '1',
    name: 'İstanbul',
    priority: 4,
    visibility: true
  },
  {
    id: '4',
    countryId: '1',
    name: 'Bursa',
    priority: 2,
    visibility: true
  },
  {
    id: '5',
    countryId: '2',
    name: 'Berlin',
    priority: 2,
    visibility: true
  },
  {
    id: '6',
    countryId: '2',
    name: 'Munich',
    priority: 1,
    visibility: true
  }
];

const ExperienceForm = (props: Props) => {
  return (
    <div className="experience-form">
      <div className="experience-input-section">

        <InputContainer
          inputContainerClasses="company-name-input-container input-container-w-50"
          labelText="Kurum Adı*"
          inputName="company-name"
          inputPlaceholder="Tobeto"
        />

        <InputContainer
          inputContainerClasses="job-input-container input-container-w-50"
          labelText="Pozisyon*"
          inputName="job"
          inputPlaceholder="Full Stack Developer"
        />

        <InputContainer
          inputContainerClasses="industry-input-container input-container-w-50"
          labelText="Endüstri*"
          inputName="industry"
          inputPlaceholder="Yazılım"
        />

        <InputContainer
          inputContainerClasses="user-address-city-input-container input-container-w-50"
          elementType={FormElementType.Select}
          labelText="İl Seçiniz*"
          inputName="city"
          defaultOptionText="İl Seçiniz"
          optionData={cities}
          optionDataFilters={citiesOptionDataFilters}
          optionDataSort={sortByPriorityDesc}
        />

        <InputContainer
          inputContainerClasses="job-start-date-input-container input-container-w-50"
          labelText="İş Başlangıcı*"
          inputName="job-start-date"
          inputType={InputType.Date}
        />

        <InputContainer
          inputContainerClasses="job-end-date-input-container input-container-w-50"
          labelText="İş Bitiş*"
          inputName="job-end-date"
          inputType={InputType.Date}
        >
          <div className="job-continue-checkbox">
            <input type="checkbox" />
            <label>Çalışmaya Devam Ediyorum</label>
          </div>
        </InputContainer>

        <InputContainer
          inputContainerClasses="job-detail-input-container input-container-w-100"
          elementType={FormElementType.TextArea}
          labelText="Detaylı Bilgi"
          inputName="job-detail"
        />
      </div>
      <button type="submit" className="experience-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default ExperienceForm;
