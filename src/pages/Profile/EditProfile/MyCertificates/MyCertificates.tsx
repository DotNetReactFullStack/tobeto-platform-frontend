import React from "react";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import UploadCertificate from "../../../../components/EditProfile/MyCertificates/UploadCertificate";
import CertificateList from "../../../../components/EditProfile/MyCertificates/CertificateList";

type Props = {};

const MyCertificates = (props: Props) => {
  return (
    <div className="edit-profile-page-body container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <UploadCertificate />
        <CertificateList />
      </div>
    </div>
  );
};

export default MyCertificates;
