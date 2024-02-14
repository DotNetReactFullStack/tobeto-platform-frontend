import React from "react";
import "./AccountSettingsForm.css";
import InputContainer from "../InputContainer";
import { InputType } from "../../../models/inputType";
import * as yup from "yup";
import { Form, Formik } from "formik";

type Props = {};

const handleAccountSettingsForm = async (values: any) => {
  console.log(values);
};

const initialValues: any = {
  previousPassword: "",
  newPassword: "",
  newPasswordRepeat: ""


}

const validationSchema = yup.object({
  previousPassword: yup
    .string()
    .min(8, "Parola en az 8 karakter olmalıdır")
    .max(36, "Parola en fazla 36 karakter olmalıdır")
    .matches(/[A-Z]/, "En az bir büyük harf içermelidir")
    .matches(/[a-z]/, "En az bir küçük harf içermelidir")
    .matches(/[0-9]/, "En az bir rakam içermelidir")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "En az bir özel karakter içermelidir")
    .required("Parola alanı zorunludur"),

  newPassword: yup
    .string()
    .min(8, "Parola en az 8 karakter olmalıdır")
    .max(36, "Parola en fazla 36 karakter olmalıdır")
    .matches(/[A-Z]/, "En az bir büyük harf içermelidir")
    .matches(/[a-z]/, "En az bir küçük harf içermelidir")
    .matches(/[0-9]/, "En az bir rakam içermelidir")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "En az bir özel karakter içermelidir")
    .notOneOf([yup.ref("previousPassword")], "Yeni şifre bir önceki şifreyle aynı olamaz.")
    .required("Parola alanı zorunludur"),

  newPasswordRepeat: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Parolalar eşleşmiyor")
    .required("Parola tekrarı zorunludur"),
})


const AccountSettingsForm = (props: Props) => {
  return (
    <div className="account-settings-form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values): any => {
          handleAccountSettingsForm(values);
        }}
        validationSchema={validationSchema}
      >

        <Form >
          <div className="account-settings-password-section">
            <InputContainer
              useFormikField={true}
              inputContainerClasses="account-settings-previous-password-container input-container-w-33"
              labelText="Mevcut Şifre*"
              inputType={InputType.Password}
              inputName="previousPassword"
              inputPlaceholder="Mevcut Şifreniz"
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="account-settings-new-password-container input-container-w-33"
              labelText="Yeni Şifre*"
              inputType={InputType.Password}
              inputName="newPassword"
              inputPlaceholder="Yeni Şifre*"
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="account-settings-new-password-repeat-container input-container-w-33"
              labelText="Yeni Şifre Tekrarı*"
              inputType={InputType.Password}
              inputName="newPasswordRepeat"
              inputPlaceholder="Yeni Şifre Tekrarı"
            />
          </div>

          <div className="account-settings-buttons">
            <button
              type="submit"
              className="account-settings-change-password-button"
            >
              Şifre Değişikliği
            </button>
            <button
              type="submit"
              className="account-settings-terminate-membership-button"
            >
              Üyeliği Sonlandır
            </button>
          </div>

        </Form>


      </Formik>



    </div>
  );
};

export default AccountSettingsForm;
