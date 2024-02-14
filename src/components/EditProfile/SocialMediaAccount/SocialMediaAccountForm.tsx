import React from "react";
import "./SocialMediaAccountForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik } from "formik";

type Props = {};

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

//Formik, Yup
const initialValues: any = {
  accountType: "",
  accountUrl: "",
};

const validationSchema = yup.object({
  accountType: yup
    .string()
    .required("Sosyal medya tip alanı zorunludur")
    .notOneOf(["default"], "Sosyal medya tip alanı zorunludur"),
  accountUrl: yup
    .string()
    .required("Sosyal medya link alanı zorunludur")
    .test("is-url-correct", "Geçersiz URL", function (value, context) {
      const accountType = context.parent.accountType;
      if (accountType === "1" && !value.startsWith("https://github.com/")) {
        throw this.createError({
          message: `GitHub link "https://github.com/" ile başlamalıdır`,
        });
      }
      if (
        accountType === "2" &&
        !value.startsWith("https://www.linkedin.com/")
      ) {
        throw this.createError({
          message: `Linkedin linki "https://www.linkedin.com/" ile başlamalıdır`,
        });
      }
      if (
        accountType === "3" &&
        !value.startsWith("https://www.instagram.com/")
      ) {
        throw this.createError({
          message: `Instagram linki "https://www.instagram.com/" ile başlamalıdır`,
        });
      }
      if (accountType === "4" && !value.startsWith("https://twitter.com/")) {
        throw this.createError({
          message: `Twitter linki "https://twitter.com/" ile başlamalıdır`,
        });
      }

      return true;
    }),
});

const handleSocialMediaAccount = async (values: any) => {
  console.log(values);
};

const SocialMediaAccountsFrom = (props: Props) => {
  return (
    <div className="social-media-account-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleSocialMediaAccount(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="input-container-w-100">
          <div className="social-media-account-input-section">
            <InputContainer
              useFormikField={true}
              inputContainerClasses="social-media-account-type-input-container input-container-w-30"
              elementType={FormElementType.Select}
              inputName="accountType"
              defaultOptionText="Seçiniz"
              optionData={socialMediaPlatforms}
              optionDataFilters={socialMediaPlatformsOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="social-media-account-link-input-container input-container-w-70"
              inputType={InputType.URL}
              inputName="accountUrl"
              inputPlaceholder="http://"
            />
          </div>
          <button type="submit" className="social-media-account-save-button">
            Kaydet
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SocialMediaAccountsFrom;
