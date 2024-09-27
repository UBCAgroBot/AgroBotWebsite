import React from "react";
import WhoWeAre from './WhoWeAre'
import OurStory from './OurStory'
import News from './News'
import Testimonials from "./Testimonials";

function AboutUs() {
    return (
        <div className="bg-[#CDFF70]">
            <OurStory />
            <Testimonials />
            <WhoWeAre />
            <News />
        </div>
    );
};

export default AboutUs;
