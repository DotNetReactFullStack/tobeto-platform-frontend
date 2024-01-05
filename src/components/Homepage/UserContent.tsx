import React, { useState } from "react";
import "../Homepage/UserContent.css";
import UserContentNav from "./UserContentNav";

type Props = {};

const UserContent = (props: Props) => {
  return (
    <div className="container main-section">
      <div className="card mb-3">
        <img
          src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
          className="card-img organization-logo"
        />
        <div className="card-body">
          <br />
          <h4 className="text-center">
            Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
          </h4>
          <p className="text-center">
            <span>Aradığın  <span className="green-apostrophe">“</span>İş<span className="green-apostrophe">“</span>  Burada!</span>
          </p>
          <UserContentNav />
        </div>
      </div>
    </div>
  );
};

export default UserContent;
