import React from "react";
import { MdChevronRight } from "react-icons/md";

import {
  RECRUITMENT_INFO_PARAGRAPH,
  APPLICATION_LINK,
  APPLICATION_LINK_TEXT,
} from "../../constant/recruitment";

function RecruitmentS1() {
  return (
    <div className="mx-auto mt-8 max-w-[90%] text-center md:max-w-[70%]">
      {RECRUITMENT_INFO_PARAGRAPH.split("<br />").map((paragraph) => (
        <p className="mt-4">{paragraph}</p>
      ))}
      <button
        className="mx-auto my-4 flex items-center justify-center rounded-[14px] bg-[#88BE22] px-4 py-2 font-bold text-white transition-all duration-300 hover:bg-green-500"
        onClick={() => window.open(APPLICATION_LINK, "_blank")}
      >
        {APPLICATION_LINK_TEXT} <MdChevronRight />
      </button>
    </div>
  );
}

export default RecruitmentS1;
