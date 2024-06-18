import React from "react";
import { TitleBanner, PortfolioS1, StatsBar } from "../components";
import { RecruitmentImage } from "../assets";
import NotificationBanner from "../components/common/NotificationBanner";
import {
  LEARN_MORE_LINK,
  NON_UBC_DESCRIPTION,
  NON_UBC_TITLE,
  RECRUITMENT_STATUS_DESCRIPTION,
  RECRUITMENT_STATUS_TITLE,
  subTeamDiscriptions,
} from "../constant/recruitment";
import RecruitmentS1 from "../components/recruitment/recruitment-s1";
import RecruitmentS2 from "../components/recruitment/recruitment-s2";
import RecruitmentS3 from "../components/recruitment/recruitment-s3";
import RecruitmentS4 from "../components/recruitment/recruitment-s4";
import RecruitmentS5 from "../components/recruitment/recruitment-s5";

function Recruitment() {
  return (
    <div className="bg-[#F8F7F1] w-screen">
      <TitleBanner
        toColor="#5d3c3a"
        fromColor="#9da28d"
        imageSrc={RecruitmentImage}
        imageClassName="absolute right-0 bottom-0 w-4/12"
      >
        Recruitment
      </TitleBanner>
      <div className="md:max-w-[90%] md:mx-auto">
        <NotificationBanner
          titleText={RECRUITMENT_STATUS_TITLE}
          descriptionText={RECRUITMENT_STATUS_DESCRIPTION}
          dismissable={true}
        ></NotificationBanner>
      </div>
      <RecruitmentS1></RecruitmentS1>
      <RecruitmentS2></RecruitmentS2>
      <RecruitmentS3></RecruitmentS3>
      <RecruitmentS4></RecruitmentS4>
      <RecruitmentS5
        title="Subteam Descriptions"
        subTeamDescriptions={subTeamDiscriptions.filter(
          (subTeam) => subTeam.technical === true
        )}
        id={LEARN_MORE_LINK.replace("#", "")}
      ></RecruitmentS5>
      <RecruitmentS5
        title="Interested in non-technical roles?"
        subTeamDescriptions={subTeamDiscriptions.filter(
          (subTeam) => subTeam.technical === false
        )}
      ></RecruitmentS5>
      {/* <NotificationBanner
        titleText={NON_UBC_TITLE}
        descriptionText={NON_UBC_DESCRIPTION}
        subtle={true}
        additionalClasses={"my-12"}
      ></NotificationBanner> */}
    </div>
  );
}

export default Recruitment;
