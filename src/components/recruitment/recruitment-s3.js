import React from "react";
import { timelineData } from "../../constant/recruitment";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import useMediaQuery from "@mui/material/useMediaQuery";

const RecruitmentS3 = () => {
  return (
    <div className="mt-12 text-center mx-auto p-6">
      <div class="col">
        <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
          Recruitment Timeline
        </h1>
        <RecruitmentTimeline></RecruitmentTimeline>
      </div>
    </div>
  );
};

// TODO: Make timeline responsive
function RecruitmentTimeline() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Timeline
      className={`md:mx-12 ${isMobile ? "!ml-[-70%]" : ""}`}
      position={isMobile ? "right" : "alternate"}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      {timelineData.map((timelineItem, index) => (
        <TimelineItem>
          {isMobile ? (
            <></>
          ) : (
            <TimelineOppositeContent>
              <h6 className="mt-2 font-bold text-green-500">
                {timelineItem.date}
              </h6>
            </TimelineOppositeContent>
          )}

          <TimelineSeparator>
            <TimelineDot className="p-0">
              <div className="h-6 w-6 bg-green-500 rounded-full"></div>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <div className="h-[130px]"></div>
          <TimelineContent>
            <div
              className={`flex  ${
                index % 2 != 0 || isMobile ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`mt-3 w-0 h-0 
  border-t-[8px] border-t-transparent
  ${
    index % 2 != 0 || isMobile
      ? "border-r-[7px] border-r-green-500"
      : "border-l-[7px] border-l-green-500"
  }
  border-b-[8px] border-b-transparent`}
              ></div>
              <div class="bg-green-500 rounded w-full">
                <div
                  className={`bg-white rounded p-5 shadow-lg ${
                    index % 2 != 0 || isMobile ? "ml-[3px]" : "mr-[3px]"
                  }`}
                >
                  {isMobile ? (
                    <h6 className="font-bold text-gray-600">
                      {timelineItem.date}
                    </h6>
                  ) : (
                    <></>
                  )}
                  <h6 className="text-lg text-green-500">
                    {timelineItem.title}
                  </h6>
                  <p>{timelineItem.description}</p>
                </div>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default RecruitmentS3;
