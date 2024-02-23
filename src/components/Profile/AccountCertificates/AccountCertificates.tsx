import React from "react";
import "./AccountCertificates.css";
import CertificatesElement from "./CertificatesElement";

type Props = {}

const accountCertificatesFakeData: any[] = [
  { name: ".NET & React Full Stack | Codecademy" },
];

const AccountCertificates = (props: Props) => {
  return (
    <div className="account-certificates">
      {
        accountCertificatesFakeData.length === 0
          ? <span className="color-gray-fs-15">Lütfen sertifikalarınızı ekleyiniz.</span>
          : <></>
      }
      {
        accountCertificatesFakeData.map((certificate, index) => (
          <CertificatesElement key={index} certificateName={certificate.name} />
        ))
      }
    </div>
  );
};

export default AccountCertificates;
