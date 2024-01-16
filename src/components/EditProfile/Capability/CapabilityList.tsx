import React from "react";
import "./CapabilityList.css";
import CapabilityElement from "./CapabilityElement";
type Props = {};

const CapabilityList = (props: Props) => {
  const capabiltyFakeData: any[] = [
    { capability: ".NET" },
    { capability: "React" },
    { capability: "Full-Stack Developer" },
    { capability: "TypeScript" },
    { capability: "CSS" },
  ];
  return (
    <div className="capability-list">
      {capabiltyFakeData.map((value, index) => (
        <CapabilityElement key={index} capability={value.capability} />
      ))}
    </div>
  );
};

export default CapabilityList;
