import React from "react";
import {
  RECRUITMENT_INFO_PARAGRAPH,
  APPLICATION_LINK,
  APPLICATION_LINK_TEXT,
} from "../../constant/recruitment";
import { MdChevronRight } from "react-icons/md";

function RecruitmentS1() {
  return (
    <div className="mt-8 mx-auto text-center md:max-w-[70%] max-w-[90%]">
      {RECRUITMENT_INFO_PARAGRAPH.split('<br />').map((paragraph) => <p className="mt-4">{paragraph}</p>)}
      <button
        className="mx-auto bg-[#88BE22] text-white px-4 py-2 rounded-[14px] flex items-center justify-center font-bold my-4 hover:bg-green-500 transition-all duration-300"
        onClick={() => window.open(APPLICATION_LINK, "_blank")}
      >
        {APPLICATION_LINK_TEXT} <MdChevronRight />
      </button>
    </div>
  );
}

export default RecruitmentS1;
