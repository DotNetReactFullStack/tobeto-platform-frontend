import React from "react";
import "./CapabilityForm.css";

type Props = {};

const CapabilityForm = (props: Props) => {
  return (
    <div className="capability-form">
      <div className="capability-input">
        <label>Yetkinlikler*</label>
        <select name="capability-select">
          <option value="">Seçiniz</option>
          <option value="1">.NET</option>
          <option value="2">Java</option>
          <option value="3">CSS</option>
          <option value="4">JavaScript</option>
          <option value="5">React</option>
          <option value="6">Frontend</option>
        </select>
      </div>

      <button type="submit" className="capability-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default CapabilityForm;
