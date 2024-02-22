import React from "react";
import "../Navbar/MenuLinks.css";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const MenuLinks = (props: Props) => {

  const location = useLocation();

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} aria-current="page" to="/">
          Ana Sayfa
        </Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/my-profile" ? 'active' : ''}`} to="/my-profile">
          Profilim
        </Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/my-assessments" ? 'active' : ''}`} to="/my-assessments">
          Değerlendirmeler
        </Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/catalog" ? 'active' : ''}`} to="/catalog">
          Katalog
        </Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/calendar" ? 'active' : ''}`} to="/calendar">
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
