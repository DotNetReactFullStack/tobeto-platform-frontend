import React from "react";
import "./AccountSettingForm.css";

type Props = {};

const AccountSettingForm = (props: Props) => {
  return (
    <div className="account-setting-form">
      <div className="account-setting-pasword">
        <div className="account-setting-previous-password">
          <label> Eski Şifre*</label>
          <input className="" type="password" placeholder="Eski Şifre" />
        </div>
        <div className="account-setting-new-password">
          <label> Yeni Şifre*</label>
          <input className="" type="password" placeholder="Yeni Şifre" />
        </div>

        <div className="account-setting-new-password-repeat">
          <label> Yeni Şifre Tekrarı*</label>
          <input
            className=""
            type="password"
            placeholder="Yeni Şifre Tekrarı"
          />
        </div>
      </div>
      <div className="account-setting-buttons">
        <button
          type="submit"
          className="account-setting-change-password-button"
        >
          Şifre Değişikliği
        </button>
        <button
          type="submit"
          className="account-setting-terminate-membership-button"
        >
          Üyeliği Sonlandır
        </button>
      </div>
    </div>
  );
};

export default AccountSettingForm;
