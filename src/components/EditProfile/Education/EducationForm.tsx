import React, { useEffect, useState } from "react";
import "./EducationForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import graduationStatusService from "../../../services/graduationStatusService";
import { setGraduationStatuses } from "../../../store/graduationStatus/graduationStatusSlice";
import { GetListGraduationStatusListItemDto } from "../../../models/graduationStatuses/getListGraduationStatusListItemDto";
import { RootState } from "../../../store/configureStore";
import collegeService from "../../../services/collegeService";
import { setColleges } from "../../../store/college/collegeSlice";
import { GetListCollegeListItemDto } from "../../../models/colleges/getListCollegeListItemDto";
import educationProgramService from "../../../services/educationProgramService";
import { setEducationPrograms } from "../../../store/educationProgram/educationProgramSlice";
import { GetListByCollegeIdEducationProgramListItemDto } from "../../../models/educationPrograms/getListByCollegeIdEducationProgramListItemDto";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
let graduationStatusOptionDataFilters = [ifVisibilityIsTrue];
let collegeOptionDataFilters = [ifVisibilityIsTrue];
let educationProgramOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

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
  const dispatch = useDispatch();

  const [selectedGraduationStatusId, setSelectedGraduationStatusId] = useState<
    number | null
  >(null);
  const [selectedCollegeId, setSelectedCollegeId] = useState<number | null>(
    null
  );
  const [selectedEducationProgramId, setSelectedEducationProgramId] = useState<
    number | null
  >(null);

  async function fetchEducationInputData(collegeId: number) {
    try {
      const graduationStatusResponse = await graduationStatusService.getAll();
      const graduationStatusData = graduationStatusResponse.data.items;
      dispatch(setGraduationStatuses(graduationStatusData));

      const collegeResponse = await collegeService.getAll();
      const collegeData = collegeResponse.data.items;
      dispatch(setColleges(collegeData));

      const educationProgramResponse =
        await educationProgramService.getByCollegeId(collegeId);
      const educationProgramData = educationProgramResponse.data.items;
      dispatch(setEducationPrograms(educationProgramData));
    } catch (error) {
      dispatch(setEducationPrograms([]));
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    if (selectedCollegeId !== null) {
      fetchEducationInputData(selectedCollegeId);
    }
  }, [selectedCollegeId]);

  const graduationStatuses: GetListGraduationStatusListItemDto[] = useSelector(
    (state: RootState) => state.graduationStatus.graduationStatuses
  );

  const colleges: GetListCollegeListItemDto[] = useSelector(
    (state: RootState) => state.college.colleges
  );

  const educationPrograms: GetListByCollegeIdEducationProgramListItemDto[] =
    useSelector((state: RootState) => state.educationProgram.educationPrograms);

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
              optionData={graduationStatuses}
              optionDataFilters={graduationStatusOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
              onChange={(e) => {
                formikProps.handleChange(e);
                setSelectedGraduationStatusId(parseInt(e.target.value));
              }}
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
              onChange={(e) => {
                formikProps.handleChange(e);
                setSelectedCollegeId(parseInt(e.target.value));
              }}
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
              onChange={(e) => {
                formikProps.handleChange(e);
                setSelectedEducationProgramId(parseInt(e.target.value));
              }}
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
