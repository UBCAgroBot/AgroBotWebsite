import React, { useEffect } from "react"

import { HomeBanner, OurMission, HomeProjects } from '../components';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
            <HomeBanner></HomeBanner>

            <OurMission></OurMission>
            
            <HomeProjects></HomeProjects>
        </>
    );
};

export default Home;
