import React from "react";
import "./UserInformationCard.css";
import UserInformationCardElement from "./UserInformationCardElement";
import { useSelector } from "react-redux";

type Props = {};

const emptyValue = "-";

const UserInformationCard = (props: Props) => {

  const accountData = useSelector((state: any) => state.account.currentAccount);

  const fullName = accountData.payload?.firstName.concat(" ", accountData.payload?.lastName);
  let birthDate;
  try {
    const birthDateParts = accountData.payload?.birthDate.split("T")[0].split("-");
    birthDate = birthDateParts[2] + "." + birthDateParts[1] + "." + birthDateParts[0];
  } catch (error) {
    birthDate = emptyValue;
  }

  const email = accountData.payload?.email;
  const phoneNumber = accountData.payload?.phoneNumber || emptyValue;

  return (
    <div className="user-information-card">
      <div className="user-information-header">
        <img
          className="user-information-img rounded-circle"
          src={process.env.PUBLIC_URL + "/assets/images/default-profile-photo.png"}
        />
      </div>
      <div className="user-information-body">
        <UserInformationCardElement
          iconName="bi bi-person"
          iconColor="#604ece"
          contentHeaderText="Ad Soyad"
          contentText={fullName}
        />
        <UserInformationCardElement
          iconName="bi bi-calendar3"
          iconColor="#a443ff"
          contentHeaderText="Doğum Tarihi"
          contentText={birthDate}
        />
        <UserInformationCardElement
          iconName="bi bi-envelope"
          iconColor="#5ea3f7"
          contentHeaderText="E-Posta Adresi"
          contentText={email}
        />
        <UserInformationCardElement
          iconName="bi bi-telephone"
          iconColor="#5cca84"
          contentHeaderText="Telefon Numarası"
          contentText={phoneNumber}
        />
      </div>
    </div>
  );
};

export default UserInformationCard;
