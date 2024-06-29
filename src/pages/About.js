import React from "react";
import WhoWeAre from '../components/about/WhoWeAre'
import OurStory from '../components/about/OurStory'
import News from '../components/about/News'
import Testimonials from "../components/about/Testimonials";

function AboutUs() {
    return (
        <>
            <WhoWeAre />
            <OurStory />
            <News />
            <Testimonials />
        </>
    );
};

export default AboutUs;