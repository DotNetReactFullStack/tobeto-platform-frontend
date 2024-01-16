import React from "react";
import "./EducationForm.css";

type Props = {};

const EducationForm = (props: Props) => {
  return (
    <div className="education-form">
      <div className="education-input">
        <div className="graduation-status-input">
          <label>Eğitim Durumu*</label>
          <select name="graduation-status">
            <option value="">Seviye Seçiniz</option>
            <option value="1">Lisans</option>
            <option value="2">Ön Lisans</option>
            <option value="3">Yüksek Lisans</option>
            <option value="4">Doktora</option>
          </select>
        </div>
        <div className="college-input">
          <label>Universite*</label>
          <input type="text" placeholder="Sinop Üniversitesi" />
        </div>
        <div className="education-program-input">
          <label>Bölüm*</label>
          <input type="text" placeholder="Yazılım" />
        </div>
        <div className="education-program-start-date-input">
          <label>Başlangıç Yılı*</label>
          <input type="month" placeholder="Başlangıç Yılını Seçiniz" />
        </div>
        <div className="education-program-end-date-input">
          <label>Mezuniyet Yılı*</label>
          <input type="month" placeholder="Mezuniyet Yılını Seçiniz" />
          <div className="education-program-continue-input">
            <input type="checkbox" />
            <label>Devam Ediyorum</label>
          </div>
        </div>
      </div>
      <button type="submit" className="education-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default EducationForm;
