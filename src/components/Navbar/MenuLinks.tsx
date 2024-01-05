import React from "react";
import "../Navbar/MenuLinks.css"

type Props = {};

const MenuLinks = (props: Props) => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Profilim</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Değerlendirmeler</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Katalog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Takvim</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">İstanbul Kodluyor</a>
      </li>
    </ul>
  );
};
export default MenuLinks;
