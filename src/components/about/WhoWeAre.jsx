import React from "react";
import farm from '../../assets/image/matt-benson.jpg'

function WhoWeAre() {

	return (
		<div className="bg-[#CDFF70] py-64 flex relative">
			<div className='w-[50%] ml-[33%] pl-32 text-[#2E1B0F]'>
				<h3 className="text-[96px] font-bold pb-8">What makes a good AgroBotee?</h3>
				<p className=" text-[40px] ">
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.
				</p>
			</div>
			<div className=" w-[33%] h-[800px] absolute left-0 top-0 mt-64 bg-cover bg-left-top" style={{backgroundImage: `url(${farm})`}}></div>
		</div>
	)
}

export default WhoWeAre