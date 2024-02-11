import React from "react";
import "./AccountSettingsForm.css";
import InputContainer from "../InputContainer";
import { InputType } from "../../../models/inputType";

type Props = {};

const AccountSettingsForm = (props: Props) => {
  return (
    <div className="account-settings-form">
      <div className="account-settings-password-section">
        <InputContainer
          inputContainerClasses="account-settings-previous-password-container input-container-w-33"
          labelText="Mevcut Şifre*"
          inputType={InputType.Password}
          inputName="previous-password"
          inputPlaceholder="Mevcut Şifreniz"
        />

        <InputContainer
          inputContainerClasses="account-settings-new-password-container input-container-w-33"
          labelText="Yeni Şifre*"
          inputType={InputType.Password}
          inputName="new-password"
          inputPlaceholder="Yeni Şifre*"
        />

        <InputContainer
          inputContainerClasses="account-settings-new-password-repeat-container input-container-w-33"
          labelText="Yeni Şifre Tekrarı*"
          inputType={InputType.Password}
          inputName="new-password-repeat"
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
    </div>
  );
};

export default AccountSettingsForm;
