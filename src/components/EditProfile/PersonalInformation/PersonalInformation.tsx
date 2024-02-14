import React from "react";
import "./PersonalInformation.css";
import InputContainer from "../InputContainer";
import DeleteProfilePhotoModal from "./DeleteProfilePhotoModal";
import { FormElementType } from "../../../models/formElementType";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik } from "formik";

type Props = {};

const ifVisibilityIsTrue = (value: any) => value.visibility === true;
const ifVisibilityIsFalse = (value: any) => value.visibility === false;
const ifCountryIsTurkey = (value: any) => value.name === "Türkiye";

const sortByPriorityDesc = (a: any, b: any) => b.priority - a.priority;
const sortByPriorityAsc = (a: any, b: any) => a.priority - b.priority;

let countriesOptionDataFilters = [ifVisibilityIsTrue, ifCountryIsTurkey];
let citiesOptionDataFilters = [ifVisibilityIsTrue];
let districtsOptionDataFilters = [ifVisibilityIsTrue];

const countries = [
  {
    id: 1,
    name: "Türkiye",
    priority: 2,
    visibility: true,
  },
  {
    id: 2,
    name: "Almanya",
    priority: 1,
    visibility: true,
  },
];

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

const districts = [
  {
    id: "1",
    cityId: "1",
    name: "Ardanuç",
    priority: 3,
    visibility: true,
  },
  {
    id: "2",
    cityId: "2",
    name: "Erfelek",
    priority: 2,
    visibility: true,
  },
  {
    id: "3",
    cityId: "3",
    name: "Pendik",
    priority: 1,
    visibility: true,
  },
];

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
const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("Ad alanı zorunludur")
    .min(2, "Ad en az 2 karakter olmalıdır")
    .max(30, "Ad en fazla 30 karakter olmalıdır"),
  lastName: yup
    .string()
    .required("Soyad alanı zorunludur")
    .min(2, "Soyad en az 2 karakter olmalıdır")
    .max(30, "Soyad en fazla 30 karakter olmalıdır"),
  phoneNumber: yup
    .string()
    .matches(
      /^[1-9]\d*$/,
      "Telefon numarası sadece rakam içermelidir ve sıfır ile başlamamalıdır"
    )
    .required("Telefon numarası gereklidir")
    .min(10, "Telefon numarası 10 karakter olmalıdır")
    .max(10, "Telefon numarası 10 karakter olmalıdır"),
  birthDate: yup
    .date()
    .required("Doğum tarihi gereklidir")
    .max(new Date(), "Geçerli bir doğum tarihi girin"),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta alanı zorunludur"),
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
        initialValues={initialValues}
        onSubmit={(values): any => {
          handlePersonalInformation(values);
        }}
        validationSchema={validationSchema}
      >
        <Form className="personal-information-input-section">
          <InputContainer
            useFormikField={true}
            inputContainerClasses="user-name-input-container input-container-w-50"
            labelText="Adınız*"
            inputName="firstName"
            inputPlaceholder="Adınız"
            //inputValue="özgür"
          />

          <InputContainer
            useFormikField={true}
            inputContainerClasses="user-surname-input-container input-container-w-50"
            labelText="Soyadınız*"
            inputName="lastName"
            inputPlaceholder="Soyadınız"
            //inputValue="sönmez"
          />

          <InputContainer
            useFormikField={true}
            inputContainerClasses="user-phone-input-container input-container-w-50"
            labelText="Telefon Numaranız*"
            inputName="phoneNumber"
            inputType={InputType.Tel}
            inputPlaceholder="Telefon Numaranız"
            //inputValue="5554443322"
          />

          <InputContainer
            useFormikField={true}
            inputContainerClasses="user-birthdate-input-container input-container-w-50"
            labelText="Doğum Tarihiniz*"
            inputName="birthDate"
            inputType={InputType.Date}
            //inputValue={formattedDate}
          />

          <InputContainer
            useFormikField={true}
            inputContainerClasses="user-identity-number-input-container input-container-w-50"
            labelText="TC Kimlik No*"
            inputName="nationalIdentificationNumber"
            inputPlaceholder="TC Kimlik No"
            inputValue="1234567890"
            disabled={true}
          />

          <InputContainer
            useFormikField={true}
            inputContainerClasses="user-email-input-container input-container-w-50"
            labelText="E-Posta*"
            inputName="email"
            inputType={InputType.Email}
            inputPlaceholder="E-Posta adresiniz"
            //inputValue="ozgur@gmail.com"
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
      </Formik>
    </div>
  );
};
export default PersonalInformation;
