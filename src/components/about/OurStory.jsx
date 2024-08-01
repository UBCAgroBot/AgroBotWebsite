import React from "react";
import forest from '../../assets/image/caleb-george.jpg'

function OurStory() {

	return (
		<div className="min-h-[100vh] bg-[#CDFF70] mt-32 relative">
			<div className='w-[45%] pl-32 pt-16'>
				<h3 className="text-[48px] font-bold pb-8">The story of <br /> UBC Agrobot</h3>
				<p className=" text-[32px]">
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.
				</p>
			</div>
			<div className=" w-[40%] h-[800px] absolute right-0 top-0 bg-cover bg-left-top" style={{backgroundImage: `url(${forest})`}}></div>
		</div>
	)
}

export default OurStory