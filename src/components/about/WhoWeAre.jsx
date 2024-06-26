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
		<div ref={containerRef} className="py-[5vh] w-full bg-[#CDFF70] flex justify-between items-start pt-[30vh]">
			<div className='ml-[5%] w-[50%]'>
				<h1 className="text-[#2E1B0F] bg-[#FFFFFFD0] inline-block p-2 px-6 font-bold text-[28px] rounded-full mb-4 shadow-xl">WHO WE ARE</h1>
				<p className="text-[#2E1B0F] bg-[#FFFFFFD0] inline-block p-4 px-6 text-[24px] rounded-[36px]">
					Agrobot is a bunch of goofballs and fuzzy cats that masquerade in
					the daytime as engineering students and cs students. Agrobot is a
					bunch of goofballs and fuzzy cats that masquerade in the daytime as
					engineering students and cs students.Agrobot is a bunch of goofballs
					and fuzzy cats that masquerade in the daytime as engineering
					students and cs students.Agrobot is a
				</p>
			</div>
			<img className='w-[40%] max-h-[680px] bg-[#2E1B0F] cover' src={forest}
				style={{ marginTop: offsetY }}
			/>
		</div>
	)
}

export default WhoWeAre