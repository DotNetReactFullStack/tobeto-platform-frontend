import React, { useEffect, useState } from "react";
import "./ExperienceForm.css";
import InputContainer from "../InputContainer";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik, useFormikContext } from "formik";
import { CreateExperienceCommand } from "../../../models/experiences/createExperienceCommand";
import { useDispatch, useSelector } from "react-redux";
import cityService from "../../../services/cityService";
import { setCities } from "../../../store/city/citySlice";
import { GetListByCountryIdCityListItemDto } from "../../../models/city/getListByCountryIdCityListItemDto";
import { RootState } from "../../../store/configureStore";
import { clearAccountExperienceToAdd, refreshData, setAccountExperienceToAdd } from "../../../store/experience/experienceSlice";
import experienceService from "../../../services/experienceService";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility == true;
let citiesOptionDataFilters = [ifVisibilityIsTrue];
const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;

//Formik, Yup
const initialValues: any = {
  companyName: "",
  jobTitle: "",
  industry: "",
  cityId: "",
  startingDate: "",
  endingDate: "",
  isCurrentlyWorking: false,
  description: "",
};

const validationSchema = yup.object({
  companyName: yup
    .string()
    .required("Kurum adı zorunludur")
    .max(30, "Kurum adı en fazla 30 karakter olmalıdır"),
  jobTitle: yup
    .string()
    .required("Pozisyon alanı zorunludur")
    .max(40, "Pozisyon en fazla 40 karakter olmalıdır"),
  industry: yup
    .string()
    .required("Sektör alanı zorunludur")
    .max(30, "Sektör en fazla 30 karakter olmalıdır"),
  cityId: yup
    .string()
    .required("İl seçimi zorunludur")
    .notOneOf(["default"], "İl seçimi zorunludur"),
  startingDate: yup.string().required("İş Başlangıç tarihi zorunludur"),
  endingDate: yup.string().test('required-if-not-working', 'İş bitiş tarihi girilmesi zorunludur', function (value) {
    const isCurrentlyWorking = this.resolve(yup.ref('isCurrentlyWorking'));
    if (!isCurrentlyWorking) {
      return !!value;
    }
    return true;
  }),
  description: yup
    .string()
    .max(300, "Detaylı bilgi bölümü en fazla 300 karakter olabilir"),
});


const ExperienceForm = (props: Props) => {

  const dispatch = useDispatch();

  const accountId = useSelector((state: any) => state.account.currentAccount.payload.id);

  const fetchCities = async () => {
    try {
      const cityResponse = await cityService.getAll();
      const cityData = cityResponse.data.items;
      dispatch(setCities(cityData));
    } catch (error) {
      console.log("Veri alınamadı:", error)
    }
  }

  useEffect(() => {
    fetchCities();
  }, [])

  const cities: GetListByCountryIdCityListItemDto[] = useSelector((state: RootState) => state.city.cities);

  const accountExperienceToAdd: CreateExperienceCommand | null = useSelector((state: RootState) => state.experience.accountExperienceToAdd);

  const handleExperience = (values: any, accountId: number, dispatch: any) => {
    const accountExperienceToAdd: CreateExperienceCommand = {
      accountId: accountId,
      cityId: Number(values.cityId),
      companyName: values.companyName,
      jobTitle: values.jobTitle,
      industry: values.industry,
      startingDate: new Date(values.startingDate).toISOString(),
      endingDate: values.isCurrentlyWorking
        ? null
        : new Date(values.endingDate).toISOString(),
      isCurrentlyWorking: values.isCurrentlyWorking,
      description: values.description,
      isActive: true
    }

    dispatch(setAccountExperienceToAdd(accountExperienceToAdd));
  };


  const addExperience = async (accountExperienceToAdd: CreateExperienceCommand) => {
    try {
      await experienceService.add(accountExperienceToAdd);
      dispatch(refreshData());
    } catch (error) {
      console.log("Deneyim eklerken bir hata oluştu:", error);
    }
  }

  useEffect(() => {
    if (accountExperienceToAdd) {
      addExperience(accountExperienceToAdd)
        .then(() => {
          dispatch(clearAccountExperienceToAdd());
        })
        .catch((error) => {
          console.log("Hata oluştu:", error)
        });
    }
  }, [accountExperienceToAdd])

  return (
    <div className="experience-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleExperience(values, accountId, dispatch);
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
              inputName="jobTitle"
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
              inputName="cityId"
              defaultOptionText="İl Seçiniz"
              optionData={cities}
              optionDataFilters={citiesOptionDataFilters}
              optionDataSort={sortByPriorityDesc}
              onChange={(e) => {
                formikProps.handleChange(e);
              }}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="job-start-date-input-container input-container-w-50"
              labelText="İş Başlangıcı*"
              inputName="startingDate"
              inputType={InputType.Date}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="job-end-date-input-container input-container-w-50"
              labelText="İş Bitiş"
              inputName="endingDate"
              inputType={InputType.Date}
              disabled={formikProps.values.isCurrentlyWorking}
              inputValue={
                formikProps.values.isCurrentlyWorking
                  ? ""
                  : formikProps.values.endingDate
              }
            >
              <div className="job-continue-checkbox">
                <InputContainer
                  useFormikField={true}
                  inputContainerClasses="job-continue-checkbox"
                  elementType={FormElementType.Input}
                  inputType={InputType.Checkbox}
                  inputName="isCurrentlyWorking"
                  labelText="Çalışmaya Devam Ediyorum"
                />
              </div>
            </InputContainer>

            <InputContainer
              useFormikField={true}
              inputContainerClasses="job-detail-input-container input-container-w-100"
              elementType={FormElementType.TextArea}
              labelText="Detaylı Bilgi"
              inputName="description"
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
