import React from "react";
import "./SocialMediaAccountForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSocialMediaPlatforms } from "../../../store/socialMediaPlatform/socialMediaPlatformSlice"; // Import the appropriate action
import socialMediaPlatformService from "../../../services/socialMediaPlatformService"; // Import the service for fetching data
import { GetListSocialMediaPlatformListItemDto } from "../../../models/socialMediaPlatforms/getListSocialMediaPlatformListItemDto";
import { RootState } from "../../../store/configureStore";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let socialMediaPlatformOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

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

const SocialMediaAccountForm = (props: Props) => {
  const dispatch = useDispatch();

  const [selectedSocialMediaPlatformId, setSelectedSocialMediaPlatformId] =
    useState<number | null>(null);

  async function fetchSocialMediaInputData() {
    try {
      const socialMediaPlatformResponse =
        await socialMediaPlatformService.getAll();
      const socialMediaPlatformData = socialMediaPlatformResponse.data.items;
      dispatch(setSocialMediaPlatforms(socialMediaPlatformData));
    } catch (error) {
      dispatch(setSocialMediaPlatforms([]));
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchSocialMediaInputData();
  }, []);

  const socialMediaPlatforms: GetListSocialMediaPlatformListItemDto[] =
    useSelector(
      (state: RootState) => state.socialMediaPlatform.socialMediaPlatforms
    );

  return (
    <div className="social-media-account-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleSocialMediaAccount(values);
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form className="input-container-w-100">
            <div className="social-media-account-input-section">
              <InputContainer
                useFormikField={true}
                inputContainerClasses="social-media-account-type-input-container input-container-w-30"
                elementType={FormElementType.Select}
                inputName="accountType"
                defaultOptionText="Seçiniz"
                optionData={socialMediaPlatforms}
                optionDataFilters={socialMediaPlatformOptionDataFilters}
                optionDataSort={sortByPriorityDesc}
                onChange={(e) => {
                  formikProps.handleChange(e);
                  setSelectedSocialMediaPlatformId(parseInt(e.target.value));
                }}
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
        )}
      </Formik>
    </div>
  );
};

export default SocialMediaAccountForm;
