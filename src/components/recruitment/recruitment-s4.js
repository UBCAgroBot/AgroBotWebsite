import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const RecruitmentS4 = () => {
  // TODO: Constantize text
  return (
    <div className="text-center mx-auto px-auto max-w-[90%]  md:max-w-[60%] flex flex-wrap justify-around">
      <h1 className="text-2xl my-auto py-auto text-[#3A3A3A] text-center">
        Follow us on social media for the latest updates:{" "}
      </h1>
      <a
        className="text-lime-500 underline pt:2 md:pt-0"
        href="https://www.instagram.com/ubcagrobots"
        target="_blank"
      >
        <FaInstagram size={40} />
      </a>{" "}
      <a
        className="text-lime-500 underline pt:2 md:pt-0"
        href="https://www.linkedin.com/company/ubc-agrobot"
        target="_blank"
      >
        <FaLinkedin size={40} />
      </a>
    </div>
  );
};
export default RecruitmentS4;
