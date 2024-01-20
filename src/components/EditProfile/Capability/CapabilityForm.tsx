import React from "react";
import "./CapabilityForm.css";
import InputContainer from "../InputContainer";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let capabilitiesOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const capabilities = [
  {
    id: '1',
    name: 'CSS',
    priority: 4,
    visibility: true
  },
  {
    id: '2',
    name: 'JavaScript',
    priority: 3,
    visibility: true
  },
  {
    id: '3',
    name: 'TypeScript',
    priority: 2,
    visibility: true
  },
  {
    id: '4',
    name: 'React',
    priority: 1,
    visibility: true
  }
];

const CapabilityForm = (props: Props) => {
  return (
    <div className="capability-form">
      <InputContainer
        inputContainerClasses="capability-input-container input-container-w-100"
        elementType="select"
        labelText="Yetkinlik"
        inputName="capability"
        defaultOptionText="Yetkinlik Seçiniz"
        optionData={capabilities}
        optionDataFilters={capabilitiesOptionDataFilters}
        optionDataSort={sortByPriorityDesc}
      />

      <button type="submit" className="capability-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default CapabilityForm;
