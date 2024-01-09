import React from "react";
import "../Navbar/UserSection.css"

type Props = {};

function UserSection({ }: Props) {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <div className="user-and-tobeto">
        <li className="nav-item dropdown d-none d-xxl-block">
          <a className="nav-link p-0" href="#" role="button">
            <img src={process.env.PUBLIC_URL + "/tobeto-icon.png"} alt="Bootstrap" width="25" height="25" />
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link navbar-user-section-border" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className='rounded-circle me-2' src={process.env.PUBLIC_URL + "/user-icon.png"} alt="Bootstrap" width="35" height="35" />
            <span className='user-full-name me-2'>Burhan Özşahinoğlu</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Profil Bilgileri</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Oturumu Kapat</a></li>
          </ul>
        </li>
      </div>

    </ul>
  );
}

export default UserSection;
