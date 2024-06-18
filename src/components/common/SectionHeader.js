import React from "react";

function SectionHeader(props) {
  const text = props.children;

  return (
    <h1 className="text-black text-[32px] sm:text-[48px] capitalize">{text}</h1>
  );
}

export default SectionHeader;