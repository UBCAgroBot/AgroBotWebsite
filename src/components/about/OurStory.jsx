import React from "react";
import forest from '../../assets/image/caleb-george.jpg'

function OurStory() {

	return (
		<div className="min-h-[100vh] bg-[#CDFF70] pt-64 pb-24 flex items-end relative">
			<div className='w-[45%] pl-32 text-[#2E1B0F]'>
				<h3 className="text-[96px] font-bold pb-8">The story <br /> of UBC Agrobot</h3>
				<p className=" text-[40px] ">
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.
				</p>
			</div>
			<div className=" w-[40%] h-[100vh] absolute right-0 top-0 mt-64 bg-cover bg-left-top" style={{backgroundImage: `url(${forest})`}}></div>
		</div>
	)
}

export default OurStory