import React from "react";
import { useEffect, useState } from "react";
import "./ForeignLanguageForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import foreignLanguageService from "../../../services/foreignLanguageService";
import { setForeignLanguages } from "../../../store/foreignLanguage/foreignLanguageSlice";
import { GetListForeignLanguageListItemDto } from "../../../models/foreignLanguages/getListForeignLanguageListItemDto";
import foreignLanguageLevelService from "../../../services/foreignLanguageLevelService";
import { setForeignLanguageLevels } from "../../../store/foreignLanguageLevel/foreignLanguageLevelSlice";
import { GetListForeignLanguageLevelListItemDto } from "../../../models/foreignLanguageLevels/getListForeignLanguageLevelListItemDto";
import { RootState } from "../../../store/configureStore";
import { setForeignLanguageMetadataToAccount } from "../../../store/accountForeignLanguageMetadata/accountForeignLanguageMetadataSlice";
import accountForeignLanguageMetadataService from "../../../services/accountForeignLanguageMetadataService";
import { CreateAccountForeignLanguageMetadataRequest } from "../../../models/accountForeignLanguageMetadatas/createAccountForeignLanguageMetadataRequest";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let languagesOptionDataFilters = [ifVisibilityIsTrue];
let languageLevelsOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

const initialValues: any = {
  foreignLanguageId: "",
  foreignLanguageLevelId: "",

};

const validationSchema = yup.object({
  foreignLanguageId: yup
    .string()
    .required("Yabanci dil alanı zorunludur")
    .notOneOf(["default"], "Yabanci dil alanı zorunludur"),

  foreignLanguageLevelId: yup
    .string()
    .required("Seviye alanı zorunludur")
    .notOneOf(["default"], "Seviye alanı zorunludur"),
});

const createObjectToAdd = (initialObject: any, additionalProps: any) => {
  const keys = Object.keys(additionalProps);
  const values = Object.values(additionalProps);

  for (let index = 0; index < keys.length; index++) {
    initialObject[keys[index]] = values[index];
  }

  return initialObject;
}

const ForeignLanguageForm = (props: Props) => {


  const handleAddForeignLanguageMetadata = (values: any) => {
    const additionalProps: any = {}
    additionalProps["accountId"] = accountId;
    additionalProps["priority"] = 1;

    const foreignLanguageToAdd = createObjectToAdd(values, additionalProps);
    accountForeignLanguageMetadataService.add(foreignLanguageToAdd);
  }

  const dispatch = useDispatch();

  const accountId = useSelector(
    (state: any) => state.account.currentAccount.payload.id
  );

  async function fetchLanguageInputData() {
    try {
      const languageResponse = await foreignLanguageService.getAll();
      const languageData = languageResponse.data.items;
      dispatch(setForeignLanguages(languageData));

      const languageLevelResponse = await foreignLanguageLevelService.getAll();
      const languageLevelData = languageLevelResponse.data.items;
      dispatch(setForeignLanguageLevels(languageLevelData));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchLanguageInputData();
  }, []);

  const foreignLanguages: GetListForeignLanguageListItemDto[] = useSelector(
    (state: RootState) => state.foreignLanguage.foreignLanguages
  );

  const foreignLanguageLevels: GetListForeignLanguageLevelListItemDto[] = useSelector(
    (state: RootState) => state.foreignLanguageLevel.foreignLanguageLevels
  );

  return (
    <div className="foreign-language">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleAddForeignLanguageMetadata(values)
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form className="foreign-language-form input-container-w-100">
            <div className="foreign-language-input-section input-container-w-100">
              <InputContainer
                useFormikField={true}
                inputContainerClasses="foreign-language-name-input-container input-container-w-50"
                elementType={FormElementType.Select}
                inputName="foreignLanguageId"
                defaultOptionText="Dil Seçiniz*"
                optionData={foreignLanguages}
                optionDataFilters={languagesOptionDataFilters}
                optionDataSort={sortByPriorityDesc}
                onChange={(e) => {
                  formikProps.handleChange(e);
                }}
              />

              <InputContainer
                useFormikField={true}
                inputContainerClasses="foreign-language-level-input-container input-container-w-50"
                elementType={FormElementType.Select}
                inputName="foreignLanguageLevelId"
                defaultOptionText="Seviye Seçiniz*"
                optionData={foreignLanguageLevels}
                optionDataFilters={languageLevelsOptionDataFilters}
                optionDataSort={sortByPriorityDesc}
                onChange={(e) => {
                  formikProps.handleChange(e);
                }}
              />
            </div>
            <button type="submit" className="foreign-language-save-button">
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForeignLanguageForm;
