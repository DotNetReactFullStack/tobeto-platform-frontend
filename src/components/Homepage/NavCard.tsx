import React from "react";
import "./NavCard.css";
import NavCardElement from "./NavCardElement";

type Props = {};

const navCardFakeData: any[] = [
  { title: "Profilini Oluştur", redirectUrl: "/my-profile" },
  { title: "Kendini değerlendir", redirectUrl: "/my-profile" },
  { title: "Öğrenmeye başla", redirectUrl: "/my-learning-paths" },
];

const NavCard = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="nav-card-component">
        {navCardFakeData.map((value, index) => (
          <NavCardElement
            key={index}
            title={value.title}
            redirectUrl={value.redirectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default NavCard;
