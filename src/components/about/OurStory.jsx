import React from "react";
import forest from '../../assets/image/caleb-george.jpg'

function OurStory() {

	return (
		<div className="w-[300px] pt-32 lg:pt-48 lg:w-full lg:pl-32 lg:min-h-[948px] mx-auto bg-[#CDFF70] text-mobile-body lg:text-body relative">
			<div className='lg:w-[50%]'>
				<h3 className="text-mobile-header lg:text-header font-bold pb-8">Our Story</h3>
				<p className="">
					Our journey began in 2017 as a skunk works project within another design team, driven by a passion for innovation in agriculture.

					What started as a small, dedicated group has now blossomed into a team of over 80 talented members, all united by a shared vision of revolutionizing the agricultural industry through cutting-edge technology. At UBC Agrobot, we believe in the power of collaboration, creativity, curiosity, integrity, and a relentless pursuit of excellence.

					Our journey from a small project to a multi-faceted team has been fueled by our dedication to transforming agriculture for a better, more sustainable future. Join us as we continue to innovate and lead the way in agricultural technology!

				</p>
			</div>
			<div className="hidden lg:block w-[40%] h-[800px] absolute right-0 top-32 bg-cover bg-left-top"></div>
		</div>
	)
}

export default OurStory