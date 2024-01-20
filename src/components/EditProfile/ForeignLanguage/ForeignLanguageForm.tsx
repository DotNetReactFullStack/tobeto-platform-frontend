import React from "react";
import "./ForeignLanguageForm.css";
import InputContainer from "../InputContainer";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let languagesOptionDataFilters = [ifVisibilityIsTrue];
let languageLevelsOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const languages = [
  {
    id: '1',
    name: 'İngilizce',
    priority: 4,
    visibility: true
  },
  {
    id: '2',
    name: 'Japonca',
    priority: 3,
    visibility: true
  },
  {
    id: '3',
    name: 'Almanca',
    priority: 2,
    visibility: true
  },
  {
    id: '4',
    name: 'Fransızca',
    priority: 1,
    visibility: true
  }
];

const languageLevels = [
  {
    id: '1',
    name: 'Temel Seviye (A1, A2)',
    priority: 4,
    visibility: true
  },
  {
    id: '2',
    name: 'Orta Seviye (B1, B2)',
    priority: 3,
    visibility: true
  },
  {
    id: '3',
    name: 'İleri Seviye (C1, C2)',
    priority: 2,
    visibility: true
  },
  {
    id: '4',
    name: 'Anadil',
    priority: 1,
    visibility: true
  }
];

const ForeignLanguageForm = (props: Props) => {
  return (
    <div className="foreing-language">
      <div className="foreing-language-input-section">
        <InputContainer
          inputContainerClasses="foreing-language-name-input-container input-container-w-50"
          elementType="select"
          inputName="foreing-language-name"
          defaultOptionText="Dil Seçiniz*"
          optionData={languages}
          optionDataFilters={languagesOptionDataFilters}
          optionDataSort={sortByPriorityDesc}
        />

        <InputContainer
          inputContainerClasses="foreing-language-level-input-container input-container-w-50"
          elementType="select"
          inputName="foreing-language-level"
          defaultOptionText="Seviye Seçiniz*"
          optionData={languageLevels}
          optionDataFilters={languageLevelsOptionDataFilters}
          optionDataSort={sortByPriorityDesc}
        />
      </div>
      <button type="submit" className="foreing-language-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default ForeignLanguageForm;
