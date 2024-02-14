import React from "react";
import "./EducationForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik } from "formik";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let graduationStatusOptionDataFilters = [ifVisibilityIsTrue];
let collegeOptionDataFilters = [ifVisibilityIsTrue];
let educationProgramOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const graduationStatus = [
  {
    id: 1,
    name: "Lisans",
    priority: 4,
    visibility: true,
  },
  {
    id: 2,
    name: "Ön Lisans",
    priority: 3,
    visibility: true,
  },
  {
    id: 3,
    name: "Yüksek Lisans",
    priority: 2,
    visibility: true,
  },
  {
    id: 4,
    name: "Doktora",
    priority: 1,
    visibility: true,
  },
];

const colleges = [
  {
    id: 1,
    name: "Sinop Üniversite",
    priority: 3,
    visibility: true,
  },
  {
    id: 2,
    name: "Düzce Üniversitesi",
    priority: 2,
    visibility: true,
  },
  {
    id: 3,
    name: "Uludağ Üniversitesi",
    priority: 1,
    visibility: true,
  },
];

const educationPrograms = [
  {
    id: 1,
    collegeId: 1,
    name: "Makine Mühendisliği",
    priority: 3,
    visibility: true,
  },
  {
    id: 2,
    collegeId: 2,
    name: "Elektrik Elektronik Mühendisliği",
    priority: 2,
    visibility: true,
  },
  {
    id: 3,
    collegeId: 3,
    name: "Peyzaj Mimarlığı",
    priority: 1,
    visibility: true,
  },
];

//Formik, Yup
const initialValues: any = {
  graduationStatus: "",
  college: "",
  educationProgram: "",
  educationProgramStartDate: "",
  educationProgramEndDate: "",
  isEducationProgramContinue: false,
};

const validationSchema = yup.object({
  graduationStatus: yup
    .string()
    .required("Eğitim durumu zorunludur")
    .notOneOf(["default"], "Eğitim durumu zorunludur"),
  college: yup
    .string()
    .required("Universite alanı zorunludur")
    .notOneOf(["default"], "Universite alanı zorunludur"),
  educationProgram: yup
    .string()
    .required("Bölüm alanı zorunludur")
    .notOneOf(["default"], "Bölüm alanı zorunludur"),
  educationProgramStartDate: yup.string().required("Başlangıç yılı zorunludur"),
});

const handleEducation = async (values: any) => {
  console.log(values);
};

const EducationForm = (props: Props) => {
  return (
    <div className="education-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleEducation(values);
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form className="education-input-section">
            <InputContainer
              useFormikField={true}
              inputContainerClasses="graduation-status-input-container input-container-w-50"
              elementType={FormElementType.Select}
              labelText="Eğitim Durumu*"
              inputName="graduationStatus"
              defaultOptionText="Seviye Seçiniz"
              optionData={graduationStatus}
              optionDataFilters={graduationStatusOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
            />

            <InputContainer
              useFormikField={true}
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
              useFormikField={true}
              inputContainerClasses="education-program-input-container input-container-w-100"
              elementType={FormElementType.Select}
              labelText="Bölüm*"
              inputName="educationProgram"
              defaultOptionText="Bölüm Seçiniz"
              optionData={educationPrograms}
              optionDataFilters={educationProgramOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="education-program-start-date-input-container input-container-w-50"
              labelText="Başlangıç Yılı*"
              inputName="educationProgramStartDate"
              inputType={InputType.Month}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="education-program-end-date-input-container input-container-w-50"
              labelText="Mezuniyet Yılı"
              inputName="educationProgramEndDate"
              inputType={InputType.Month}
              disabled={formikProps.values.isEducationProgramContinue}
              inputValue={
                formikProps.values.isEducationProgramContinue
                  ? ""
                  : formikProps.values.educationProgramEndDate
              }
            >
              <div className="education-program-continue-input-container">
                <InputContainer
                  useFormikField={true}
                  inputContainerClasses="education-program-continue-input-container"
                  elementType={FormElementType.Input}
                  inputType={InputType.Checkbox}
                  inputName="isEducationProgramContinue"
                  labelText="Devam Ediyorum"
                />
              </div>
            </InputContainer>
            <button type="submit" className="education-save-button">
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EducationForm;
