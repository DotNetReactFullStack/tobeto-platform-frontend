import React from "react";
import "./CapabilitiesElement.css";

type Props = {
  content: string;
};

function CapabilitiesElement({ content }: Props) {
  return (
    <div className="capability-element">
      <span>{content}</span>
    </div>
  );
}

export default CapabilitiesElement;
