import React from "react";
import LinkElement from "./LinkElement";

type Props = {};

const linkListFakeData: any[] = [
  {
    iconClass: "bi bi-person",
    title: "Kişisel Bilgilerim",
    redirectUrl: "/my-profile/edit-profile/my-personal-information",
  },
  { iconClass: "bi bi-suitcase-lg", title: "Deneyimlerim", redirectUrl: "/" },
  { iconClass: "bi bi-book", title: "Eğitim Hayatım", redirectUrl: "/" },
  {
    iconClass: "bi bi-bookmark-star",
    title: "Yetkinliklerim",
    redirectUrl: "/",
  },
  { iconClass: "bi bi-award", title: "Sertifikalarım", redirectUrl: "/" },
  { iconClass: "bi bi-globe2", title: "Medya Hesaplarım", redirectUrl: "/" },
  { iconClass: "bi bi-translate", title: "Yabancı Dillerim", redirectUrl: "/" },
  {
    iconClass: "bi bi-gear-wide-connected",
    title: "Ayarlar",
    redirectUrl: "/",
  },
];

const LinkList = (props: Props) => {
  return (
    <div className="link-lists">
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
