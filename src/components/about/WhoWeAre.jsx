import React, { useEffect, useState, useRef } from "react";
import forest from '../../assets/image/caleb-george.jpg'

function WhoWeAre() {
	const containerRef = useRef(null)
	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {

			// If container is in view:
			if (containerRef.current.getBoundingClientRect().top > 0 ||
				containerRef.current.getBoundingClientRect().bottom > 0) {
				// Set offset to offset of top of component
				setOffsetY(containerRef.current.getBoundingClientRect().top * 0.5)
			}
		};

		// Listen for scroll events
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => window.removeEventListener('scroll', handleScroll);
	}, [containerRef]);

	return (
		<div ref={containerRef} className="min-h-[100vh] bg-[#CDFF70] pt-[30vh] pl-16 flex justify-between">
			<div className='w-[45%] mr-[5%]'>
				<h3 className="text-[48px] text-[#2E1B0F] font-bold pb-8">WHO WE ARE</h3>
				<p className=" text-[40px]">
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students. Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.Agrobot is a bunch of goofballs and fuzzy cats that masquerade in the daytime as engineering students and cs students.Agrobot is a
				</p>
			</div>
			<img className='w-[45%] cover' src={forest}/>
		</div>
	)
}

export default WhoWeAre