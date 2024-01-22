import React from "react";
import "./ForgotPasswordElement.css";
import { Link } from "react-router-dom";

type Props = {};

const ForgotPasswordElement = (props: Props) => {
  return (
    <div className="forgot-password-element">
      <div className="forgot-password-element-body">
        <div className="forgot-password-element-title">
          <span>Şifre Yenileme</span>
        </div>
        <div className="forgot-password-element-form">
          <input type="email" placeholder="E-posta" />
        </div>
        <button
          className="forgot-password-element-forgot-password-button"
          type="submit"
        >
          Gönder
        </button>
      </div>
      <div className="forgot-password-element-footer">
        <Link className="forgot-password-element-footer-link" to="/login">
          <span className="forgot-password-element-footer-text">
            Önceki Sayfaya Dön
          </span>
          <i className="bi bi-arrow-return-left forgot-password-element-footer-icon"></i>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordElement;
