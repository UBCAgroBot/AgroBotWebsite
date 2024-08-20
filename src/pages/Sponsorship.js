import React, { useState, useEffect } from "react";

import { ieee, fcc, ece, chbe, lfs, gage } from "../assets";
import { FaArrowRight } from "react-icons/fa6";

function SponsorTier({ title, emoji, price, bullets }) {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className="mb-4 lg:mb-0 w-[312px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-4 pb-6">
			<div className="w-[286px] h-[128px] lg:h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
				<p className="text-[64px] lg:text-[128px]">{emoji}</p>
			</div>
			<h3 className="font-medium text-[32px] text-[#78BE20] py-4">{price}</h3>
			<h3 className="font-medium text-[32px] text-white">{title}</h3>
			<ul className="text-white text-[24px] py-4 w-[70%] list-disc">
				{bullets.map((val, index) => (
					<li key={index}>{val}</li>
				))
				}
			</ul>
		</div>
	)
}

const Sponsorship = () => {

	const [leftOffset, setLeftOffset] = useState(0)

	const items = [
		{ image: ieee, alt: 'ieee' },
		{ image: fcc, alt: 'fcc' },
		{ image: ece, alt: 'ece' },
		{ image: chbe, alt: 'chbe' },
		{ image: lfs, alt: 'lfs' },
		{ image: gage, alt: 'gage' },
	];

	return (
		<>
			<div className="w-mobile-content mt-mobile-standard lg:mt-standard lg:w-content mx-auto">
				<div className="min-h-screen pb-24">
					<h1 className="text-mobile-header lg:text-header font-bold">Sponsor UBC Agrobot</h1>
					<p className="text-mobile-body lg:text-body font-medium w-[100%] pt-5">Sponsors are the lifeline of our UBC Agrobot Engineering Team. To help us build the future of agriculture, partner with our team to share ideas, or mentor our members, send us an email at <a href="mailto:ubcagrobot@gmail.com"><u>ubcagrobot@gmail.com</u></a>.
						</p>
					<h2 className="text-mobile-body lg:text-body font-bold pt-16">Sponsorship tiers</h2>
					<div className="flex-col lg:flex-row flex justify-between pt-12">
						<SponsorTier title="Seedling" emoji="🌱" price="$100+" bullets={["Logo on our website", "Logo on AgroBot marketing / social media"]} />
						<SponsorTier title="Blossoming" emoji="🪴" price="$500+" bullets={["Logo on our website", "Logo on AgroBot marketing / social media", "Logo on Team Merch", "Workspace Tour"]} />
						<SponsorTier title="Full Bloom" emoji="🌳" price="$1000+" bullets={["Logo on our website", "Logo on AgroBot marketing / social media", "Logo on Team Merch", "Workspace Tour", "Company logo on robot"]} />
					</div>
				</div>
			</div>
			<div className='bg-glass w-full md:w-full overflow-hidden flex after:content[""] after:dark:from-brand-dark after:from-background after:bg-gradient-to-l after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:absolute before:content[""] before:dark:from-brand-dark before:from-background before:bg-gradient-to-r before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute'>
				{[...Array(2)].map((arr, i) => (
					<div key={i} className='flex flex-nowrap animate-slide'>
						{items.map((item, i) => (
							<div key={item.alt} className='relative w-[175px] m-5 shrink-0 flex items-center'>
								<img src={item.image} alt={item.alt} className="object-contain max-w-none w-[100px] filter" />
							</div>
						))}
					</div>
				))}
			</div>
			<div className="mx-auto w-[280px] lg:w-[750px] bg-[#2E1B0F] rounded-[46px] flex flex-col justify-center items-center my-24 p-8">
				<p className=" text-white text-[18px] lg:text-body font-medium text-center pb-2 lg:pb-6">We would love to have you join the team!</p>
				<a href="mailto:ubcagrobot@gmail.com" className="text-center font-bold cursor-pointer text-[30px] lg:text-header text-[#78be20]">Sponsor us <FaArrowRight className="inline" color="#78be20" /></a>
			</div>
		</>
	);
};

export default Sponsorship;
