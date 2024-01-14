import React from "react";
import "../Navbar/MenuLinks.css";
import { Link } from "react-router-dom";

type Props = {};

const MenuLinks = (props: Props) => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Ana Sayfa
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/my-profile">
          Profilim
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Değerlendirmeler
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Katalog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Takvim
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          İstanbul Kodluyor
        </a>
      </li>
    </ul>
  );
};
export default MenuLinks;
