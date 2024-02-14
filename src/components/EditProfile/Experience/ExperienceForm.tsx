import React, { useEffect } from "react";
import "./ExperienceForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik, useFormikContext } from "formik";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let citiesOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const cities = [
  {
    id: "1",
    countryId: "1",
    name: "Artvin",
    priority: 6,
    visibility: true,
  },
  {
    id: "2",
    countryId: "1",
    name: "Sinop",
    priority: 5,
    visibility: true,
  },
  {
    id: "3",
    countryId: "1",
    name: "İstanbul",
    priority: 4,
    visibility: true,
  },
  {
    id: "4",
    countryId: "1",
    name: "Bursa",
    priority: 2,
    visibility: true,
  },
  {
    id: "5",
    countryId: "2",
    name: "Berlin",
    priority: 2,
    visibility: true,
  },
  {
    id: "6",
    countryId: "2",
    name: "Munich",
    priority: 1,
    visibility: true,
  },
];

//Formik, Yup
const initialValues: any = {
  companyName: "",
  job: "",
  industry: "",
  city: "",
  jobStartDate: "",
  jobEndDate: "",
  isJobContinue: false,
  jobDetail: "",
};

const validationSchema = yup.object({
  companyName: yup
    .string()
    .required("Kurum adı zorunludur")
    .max(30, "Kurum adı en fazla 30 karakter olmalıdır"),
  job: yup
    .string()
    .required("Pozisyon alanı zorunludur")
    .max(40, "Pozisyon en fazla 40 karakter olmalıdır"),
  industry: yup
    .string()
    .required("Sektör alanı zorunludur")
    .max(30, "Sektör en fazla 30 karakter olmalıdır"),
  city: yup
    .string()
    .required("İl seçimi zorunludur")
    .notOneOf(["default"], "İl seçimi zorunludur"),
  jobStartDate: yup.string().required("İş Başlangıç tarihi zorunludur"),
  jobDetail: yup
    .string()
    .max(300, "Detaylı bilgi bölümü en fazla 300 karakter olabilir"),
});

const handleExperience = async (values: any) => {
  console.log(values);
};

const ExperienceForm = (props: Props) => {
  return (
    <div className="experience-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleExperience(values);
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form className="experience-input-section">
            <InputContainer
              useFormikField={true}
              inputContainerClasses="company-name-input-container input-container-w-50"
              labelText="Kurum Adı*"
              inputName="companyName"
              inputPlaceholder="Tobeto"
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="job-input-container input-container-w-50"
              labelText="Pozisyon*"
              inputName="job"
              inputPlaceholder="Full Stack Developer"
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="industry-input-container input-container-w-50"
              labelText="Endüstri*"
              inputName="industry"
              inputPlaceholder="Yazılım"
            />

            <InputContainer
              useFormikField={true}
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
              useFormikField={true}
              inputContainerClasses="job-start-date-input-container input-container-w-50"
              labelText="İş Başlangıcı*"
              inputName="jobStartDate"
              inputType={InputType.Date}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="job-end-date-input-container input-container-w-50"
              labelText="İş Bitiş"
              inputName="jobEndDate"
              inputType={InputType.Date}
              disabled={formikProps.values.isJobContinue}
              inputValue={
                formikProps.values.isJobContinue
                  ? ""
                  : formikProps.values.jobEndDate
              }
            >
              <div className="job-continue-checkbox">
                <InputContainer
                  useFormikField={true}
                  inputContainerClasses="job-continue-checkbox"
                  elementType={FormElementType.Input}
                  inputType={InputType.Checkbox}
                  inputName="isJobContinue"
                  labelText="Çalışmaya Devam Ediyorum"
                />
              </div>
            </InputContainer>

            <InputContainer
              useFormikField={true}
              inputContainerClasses="job-detail-input-container input-container-w-100"
              elementType={FormElementType.TextArea}
              labelText="Detaylı Bilgi"
              inputName="jobDetail"
            />
            <button type="submit" className="experience-save-button">
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExperienceForm;
