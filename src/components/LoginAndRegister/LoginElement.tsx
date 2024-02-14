import React from "react";
import "./LoginElement.css";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import LoginRequest from "../../models/auth/loginRequest";
import { HttpStatusCode } from "../../models/auth/httpStatusCode";
import InputContainer from "../EditProfile/InputContainer";
import { InputType } from "../../models/inputType";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/auth/authSlice";
import { setAccount } from "../../store/account/accountSlice";
import accountService from "../../services/accountService";
import toastr from "toastr";

type Props = {};

export const getUserIdFromToken = (token: string) => {
  const decodedToken = JSON.parse(atob(token.split('.')[1]))
  const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  return userId;
}

const handleLogin = async (
  values: LoginRequest,
  navigate: any,
  dispatch: any
) => {
  const response = authService.login(values);
  const status = (await response).request.status;

  if (status !== HttpStatusCode.InternalServerError) {
    const accessToken = (await response).data.accessToken;
    const token = accessToken.token;
    const expiration = accessToken.expiration;

    const getByUserIdAccountResponse = accountService.getByUserId(getUserIdFromToken(token));
    const account = (await getByUserIdAccountResponse).data;

    if (status === HttpStatusCode.OK && account !== undefined) {
      dispatch(setToken(response));
      dispatch(setAccount(account))
      navigate("/");
      toastr.success("Giriş başarılı.")
    }
  } else {
    toastr.error("Giriş işlemi başarısız.");
  }
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = object({
  email: string()
    .email("Geçerli bir email girin")
    .required("Email alanı zorunludur"),
  password: string().required("Parola alanı zorunludur"),
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
          validationSchema={validationSchema}
        >
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

            <button type="submit" className="login-element-login-button">
              Giriş Yap
            </button>
          </Form>
        </Formik>
        <Link to="/forgot-password">Şifremi Unuttum</Link>
      </div>
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
