import { HomeBanner, OurMission, HomeProjects } from '../components'
import React, { useEffect } from 'react'

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
  )
}

export default Home
