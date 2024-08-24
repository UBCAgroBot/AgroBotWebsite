import React from "react";

import DF from '../../assets/image/daniel-faziojpg.jpg'
import GC from '../../assets/image/gaetano-cessati.jpg'

function OurStory() {

	return (
		<div className="mt-32 flex max-w-full items-stretch overflow-x-hidden lg:mt-48">
 			<div className="relative hidden flex-grow lg:block">
 				<img src={GC} alt="green pasture" className="absolute right-12 top-[-0px] h-96 object-cover" />
			</div>
			<div className="relative mx-auto w-[280px] bg-[#CDFF70] text-[20px] lg:w-[1000px] lg:text-[24px]">
				<div className='lg:w-[100%]'>
					<h3 className="pb-4 text-mobile-header font-bold lg:text-header">Our Story</h3>
					<p className="">
						Our journey began in 2017 as a skunk works project within another design team, driven by a passion for innovation in agriculture.

						What started as a small, dedicated group has now blossomed into a team of over 80 talented members, all united by a shared vision of revolutionizing the agricultural industry through cutting-edge technology. At UBC Agrobot, we believe in the power of collaboration, creativity, curiosity, integrity, and a relentless pursuit of excellence.

						Our journey from a small project to a multi-faceted team has been fueled by our dedication to transforming agriculture for a better, more sustainable future. Join us as we continue to innovate and lead the way in agricultural technology!

					</p>
					<h3 className="pb-4 pt-8 text-mobile-header font-bold lg:text-header">Our Vision</h3>
					<p className="">
						We envision an agricultural industry where innovation drives both technology and people, making sustainable practices the standard for all.
					</p>
					<h3 className="pb-4 pt-8 text-mobile-header font-bold lg:text-header">Our Mission</h3>
					<p className="">
						Our mission is to engineer a sustainable future for agriculture through innovation, creativity, and technology.
						<br />
						<br />
						We aim to cultivate an environment for driven individuals to <strong>plant</strong> seeds of challenge, <strong>grow</strong> ideas into solutions, and <strong>bloom</strong> into action to <strong>harvest</strong> the change we want to see in the world.
					</p>
				</div>
			</div>
			<div className="relative hidden flex-grow lg:block">
				<img src={DF} className="absolute bottom-0 left-12 h-96 object-cover" />
			</div>
		</div>
	)
}

export default OurStory
