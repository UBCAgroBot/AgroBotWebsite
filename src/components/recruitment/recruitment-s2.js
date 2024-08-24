import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

import {
  INFOCARD_1_TEXT,
  INFOCARD_2_TEXT,
  INFOCARD_3_TEXT,
  WHO_WE_ARE_TEXT,
  LEARN_MORE_LINK,
  LEARN_MORE_LINK_TEXT
} from "../../constant/recruitment";
import { ConcentricOctagons, TeamDiscussion } from "../../assets";

const RecruitmentS2 = () => {
  return (
    <div className="mx-auto mt-12 p-6 text-center">
      <div
        className="grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1"
        style={{
          backgroundImage: `url(${ConcentricOctagons})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
          // backgroundSize: '80%',
        }}
      >
        <div className="row md:col">
          <h1 className="mb-[2%] ml-12 text-left text-4xl text-[#3A3A3A] md:ml-24">
            Who we are
          </h1>
          <ExpandedInfoCard
            descriptionText={WHO_WE_ARE_TEXT}
          ></ExpandedInfoCard>
        </div>
        <div className="row md:col">
          <h1 className="mb-[2%] ml-12 text-left text-4xl text-[#3A3A3A] md:ml-24">
            Whom we're looking for
          </h1>
          <InfoCard descriptionText={INFOCARD_1_TEXT}></InfoCard>
          <InfoCard descriptionText={INFOCARD_2_TEXT}></InfoCard>
          <InfoCard descriptionText={INFOCARD_3_TEXT}></InfoCard>
        </div>
      </div>
    </div>
  );
};

const shadowStyle = {
  boxShadow: "rgba(0, 0, 0, 0.5) -10px 10px 1px",
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.5) -20px 20px 10px"
  }
};

function InfoCard(props) {
  const { titleText, descriptionText } = props;
  return (
    <div
      className="duration-2000 mx-auto my-7 max-w-[500px] rounded-lg border border-black bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
      style={shadowStyle}
    >
      <h2 className="mb-2 text-xl font-bold">{titleText}</h2>
      <p>{descriptionText}</p>
    </div>
  );
}

function ExpandedInfoCard(props) {
  const { titleText, descriptionText, linkText, image } = props;
  return (
    <div
      className="duration-2000 mx-auto my-5 max-w-[500px] rounded-lg border bg-gray-700 transition-shadow"
      style={shadowStyle}
    >
      <div className="p-4">
        <h2 className="text-white-500 mb-2 text-xl font-bold">{titleText}</h2>
        <p className="mb-3 text-white">{descriptionText}</p>
        <a
          href={LEARN_MORE_LINK}
          className="mx-auto flex items-center justify-center text-center font-bold text-lime-600 underline"
        >
          {LEARN_MORE_LINK_TEXT} <HiArrowSmRight></HiArrowSmRight>
        </a>
      </div>
      <img src={TeamDiscussion} className="w-[100%]" />
    </div>
  );
}

export default RecruitmentS2;
