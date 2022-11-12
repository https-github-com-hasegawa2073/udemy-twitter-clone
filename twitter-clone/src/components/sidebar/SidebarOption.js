import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ text, Icon, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
