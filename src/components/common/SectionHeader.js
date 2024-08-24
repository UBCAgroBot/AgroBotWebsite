import React from "react";

function SectionHeader(props) {
  const text = props.children;

  return (
    <h1 className="text-[32px] capitalize text-black sm:text-[48px]">{text}</h1>
  );
}

export default SectionHeader;