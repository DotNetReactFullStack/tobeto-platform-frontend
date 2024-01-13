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
        <CertificatesElement certificateName={certificate.name} />
      ))}
    </div>
  );
};

export default AccountCertificates;
