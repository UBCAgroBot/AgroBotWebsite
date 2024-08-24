import React, { useEffect } from "react";
import WhoWeAre from '../components/about/WhoWeAre'
import OurStory from '../components/about/OurStory'
import News from '../components/about/News'
import Testimonials from "../components/about/Testimonials";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
