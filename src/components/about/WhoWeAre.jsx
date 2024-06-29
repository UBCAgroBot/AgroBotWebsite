import React, { useEffect, useState, useRef } from "react";
import forest from '../../assets/image/caleb-george.jpg'

function WhoWeAre() {
	const containerRef = useRef(null)
	const [offsetY, setOffsetY] = useState();

	useEffect(() => {
		const handleScroll = () => {

			// If container is in view:
			if (containerRef.current.getBoundingClientRect().top > 0 ||
				containerRef.current.getBoundingClientRect().bottom > 0) {
				// Set offset to offset of top of component
				setOffsetY(containerRef.current.getBoundingClientRect().top * 0.25)
			}
		};

		// Listen for scroll events
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => window.removeEventListener('scroll', handleScroll);
	}, [containerRef]);

	return (
		<div ref={containerRef} className="pb-[20vh] w-full bg-[#CDFF70] flex justify-between items-center">
			<div className='w-[55%] flex flex-col justify-center items-center'>
				<div className="w-[60%]">
					<h1 className="text-[#2E1B0F] bg-[#FFFFFF00] inline-block font-bold text-[48px] mb-4">
						Who we are
					</h1>
					<p className="text-black text-[22px] leading-6 rounded-[36px]">
						Agrobot is a bunch of goofballs and fuzzy cats that masquerade
						in the daytime as engineering students and cs students. Agrobot
						is a bunch of goofballs and fuzzy cats that masquerade in the
						daytime as engineering students and cs students.
					</p>
				</div>
			</div>
			<img className='w-[45%] bg-[#2E1B0F] cover' src={forest}
				style={{ marginTop: offsetY }}
			/>
		</div>
	)
}

export default WhoWeAre