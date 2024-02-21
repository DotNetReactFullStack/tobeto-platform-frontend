import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/configureStore";
import "./PersonalInformation.css";
import InputContainer from "../InputContainer";
import DeleteProfilePhotoModal from "./DeleteProfilePhotoModal";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik } from "formik";

import countryService from "../../../services/countryService";
import { setCountries } from "../../../store/country/countrySlice";
import { GetListCountryListItemDto } from "../../../models/country/getListCountryListItemDto";

import cityService from "../../../services/cityService";
import { setCities } from "../../../store/city/citySlice";
import { GetListByCountryIdCityListItemDto } from "../../../models/city/getListByCountryIdCityListItemDto";

import districtService from "../../../services/districtService";
import { setDistricts } from "../../../store/district/districtSlice";
import { GetListByCityIdDistrictListItemDto } from "../../../models/district/getListByCityIdDistrictListItemDto";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
const ifVisibilityIsFalse = (value: any) => value.visibility === false;
//const ifCountryIsTurkey = (value: any) => value.name === "Türkiye";

const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;
const sortByPriorityAsc = (a: any, b: any) => a.priority - b.priority;

let countriesOptionDataFilters: any = [];
let citiesOptionDataFilters: any = [];
let districtsOptionDataFilters: any = [];

const emptyValue = "-";

//Formik, Yup
const initialValues: any = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  birthDate: "",
  nationalIdentificationNumber: "",
  email: "",
  country: "",
  city: "",
  district: "",
  addressDetail: "",
  aboutMe: "",
};
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    //.required("Ad alanı zorunludur")
    .min(2, "Ad en az 2 karakter olmalıdır")
    .max(30, "Ad en fazla 30 karakter olmalıdır"),
  lastName: yup
    .string()
    //.required("Soyad alanı zorunludur")
    .min(2, "Soyad en az 2 karakter olmalıdır")
    .max(30, "Soyad en fazla 30 karakter olmalıdır"),
  phoneNumber: yup.string(),
  //.matches(
  ///^\d{3}-\d{3}-\d{4}$/,
  // "Telefon numarası formatı geçerli değil. Doğru format: 555-555-8899")
  //.required("Telefon numarası gereklidir")
  //.min(12, "Telefon numarası 12 karakter olmalıdır")
  //.max(12, "Telefon numarası 12 karakter olmalıdır"),
  birthDate: yup
    .date()
    //.required("Doğum tarihi gereklidir")
    .max(new Date(), "Geçerli bir doğum tarihi girin"),
  email: yup.string().email("Geçerli bir e-posta adresi giriniz"),
  //.required("E-posta alanı zorunludur"),
  country: yup
    .string()
    .required("Ülke seçimi zorunludur")
    .notOneOf(["default"], "Ülke seçimi zorunludur"),
  city: yup
    .string()
    .required("İl seçimi zorunludur")
    .notOneOf(["default"], "İl seçimi zorunludur"),
  district: yup
    .string()
    .required("İlçe seçimi zorunludur")
    .notOneOf(["default"], "İlçe seçimi zorunludur"),
  addressDetail: yup
    .string()
    .max(200, "Adres detayı en fazla 200 karakter olabilir"),
  aboutMe: yup
    .string()
    .max(1000, "Hakkımda bölümü en fazla 1000 karakter olabilir"),
});

const handlePersonalInformation = async (values: any) => {
  console.log(values);
};

const PersonalInformation = (props: Props) => {
  //user bilgileri
  const accountData = useSelector((state: any) => state.account.currentAccount);
  const firstName = accountData.payload?.firstName;
  const lastName = accountData.payload?.lastName;
  const phoneNumber = accountData.payload?.phoneNumber;
  const email = accountData.payload?.email;
  const nationalIdentificationNumber =
    accountData.payload?.nationalIdentificationNumber;
  const birthDate = accountData.payload?.birthDate;
  //user bilgileri
  //country-city-district
  const dispatch = useDispatch();
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(
    null
  );
  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);

  async function fetchCountryInputData() {
    try {
      const countryResponse = await countryService.getAll();
      const countryData = countryResponse.data.items;
      dispatch(setCountries(countryData));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  async function fetchCityInputData(countryId: number) {
    try {
      const cityResponse = await cityService.getByCountryId(countryId);
      const cityData = cityResponse.data.items;
      dispatch(setCities(cityData));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  async function fetchDistrictInputData(cityId: number) {
    try {
      const districtsResponse = await districtService.getByCityId(cityId);
      const districtsData = districtsResponse.data.items;
      dispatch(setDistricts(districtsData));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchCountryInputData();
  }, []);

  useEffect(() => {
    console.log(selectedCountryId);
    if (selectedCountryId !== null) {
      fetchCityInputData(selectedCountryId);
    }
  }, [selectedCountryId]);

  useEffect(() => {
    if (selectedCityId !== null) {
      fetchDistrictInputData(selectedCityId);
    }
  }, [selectedCityId]);

  const countries: GetListCountryListItemDto[] = useSelector(
    (state: RootState) => state.country.countries
  );
  const cities: GetListByCountryIdCityListItemDto[] = useSelector(
    (state: RootState) => state.city.cities
  );
  const districts: GetListByCityIdDistrictListItemDto[] = useSelector(
    (state: RootState) => state.district.districts
  );

  // Dosya yükleme girişinin referansı
  const profilePhotofileInputRef = React.createRef<HTMLInputElement>();

  // Dosya yükleme girişi açma işlemi
  const handleEditButtonClick = () => {
    // Dosya yükleme girişini tıklama işlemiyle aç
    if (profilePhotofileInputRef.current) {
      profilePhotofileInputRef.current.click();
    }
  };

  // Tarihi gg.aa.yyyy formatından yyyy-mm-dd formatına dönüştürme
  const dateOfBirthValue = "17.06.1995";
  const [day, month, year] = dateOfBirthValue.split("."); // Tarihi parçalara ayırma
  const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )}`;

  return (
    <div className="personal-information">
      <div className="profile-photo">
        <div className="profile-photo-edit rounded-circle">
          <button
            className="profile-photo-delete-button"
            data-bs-toggle="modal"
            data-bs-target="#profile-photo-delete"
          >
            <i className="bi bi-trash profile-photo-delete-button-icon"></i>
          </button>
          <DeleteProfilePhotoModal deleteModalId="profile-photo-delete" />
          <button
            className="profile-photo-edit-button"
            onClick={handleEditButtonClick}
          >
            <i className="bi bi-pencil profile-photo-edit-button-icon"></i>
          </button>
          <input
            type="file"
            ref={profilePhotofileInputRef} // Dosya yükleme girişine referansı ata
            style={{ display: "none" }}
          />
        </div>
      </div>
      <Formik
        initialValues={initialValues} // kontrol!
        onSubmit={handlePersonalInformation}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form className="personal-information-input-section">
            <InputContainer
              useFormikField={true}
              inputContainerClasses="user-name-input-container input-container-w-50"
              labelText="Adınız*"
              inputName="firstName"
              inputValue={firstName}
              //inputPlaceholder={firstName}
              //inputValue="özgür"
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="user-surname-input-container input-container-w-50"
              labelText="Soyadınız*"
              inputName="lastName"
              inputValue={lastName}
              //inputPlaceholder="Soyadınız"
              //inputValue="sönmez"
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="user-phone-input-container input-container-w-50"
              labelText="Telefon Numaranız*"
              inputName="phoneNumber"
              inputType={InputType.Tel}
              inputValue={phoneNumber}
              inputPlaceholder="Telefon Numaranız"
              onChange={(e) => {
                formikProps.handleChange(e);
              }}
              //inputValue="5554443322"
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="user-birthdate-input-container input-container-w-50"
              labelText="Doğum Tarihiniz*"
              inputName="birthDate"
              inputType={InputType.Date}
              //inputValue={birthDate}
              onChange={(e) => {
                formikProps.handleChange(e);
              }}
              //inputValue={formattedDate}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="user-identity-number-input-container input-container-w-50"
              labelText="TC Kimlik No*"
              inputName="nationalIdentificationNumber"
              inputPlaceholder="TC Kimlik No"
              inputValue={nationalIdentificationNumber}
              disabled={true}
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="user-email-input-container input-container-w-50"
              labelText="E-Posta*"
              inputName="email"
              inputType={InputType.Email}
              inputPlaceholder="E-Posta adresiniz"
              inputValue={email}
              disabled={true}
            />
            <div className="user-address-section">
              <InputContainer
                useFormikField={true}
                inputContainerClasses="user-address-country-input-container input-container-w-100"
                elementType={FormElementType.Select}
                labelText="Ülke*"
                inputName="country"
                defaultOptionText="Ülke"
                optionData={countries}
                optionDataFilters={countriesOptionDataFilters}
                optionDataSort={sortByPriorityDesc}
                onChange={(e) => {
                  formikProps.handleChange(e);
                  setSelectedCountryId(Number(e.target.value));
                }}
                //inputValue="Türkiye"
              />

              <InputContainer
                useFormikField={true}
                inputContainerClasses="user-address-city-input-container input-container-w-50"
                elementType={FormElementType.Select}
                labelText="İl*"
                inputName="city"
                defaultOptionText="İl"
                optionData={cities}
                optionDataFilters={citiesOptionDataFilters}
                optionDataSort={sortByPriorityDesc}
                onChange={(e) => {
                  formikProps.handleChange(e);
                  setSelectedCityId(Number(e.target.value));
                }}
                //inputValue="Sinop"
              />

              <InputContainer
                useFormikField={true}
                inputContainerClasses="user-address-districts-input-container input-container-w-50"
                elementType={FormElementType.Select}
                labelText="İlçe*"
                inputName="district"
                defaultOptionText="İlçe"
                optionData={districts}
                optionDataFilters={districtsOptionDataFilters}
                optionDataSort={sortByPriorityDesc}
                onChange={(e) => {
                  formikProps.handleChange(e);
                }}
                //inputValue="Erfelek"
              />

              <InputContainer
                useFormikField={true}
                inputContainerClasses="user-address-detail-input-container input-container-w-100"
                elementType={FormElementType.TextArea}
                labelText="Mahalle / Sokak"
                inputName="addressDetail"
                inputPlaceholder="Açık Adres..."
                //inputValue="sadasd mah. sadasd cad."
              />

              <InputContainer
                useFormikField={true}
                inputContainerClasses="user-about-me-input-container input-container-w-100"
                elementType={FormElementType.TextArea}
                labelText="Hakkımda"
                inputName="aboutMe"
                inputPlaceholder="Kendini kısaca tanıt..."
                //inputValue="xD.... "
              />
            </div>
            <button type="submit" className="personal-information-save-button">
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default PersonalInformation;
