import React, { useEffect, useState, useRef } from "react";
import farm from '../../assets/image/matt-benson.jpg'

function OurStory() {
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
        <div ref={containerRef} className="py-[20vh] w-full bg-[#CDFF70] flex justify-between items-center">
            <img className='w-[40%] h-[500px] bg-[#2E1B0F]' src={farm}
                style={{ marginTop: offsetY }}
            />
            <div className='mr-[5%] w-[50%] text-right'>
                <h1 className="text-[#2E1B0F] bg-[#FFFFFFD0] inline-block p-2 px-6 font-bold text-[28px] rounded-full mb-4 shadow-xl">WHO WE ARE</h1>
                <p className="text-[#2E1B0F] bg-[#FFFFFFD0] inline-block p-4 px-6 text-[24px] rounded-[36px] text-left">
                    Agrobot is a bunch of goofballs and fuzzy cats that masquerade in
                    the daytime as engineering students and cs students. Agrobot is a
                    bunch of goofballs and fuzzy cats that masquerade in the daytime as
                    engineering students and cs students.Agrobot is a bunch of goofballs
                    and fuzzy cats that masquerade in the daytime as engineering
                    students and cs students.Agrobot is a
                </p>
            </div>
        </div>
    )
}

export default OurStory