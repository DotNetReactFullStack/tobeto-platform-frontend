import React from "react";
import "./CertificatesElement.css";

type Props = {
  certificateName: string;
};

const CertificatesElement = ({ certificateName }: Props) => {
  return (
    <div className="certificates-element">
      <span className="certificates-name">{certificateName}</span>
      <i className="bi bi-file-pdf certificates-file-type-icon"></i>
    </div>
  );
};

export default CertificatesElement;
