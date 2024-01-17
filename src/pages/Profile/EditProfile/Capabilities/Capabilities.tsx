import React from "react";
import LinkList from "../../../../components/EditProfile/Link/LinkList";
import CapabilityForm from "../../../../components/EditProfile/Capability/CapabilityForm";
import CapabilityList from "../../../../components/EditProfile/Capability/CapabilityList";

type Props = {};

function Capabilities({ }: Props) {
  return (
    <div className="edit-profile-page-body container main-section d-flex">
      <div className="edit-profile-page-left-side">
        <LinkList />
      </div>
      <div className="edit-profile-page-right-side">
        <CapabilityForm />
        <CapabilityList />
      </div>
    </div>
  );
}

export default Capabilities;
