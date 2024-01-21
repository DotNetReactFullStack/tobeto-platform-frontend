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
        <Link className="nav-link" to="/my-assessments">
          Değerlendirmeler
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Katalog
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/calendar">
          Takvim
        </Link>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          target="_blank"
          href="https://tobeto.com/istanbul-kodluyor"
        >
          İstanbul Kodluyor
        </a>
      </li>
    </ul>
  );
};
export default MenuLinks;
