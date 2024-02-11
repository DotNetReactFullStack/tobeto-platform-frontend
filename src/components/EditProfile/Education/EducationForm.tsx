import React from "react";
import "./EducationForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let graduationStatusOptionDataFilters = [ifVisibilityIsTrue];
let collegeOptionDataFilters = [ifVisibilityIsTrue];
let educationProgramOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const graduationStatus = [
  {
    id: 1,
    name: 'Lisans',
    priority: 4,
    visibility: true
  },
  {
    id: 2,
    name: 'Ön Lisans',
    priority: 3,
    visibility: true
  },
  {
    id: 3,
    name: 'Yüksek Lisans',
    priority: 2,
    visibility: true
  },
  {
    id: 4,
    name: 'Doktora',
    priority: 1,
    visibility: true
  }
];

const colleges = [
  {
    id: 1,
    name: 'Sinop Üniversite',
    priority: 3,
    visibility: true
  },
  {
    id: 2,
    name: 'Düzce Üniversitesi',
    priority: 2,
    visibility: true
  },
  {
    id: 3,
    name: 'Uludağ Üniversitesi',
    priority: 1,
    visibility: true
  }
];

const educationPrograms = [
  {
    id: 1,
    collegeId: 1,
    name: 'Makine Mühendisliği',
    priority: 3,
    visibility: true
  },
  {
    id: 2,
    collegeId: 2,
    name: 'Elektrik Elektronik Mühendisliği',
    priority: 2,
    visibility: true
  },
  {
    id: 3,
    collegeId: 3,
    name: 'Peyzaj Mimarlığı',
    priority: 1,
    visibility: true
  }
];


const EducationForm = (props: Props) => {
  return (
    <div className="education-form">
      <div className="education-input-section">
        <InputContainer
          inputContainerClasses="graduation-status-input-container input-container-w-50"
          elementType={FormElementType.Select}
          labelText="Eğitim Durumu*"
          inputName="graduation-status"
          defaultOptionText="Seviye Seçiniz"
          optionData={graduationStatus}
          optionDataFilters={graduationStatusOptionDataFilters}
          optionDataSort={sortByPriorityDesc}
        />

        <InputContainer
          inputContainerClasses="college-input-container input-container-w-50"
          elementType={FormElementType.Select}
          labelText="Üniversite*"
          inputName="college"
          defaultOptionText="Üniversite Seçiniz"
          optionData={colleges}
          optionDataFilters={collegeOptionDataFilters}
          optionDataSort={sortByPriorityDesc}
        />

        <InputContainer
          inputContainerClasses="education-program-input-container input-container-w-100"
          elementType={FormElementType.Select}
          labelText="Bölüm*"
          inputName="education-program"
          defaultOptionText="Bölüm Seçiniz"
          optionData={educationPrograms}
          optionDataFilters={educationProgramOptionDataFilters}
          optionDataSort={sortByPriorityDesc}
        />

        <InputContainer
          inputContainerClasses="education-program-start-date-input-container input-container-w-50"
          labelText="Başlangıç Yılı*"
          inputName="education-program-start-date"
          inputType={InputType.Month}
        />

        <InputContainer
          inputContainerClasses="education-program-end-date-input-container input-container-w-50"
          labelText="Mezuniyet Yılı*"
          inputName="education-program-end-date"
          inputType={InputType.Month}
        >
          <div className="education-program-continue-input-container">
            <input type="checkbox" />
            <label>Devam Ediyorum</label>
          </div>
        </InputContainer>
      </div>
      <button type="submit" className="education-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default EducationForm;
