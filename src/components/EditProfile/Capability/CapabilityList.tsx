import React from "react";
import "./CapabilityList.css";
import CapabilityElement from "./CapabilityElement";
type Props = {};

const CapabilityList = (props: Props) => {
  const capabiltyFakeData: any[] = [
    { capabilityId: "capability1", capability: ".NET" },
    { capabilityId: "capability2", capability: "React" },
    { capabilityId: "capability3", capability: "Full-Stack Developer" },
    { capabilityId: "capability4", capability: "TypeScript" },
    { capabilityId: "capability5", capability: "CSS" },
  ];
  return (
    <div className="capability-list">
      {capabiltyFakeData.map((value, index) => (
        <CapabilityElement
          key={index}
          capabilityId={value.capabilityId}
          capability={value.capability}
        />
      ))}
    </div>
  );
};

export default CapabilityList;
