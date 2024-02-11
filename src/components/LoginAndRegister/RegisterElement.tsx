import React from "react";
import "./RegisterElement.css";
import { Link, useNavigate } from "react-router-dom";
import InputContainer from "../EditProfile/InputContainer";
import { InputType } from "../../models/inputType";
import { object, ref, string } from "yup";
import * as yup from "yup";
import { RegisterRequest } from "../../models/auth/registerRequest";
import authService from "../../services/authService";
import { HttpStatusCode } from "../../models/auth/httpStatusCode";
import { setToken } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";

type Props = {};

const handleRegister = async (
  values: RegisterRequest,
  navigate: any,
  dispatch: any
) => {
  const response = authService.register(values);
  const status = (await response).status;

  if (status === HttpStatusCode.OK) {
    dispatch(setToken(response));
    navigate("/");
  } else {
    //...
  }
};

const initialValues: RegisterRequest = {
  userForRegisterDto: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  nationalIdentificationNumber: "",
};

const validationSchema = yup.object({
  userForRegisterDto: yup.object({
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
    email: yup
      .string()
      .email("Geçerli bir e-posta adresi giriniz")
      .required("E-posta alanı zorunludur"),
    password: yup
      .string()
      .min(8, "Parola en az 8 karakter olmalıdır")
      .max(36, "Parola en fazla 36 karakter olmalıdır")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir")
      .matches(/[0-9]/, "En az bir rakam içermelidir")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "En az bir özel karakter içermelidir")
      .required("Parola alanı zorunludur"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Parolalar eşleşmiyor")
      .required("Parola tekrarı zorunludur"),
  }),
  nationalIdentificationNumber: yup
    .string()
    .required("Kimlik numarası alanı zorunludur")
    .matches(
      /^[1-9]{1}[0-9]{9}[0,2,4,6,8]{1}$/,
      "Geçerli bir TC Kimlik numarası giriniz"
    ),
});

const RegisterElement = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="register-element-body">
        <Formik
          initialValues={initialValues}
          onSubmit={(values): any => {
            handleRegister(values, navigate, dispatch);
          }}
          validationSchema={validationSchema}
        >
          <Form className="register-element-form">
            <InputContainer
              useFormikField={true}
              inputContainerClasses="register-element-form-element"
              inputName="userForRegisterDto.firstName"
              inputPlaceholder="Ad*"
            />
            <InputContainer
              useFormikField={true}
              inputContainerClasses="register-element-form-element"
              inputName="userForRegisterDto.lastName"
              inputPlaceholder="Soyad*"
            />
            <InputContainer
              useFormikField={true}
              inputType={InputType.Email}
              inputName="userForRegisterDto.email"
              inputPlaceholder="E-Posta*"
              inputContainerClasses="register-element-form-element"
            />
            <InputContainer
              useFormikField={true}
              inputName="nationalIdentificationNumber"
              inputPlaceholder="TC No"
              inputContainerClasses="register-element-form-element"
            />
            <InputContainer
              useFormikField={true}
              inputType={InputType.Password}
              inputName="userForRegisterDto.password"
              inputPlaceholder="Şifre*"
              inputContainerClasses="register-element-form-element"
            />
            <InputContainer
              useFormikField={true}
              inputType={InputType.Password}
              inputName="userForRegisterDto.confirmPassword"
              inputPlaceholder="Şifre Tekrar*"
              inputContainerClasses="register-element-form-element"
            />
            <button className="register-element-register-button" type="submit">
              Kayıt Ol
            </button>
          </Form>
        </Formik>
      </div>
      <div className="register-element-footer">
        <span>Zaten bir hesabın var mı?</span>
        <Link className="register-element-footer-link" to="/login">
          {" "}
          Giriş Yap
        </Link>
      </div>
    </>
  );
};

export default RegisterElement;
