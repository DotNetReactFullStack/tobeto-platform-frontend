import React from "react";
import LinkElement from "./LinkElement";
import "./LinkList.css";

type Props = {};

const linkListFakeData: any[] = [
  {
    iconClass: "bi bi-person",
    title: "Kişisel Bilgilerim",
    redirectUrl: "/my-profile/edit-profile/my-personal-information",
  },
  {
    iconClass: "bi bi-suitcase-lg",
    title: "Deneyimlerim",
    redirectUrl: "/my-profile/edit-profile/my-experience",
  },
  {
    iconClass: "bi bi-book",
    title: "Eğitim Hayatım",
    redirectUrl: "/my-profile/edit-profile/education",
  },
  {
    iconClass: "bi bi-bookmark-star",
    title: "Yetkinliklerim",
    redirectUrl: "/my-profile/edit-profile/capabilities",
  },
  {
    iconClass: "bi bi-award",
    title: "Sertifikalarım",
    redirectUrl: "/my-profile/edit-profile/certificates",
  },
  {
    iconClass: "bi bi-globe2",
    title: "Medya Hesaplarım",
    redirectUrl: "/my-profile/edit-profile/social-media-accounts",
  },
  {
    iconClass: "bi bi-translate",
    title: "Yabancı Dillerim",
    redirectUrl: "/my-profile/edit-profile/foreing-languages",
  },
  {
    iconClass: "bi bi-gear-wide-connected",
    title: "Ayarlar",
    redirectUrl: "/my-profile/edit-profile/settings",
  },
];

const LinkList = (props: Props) => {
  return (
    <div className="link-list">
      {linkListFakeData.map((value, index) => (
        <LinkElement
          key={index}
          iconClass={value.iconClass}
          title={value.title}
          redirectUrl={value.redirectUrl}
        />
      ))}
    </div>
  );
};

export default LinkList;
