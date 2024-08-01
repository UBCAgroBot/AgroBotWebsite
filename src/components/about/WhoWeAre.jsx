import React from "react";
import farm from '../../assets/image/matt-benson.jpg'

function WhoWeAre() {

	return (
		<div className="bg-[#CDFF70] py-32 flex relative">
			<div className='w-[50%] mt-16 ml-[33%] pl-32'>
				<h3 className="text-[48px] font-bold pb-8">What makes a good AgroBotee?</h3>
				<p className=" text-[32px] ">
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.

				</p>
			</div>
			<div className=" w-[33%] h-[600px] absolute left-0 top-0 mt-32 bg-cover bg-left-top" style={{backgroundImage: `url(${farm})`}}></div>
		</div>
	)
}

export default WhoWeAre