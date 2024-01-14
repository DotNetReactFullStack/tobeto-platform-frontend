import React from "react";
import "./AccountCertificates.css";
import CertificatesElement from "./CertificatesElement";

type Props = {
  data: any[];
};

const AccountCertificates = (props: Props) => {
  return (
    <div className="account-certificates">
      {props.data.map((certificate, index) => (
        <CertificatesElement key={index} certificateName={certificate.name} />
      ))}
    </div>
  );
};

export default AccountCertificates;
