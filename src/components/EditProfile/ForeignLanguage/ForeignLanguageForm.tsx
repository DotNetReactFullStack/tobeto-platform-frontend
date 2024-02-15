import React from "react";
import "./ForeignLanguageForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import * as yup from "yup";
import { Form, Formik } from "formik";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let languagesOptionDataFilters = [ifVisibilityIsTrue];
let languageLevelsOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const languages = [
  {
    id: "1",
    name: "İngilizce",
    priority: 4,
    visibility: true,
  },
  {
    id: "2",
    name: "Japonca",
    priority: 3,
    visibility: true,
  },
  {
    id: "3",
    name: "Almanca",
    priority: 2,
    visibility: true,
  },
  {
    id: "4",
    name: "Fransızca",
    priority: 1,
    visibility: true,
  },
];

const languageLevels = [
  {
    id: "1",
    name: "Temel Seviye (A1, A2)",
    priority: 4,
    visibility: true,
  },
  {
    id: "2",
    name: "Orta Seviye (B1, B2)",
    priority: 3,
    visibility: true,
  },
  {
    id: "3",
    name: "İleri Seviye (C1, C2)",
    priority: 2,
    visibility: true,
  },
  {
    id: "4",
    name: "Anadil",
    priority: 1,
    visibility: true,
  },
];

//Formik, Yup
const initialValues: any = {
  foreingLanguageName: "",
  foreingLanguageLevel: "",
};

const validationSchema = yup.object({
  foreingLanguageName: yup
    .string()
    .required("Yabanci dil alanı zorunludur")
    .notOneOf(["default"], "Yabanci dil alanı zorunludur"),

  foreingLanguageLevel: yup
    .string()
    .required("Seviye alanı zorunludur")
    .notOneOf(["default"], "Seviye alanı zorunludur"),
});

const handleForeignLanguage = async (values: any) => {
  console.log(values);
};

const ForeignLanguageForm = (props: Props) => {
  return (
    <div className="foreing-language">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleForeignLanguage(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="foreign-language-form input-container-w-100">
          <div className="foreing-language-input-section input-container-w-100">
            <InputContainer
              useFormikField={true}
              inputContainerClasses="foreing-language-name-input-container input-container-w-50"
              elementType={FormElementType.Select}
              inputName="foreingLanguageName"
              defaultOptionText="Dil Seçiniz*"
              optionData={languages}
              optionDataFilters={languagesOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="foreing-language-level-input-container input-container-w-50"
              elementType={FormElementType.Select}
              inputName="foreingLanguageLevel"
              defaultOptionText="Seviye Seçiniz*"
              optionData={languageLevels}
              optionDataFilters={languageLevelsOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
            />
          </div>
          <button type="submit" className="foreing-language-save-button">
            Kaydet
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ForeignLanguageForm;
