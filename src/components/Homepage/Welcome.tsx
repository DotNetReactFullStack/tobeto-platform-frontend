import React from "react";
import "../Homepage/Welcome.css"
import { useSelector } from "react-redux";

type Props = {};

const Welcome = (props: Props) => {
  let isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

  const accountData = useSelector((state: any) => state.account.currentAccount);

  var firstName = accountData.payload?.firstName;

  return (
    <div className="container welcome-font-properties">
      <h1 className="text-center"><span className="tobeto-text">TOBETO</span>'ya hoş geldin</h1>
      <h2 className="text-center">{firstName}</h2>
      <br />
      <p className="text-center">Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!</p>
    </div>
  );
};

export default Welcome;
