import React from "react";
import { TitleBanner, InfoParagraph, StatsBar, PortfolioImageGallery, PortfolioProjects, Publications, HomeProjects} from "../components";
import { GroupWork } from "../assets"; 
import Divider from "../components/common/Divider";

function Projects() {
    return (
        <div className="!bg-gradient-to-b from-[#F8F7F1]  via-[#F8F7F1] to-lime-500 w-auto">
           <HomeProjects></HomeProjects>
           <Divider></Divider>
           <InfoParagraph title="Hello" text="Lorem Ipsum AgroBot Very good"></InfoParagraph>
           <StatsBar></StatsBar>
           <Divider></Divider>
           {/* <Publications></Publications> */}
           {/* <Divider></Divider> */}
           <PortfolioImageGallery></PortfolioImageGallery>
        </div>
    );
};

export default Projects;