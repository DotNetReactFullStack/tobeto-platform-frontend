import React from "react";
import "./RegisterElement.css";
import { Link } from "react-router-dom";

type Props = {};

const RegisterElement = (props: Props) => {
  return (
    <>
      <div className="register-element-body">
        <div className="register-element-form">
          <input type="text" placeholder="Ad*" />
          <input type="text" placeholder="Soyad*" />
          <input type="email" placeholder="E-Posta*" />
          <input type="number" placeholder="TC No*" />
          <input type="password" placeholder="Şifre*" />
          <input type="password" placeholder="Şifre Tekrar*" />
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
