import React from "react";
import "./RegisterElement.css";

type Props = {};

const RegisterElement = (props: Props) => {
  return (
    <div className="register-element">
      <div className="register-content">
        <div className="register-element-header">
          <a className="register-element-logo" href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/tobeto-logo.png"}
              alt="Bootstrap"
            />
          </a>
          <span>Hemen Kayıt Ol</span>
        </div>
        <div className="register-element-body">
          <div className="register-element-form">
            <input type="text" placeholder="Ad*" />
            <input type="text" placeholder="Soyad*" />
            <input type="email" placeholder="E-Posta*" />
            <input type="password" placeholder="Şifre*" />
            <input type="password" placeholder="Şifre Tekrar*" />
          </div>
          <button className="register-element-register-button" type="submit">
            Kayıt Ol
          </button>
        </div>
        <div className="register-element-footer">
          <span>Zaten bir hesabın var mı?</span>
          <a className="register-element-footer-link" href="#">
            {" "}
            Giriş Yap
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterElement;
