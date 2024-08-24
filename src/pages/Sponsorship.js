import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

import { ieee, fcc, ece, chbe, lfs, gage } from "../assets";

function SponsorTier({ title, emoji, price, bullets }) {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div className="mb-4 flex w-[312px] flex-col items-center rounded-[46px] bg-[#2E1B0F] pb-6 pt-4 lg:mb-0">
			<div className="flex h-[128px] w-[286px] items-center justify-center rounded-[46px] bg-[#1F5200] lg:h-[250px]">
				<p className="text-[64px] lg:text-[128px]">{emoji}</p>
			</div>
			<h3 className="py-4 text-[32px] font-medium text-[#78BE20]">{price}</h3>
			<h3 className="text-[32px] font-medium text-white">{title}</h3>
			<ul className="w-[70%] list-disc py-4 text-[24px] text-white">
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
			<div className="mx-auto mt-mobile-standard w-mobile-content lg:mt-standard lg:w-content">
				<div className="min-h-screen pb-24">
					<h1 className="text-mobile-header font-bold lg:text-header">Sponsor UBC Agrobot</h1>
					<p className="w-[100%] pt-5 text-mobile-body font-medium lg:text-body">Sponsors are the lifeline of our UBC Agrobot Engineering Team. To help us build the future of agriculture, partner with our team to share ideas, or mentor our members, send us an email at <a href="mailto:ubcagrobot@gmail.com"><u>ubcagrobot@gmail.com</u></a>.
						</p>
					<h2 className="pt-16 text-mobile-body font-bold lg:text-body">Sponsorship tiers</h2>
					<div className="flex flex-col justify-between pt-12 lg:flex-row">
						<SponsorTier title="Seedling" emoji="🌱" price="$100+" bullets={["Logo on our website", "Logo on AgroBot marketing / social media"]} />
						<SponsorTier title="Blossoming" emoji="🪴" price="$500+" bullets={["Logo on our website", "Logo on AgroBot marketing / social media", "Logo on Team Merch", "Workspace Tour"]} />
						<SponsorTier title="Full Bloom" emoji="🌳" price="$1000+" bullets={["Logo on our website", "Logo on AgroBot marketing / social media", "Logo on Team Merch", "Workspace Tour", "Company logo on robot"]} />
					</div>
				</div>
			</div>
			<div className='after:content[""] after:dark:from-brand-dark after:from-background before:content[""] before:dark:from-brand-dark before:from-background flex w-full overflow-hidden bg-glass before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-20 before:bg-gradient-to-r after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-20 after:bg-gradient-to-l md:w-full'>
				{[...Array(2)].map((arr, i) => (
					<div key={i} className='animate-slide flex flex-nowrap'>
						{items.map((item, i) => (
							<div key={item.alt} className='relative m-5 flex w-[175px] shrink-0 items-center'>
								<img src={item.image} alt={item.alt} className="w-[100px] max-w-none object-contain filter" />
							</div>
						))}
					</div>
				))}
			</div>
			<div className="mx-auto my-24 flex w-[280px] flex-col items-center justify-center rounded-[46px] bg-[#2E1B0F] p-8 lg:w-[750px]">
				<p className=" pb-2 text-center text-[18px] font-medium text-white lg:pb-6 lg:text-body">We would love to have you join the team!</p>
				<a href="mailto:ubcagrobot@gmail.com" className="cursor-pointer text-center text-[30px] font-bold text-[#78be20] lg:text-header">Sponsor us <FaArrowRight className="inline" color="#78be20" /></a>
			</div>
		</>
	);
};

export default Sponsorship;
