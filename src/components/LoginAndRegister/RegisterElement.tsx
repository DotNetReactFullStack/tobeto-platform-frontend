import React from "react";
import "./RegisterElement.css";
import { Link } from "react-router-dom";
import InputContainer from "../EditProfile/InputContainer";
import { InputType } from "../../models/inputType";

type Props = {};

const RegisterElement = (props: Props) => {
  return (
    <>
      <div className="register-element-body">
        <div className="register-element-form">
          <InputContainer
            inputContainerClasses="register-element-form-element"
            inputPlaceholder="Ad*"
          />
          <InputContainer
            inputContainerClasses="register-element-form-element"
            inputPlaceholder="Soyad*"
          />
          <InputContainer
            inputType={InputType.Email}
            inputPlaceholder="E-Posta*"
            inputContainerClasses="register-element-form-element"
          />
          <InputContainer
            inputPlaceholder="TC No"
            inputContainerClasses="register-element-form-element"
          />
          <InputContainer
            inputType={InputType.Password}
            inputPlaceholder="Şifre*"
            inputContainerClasses="register-element-form-element"
          />
          <InputContainer
            inputType={InputType.Password}
            inputPlaceholder="Şifre Tekrar*"
            inputContainerClasses="register-element-form-element"
          />
        </div>
        <button className="register-element-register-button" type="submit">
          Kayıt Ol
        </button>
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