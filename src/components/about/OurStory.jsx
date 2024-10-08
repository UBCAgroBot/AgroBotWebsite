import React from 'react'
import DF from '../../assets/image/daniel-faziojpg.jpg'
import GC from '../../assets/image/gaetano-cessati.jpg'

function OurStory() {
  return (
    <div className="flex mt-32 lg:mt-48 items-stretch max-w-full overflow-x-hidden">
      <div className="hidden lg:block flex-grow relative">
        <img
          src={GC}
          alt="green pasture"
          className="absolute top-[-0px] right-12 h-96 object-cover"
        />
      </div>
      <div className="w-[280px] lg:w-[1000px] mx-auto bg-[#CDFF70] text-[20px] lg:text-[24px] relative">
        <div className="lg:w-[100%]">
          <h3 className="text-mobile-header lg:text-header font-bold pb-4">
            Our Story
          </h3>
          <p className="">
            Our journey began in 2017 as a skunk works project within another
            design team, driven by a passion for innovation in agriculture. What
            started as a small, dedicated group has now blossomed into a team of
            over 80 talented members, all united by a shared vision of
            revolutionizing the agricultural industry through cutting-edge
            technology. At UBC Agrobot, we believe in the power of
            collaboration, creativity, curiosity, integrity, and a relentless
            pursuit of excellence. Our journey from a small project to a
            multi-faceted team has been fueled by our dedication to transforming
            agriculture for a better, more sustainable future. Join us as we
            continue to innovate and lead the way in agricultural technology!
          </p>
          <h3 className="text-mobile-header lg:text-header font-bold pt-8 pb-4">
            Our Vision
          </h3>
          <p className="">
            We envision an agricultural industry where innovation drives both
            technology and people, making sustainable practices the standard for
            all.
          </p>
          <h3 className="text-mobile-header lg:text-header font-bold pt-8 pb-4">
            Our Mission
          </h3>
          <p className="">
            Our mission is to engineer a sustainable future for agriculture
            through innovation, creativity, and technology.
            <br />
            <br />
            We aim to cultivate an environment for driven individuals to{' '}
            <strong>plant</strong> seeds of challenge, <strong>grow</strong>{' '}
            ideas into solutions, and <strong>bloom</strong> into action to{' '}
            <strong>harvest</strong> the change we want to see in the world.
          </p>
        </div>
      </div>
      <div className="hidden lg:block flex-grow relative">
        <img src={DF} className="absolute bottom-0 left-12 h-96 object-cover" />
      </div>
    </div>
  )
}

export default OurStory
