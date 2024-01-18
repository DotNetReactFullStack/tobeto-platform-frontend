import React from "react";
import "./SocialMediaAccountFrom.css";

type Props = {};

const SocialMediaAccountsFrom = (props: Props) => {
  return (
    <div className="social-media-account-form">
      <div className="social-media-account-input">
        <div className="social-media-account-type-input">
          <select name="social-media-account-type">
            <option value="">Seçiniz</option>
            <option value="1">Instagram</option>
            <option value="2">LınkedIn</option>
            <option value="3">Twitter</option>
            <option value="4">GitHub</option>
          </select>
        </div>
        <div className="social-media-account-link-input">
          <input type="url" placeholder="http://" />
        </div>
      </div>
      <button type="submit" className="social-media-account-save-button">
        Kaydet
      </button>
    </div>
  );
};

export default SocialMediaAccountsFrom;
