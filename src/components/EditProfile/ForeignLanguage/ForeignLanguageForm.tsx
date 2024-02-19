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



type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let languagesOptionDataFilters = [ifVisibilityIsTrue];
let languageLevelsOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;


//Formik, Yup
const initialValues: any = {
  foreignLanguageName: "",
  foreignLanguageLevel: "",
};

const validationSchema = yup.object({
  foreignLanguageName: yup
    .string()
    .required("Yabanci dil alanı zorunludur")
    .notOneOf(["default"], "Yabanci dil alanı zorunludur"),

  foreignLanguageLevel: yup
    .string()
    .required("Seviye alanı zorunludur")
    .notOneOf(["default"], "Seviye alanı zorunludur"),
});

const handleForeignLanguage = async (values: any) => {
  console.log(values);
};

const ForeignLanguageForm = (props: Props) => {

  const dispatch = useDispatch();

  const [selectedForeignLanguageId, setSelectedForeignLanguageId] = useState<number | null>(null);

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
          handleForeignLanguage(values);
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
                inputName="foreignLanguageName"
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
                inputName="foreignLanguageLevel"
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
