import React from "react";
import "./ForeignLanguageForm.css";

type Props = {};

const ForeignLanguageForm = (props: Props) => {
  return (
    <div className="foreing-language">
      <div className="foreing-language-input">
        <div className="foreing-language-name-input input-container-w-50">
          <select name="foreing-language-name">
            <option value="">Dil Seçiniz*</option>
            <option value="1">Almanca</option>
            <option value="2">İngilizce</option>
            <option value="3">Korece</option>
            <option value="4">Japonca</option>
          </select>
        </div>
        <div className="foreing-language-level-input input-container-w-50">
          <select name="foreing-language-level">
            <option value="">Seviye Seçiniz*</option>
            <option value="1">Temel Seviye (A1, A2)</option>
            <option value="2">Orta Seviye (B1, B2)</option>
            <option value="3">İleri Seviye (C1, C2)</option>
            <option value="4">Anadil</option>
          </select>
        </div>
      </div>
      <button type="submit" className="foreing-language-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default ForeignLanguageForm;
