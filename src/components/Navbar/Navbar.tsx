import React from "react";
import MenuLinks from "./MenuLinks";
import UserSection from "./UserSection";
import '../Navbar/Navbar.css'

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar sticky-xxl-top navbar-expand-xxl navbar-padding">
      <div className="container-fluid">

        {/* LOGO */}
        <a className="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL + "/tobeto-logo.png"} alt="Bootstrap" width="170" height="35" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MenuLinks></MenuLinks>
          <UserSection></UserSection>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
