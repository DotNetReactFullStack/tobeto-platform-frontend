import React from "react";
import "./AccountCertificates.css";
import CertificatesElement from "./CertificatesElement";

type Props = {}

const accountCertificatesFakeData: any[] = [
  { name: "CSS sertifika" },
  { name: "JavaScript sertifika" },
  { name: ".Net sertifika" },
  { name: "React sertifika" },
  { name: "İstanbul Kodluyor kurs sertifikası" },
];

const AccountCertificates = (props: Props) => {
  return (
    <div className="account-certificates">
      {
        accountCertificatesFakeData.map((certificate, index) => (
          <CertificatesElement key={index} certificateName={certificate.name} />
        ))
      }
    </div>
  );
};

export default AccountCertificates;
