import React from "react";
import "./LoginElement.css";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Yup, { number, object, string } from "yup";
import LoginRequest from "../../models/auth/loginRequest";
import { HttpStatusCode } from "../../models/auth/httpStatusCode";
import InputContainer from "../EditProfile/InputContainer";
import { FormElementType } from "../../models/formElementType";
import { InputType } from "../../models/inputType";
import tokenService from "../../core/services/tokenService";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/auth/authSlice";

type Props = {};

const handleLogin = async (values: LoginRequest, navigate: any, dispatch: any) => {
  const response = authService.login(values);
  const status = (await response).status;

  if (status === HttpStatusCode.OK) {
    dispatch(setToken(response));
    navigate("/");
  }
}

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = object({
  email: string()
    .email('Geçerli bir email girin')
    .required('Email alanı zorunludur'),
  password: string()
    // .min(8, 'Parola en az 8 karakter olmalıdır')
    // .max(36, 'Parola en fazla 36 karakter olmalıdır')
    // .matches(/[A-Z]/, 'En az bir büyük harf içermelidir')
    // .matches(/[a-z]/, 'En az bir küçük harf içermelidir')
    // .matches(/[0-9]/, 'En az bir rakam içermelidir')
    // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'En az bir özel karakter içermelidir')
    .required('Parola alanı zorunludur'),
});

const LoginElement: React.FC = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="login-element-body">
        <Formik
          initialValues={initialValues}
          onSubmit={(values): any => {
            handleLogin(values, navigate, dispatch);
          }}
          validationSchema={validationSchema}>
          <Form className="login-element-form">

            <InputContainer
              useFormikField={true}
              inputContainerClasses="login-element-form-element"
              inputType={InputType.Email}
              inputName="email"
              inputPlaceholder="E-Posta"
            />

            <InputContainer
              useFormikField={true}
              inputContainerClasses="login-element-form-element"
              inputType={InputType.Password}
              inputName="password"
              inputPlaceholder="Şifre"
            />

            <button
              type="submit"
              className="login-element-login-button">
              Giriş Yap
            </button>
          </Form>
        </Formik>
        <Link to="/forgot-password">Şifremi Unuttum</Link>
      </div >
      <div className="login-element-footer">
        <span>Henüz üye değil misin?</span>
        <Link className="login-element-footer-link" to="/register">
          {" "}
          Kayıt ol
        </Link>
      </div>
    </>
  );
};

export default LoginElement;
