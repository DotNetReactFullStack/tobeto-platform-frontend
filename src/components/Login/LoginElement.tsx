import React from "react";
import "./LoginElement.css";

type Props = {};

const LoginElement = (props: Props) => {
  return (
    <div className="login-element">
      <div className="login-content">
        <div className="login-element-header">
          <a className="login-element-logo" href="#">
            <img
              src={process.env.PUBLIC_URL + "/images/tobeto-logo.png"}
              alt="Bootstrap"
            />
          </a>
        </div>
        <div className="login-element-body">
          <div className="login-element-form">
            <input type="email" placeholder="E-Posta" />

            <input type="password" placeholder="Şifre" />
          </div>
          <button className="login-element-login-button" type="submit">
            Giriş Yap
          </button>
          <a href="#">Şifremi Unuttum</a>
        </div>
        <div className="login-element-footer">
          <span>Henüz üye değil misin?</span>
          <a className="login-element-footer-link" href="#">
            {" "}
            Kayıt ol
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginElement;
