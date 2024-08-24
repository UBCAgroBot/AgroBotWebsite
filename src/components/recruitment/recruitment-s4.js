import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const RecruitmentS4 = () => {
  // TODO: Constantize text
  return (
    <div className="px-auto mx-auto flex max-w-[90%]  flex-wrap justify-around text-center md:max-w-[60%]">
      <h1 className="py-auto my-auto text-center text-2xl text-[#3A3A3A]">
        Follow us on social media for the latest updates:{" "}
      </h1>
      <a
        className="pt:2 text-lime-500 underline md:pt-0"
        href="https://www.instagram.com/ubcagrobots"
        target="_blank" rel="noreferrer"
      >
        <FaInstagram size={40} />
      </a>{" "}
      <a
        className="pt:2 text-lime-500 underline md:pt-0"
        href="https://www.linkedin.com/company/ubc-agrobot"
        target="_blank" rel="noreferrer"
      >
        <FaLinkedin size={40} />
      </a>
    </div>
  );
};
export default RecruitmentS4;
