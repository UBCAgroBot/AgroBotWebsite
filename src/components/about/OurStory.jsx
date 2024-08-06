import React from "react";
import forest from '../../assets/image/caleb-george.jpg'

function OurStory() {

	return (
		<div className="w-[300px] pt-32 lg:pt-48 lg:w-[1000px] lg:min-h-[948px] mx-auto bg-[#CDFF70]">
			<div className='lg:w-[50%]'>
				<h3 className="text-[40px] lg:text-[48px] font-bold pb-8">The story of UBC Agrobot</h3>
				<p className="text-[24px] lg:text-[32px]">
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.
				</p>
			</div>
			<div className="hidden lg:block w-[40%] h-[800px] absolute right-0 top-32 bg-cover bg-left-top" style={{backgroundImage: `url(${forest})`}}></div>
		</div>
	)
}

export default OurStory