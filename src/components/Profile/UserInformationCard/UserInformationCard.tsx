import React from "react";
import "./UserInformationCard.css";
import UserInformationCardElement from "./UserInformationCardElement";

type Props = {};

const UserInformationCard = (props: Props) => {
  return (
    <div className="user-information-card">
      <div className="user-information-header">
        <img
          className="user-information-img rounded-circle"
          src={process.env.PUBLIC_URL + "/images/user-icon.png"}
        />
      </div>
      <div className="user-information-body">
        <UserInformationCardElement
          iconName="bi bi-person"
          iconColor="#604ece"
          contentHeaderText="Ad Soyad"
          contentText="Ersin Kaya"
        />
        <UserInformationCardElement
          iconName="bi bi-calendar3"
          iconColor="#a443ff"
          contentHeaderText="Doğum Tarihi"
          contentText="28.08.1997"
        />
        <UserInformationCardElement
          iconName="bi bi-envelope"
          iconColor="#5ea3f7"
          contentHeaderText="E-Posta Adresi"
          contentText="ersin-kaya@outlook.com.tr"
        />
        <UserInformationCardElement
          iconName="bi bi-telephone"
          iconColor="#5cca84"
          contentHeaderText="Telefon Numarası"
          contentText="+90516 516 16 16"
        />
      </div>
    </div>
  );
};

export default UserInformationCard;
