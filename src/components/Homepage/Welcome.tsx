import React from "react";
import "../Homepage/Welcome.css"

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="container welcome-font-properties">
      <h1 className="text-center"><span className="tobeto-text">TOBETO</span>'ya hoş geldin</h1>
      <h2 className="text-center">Özgür</h2>
      <br />
      <p className="text-center">Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin yanında!</p>
    </div>
  );
};

export default Welcome;
