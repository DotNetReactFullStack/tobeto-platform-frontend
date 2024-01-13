import React from "react";
import "./Capabilities.css";
import CapabilitiesElement from "./CapabilitiesElement";

type Props = {
  data: any[];
};

const Capabilities = (props: Props) => {
  return (
    <div className="capabilities">
      {props.data.map((value) => (
        <CapabilitiesElement content={value} />
      ))}
    </div>
  );
};

export default Capabilities;
