import React from "react";
import "./CapabilityForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import * as yup from "yup";
import { Form, Formik } from "formik";
import capabilityService from "../../../services/capabilityService";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
const ifVisibilityIsFalse = (value: any) => value.visibility === false;
let capabilitiesOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const capabilitiesResponse = capabilityService.getAll();
const capabilities = (await capabilitiesResponse).data.items;

//Formik, Yup
const initialValues: any = {
  capability: "",
};

const validationSchema = yup.object({
  capability: yup
    .string()
    .required("Yetkinlik alanı zorunludur")
    .notOneOf(["default"], "Yetkinlik alanı zorunludur"),
});

const handleCapability = async (values: any) => {
  console.log(values);
};

const CapabilityForm = (props: Props) => {
  return (
    <div className="capability-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleCapability(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="input-container-w-100">
          <div className="capability-input-container input-container-w-100">
            <InputContainer
              useFormikField={true}
              inputContainerClasses="capability-input-container input-container-w-100"
              elementType={FormElementType.Select}
              labelText="Yetkinlik"
              inputName="capability"
              defaultOptionText="Yetkinlik Seçiniz"
              optionData={capabilities}
              optionDataFilters={capabilitiesOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
            />
          </div>
          <button type="submit" className="capability-save-button">
            Kaydet
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CapabilityForm;
