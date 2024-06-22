import React from "react";
import { useSpring, animated } from 'react-spring';
import { useState, useEffect, useRef } from 'react'

function Project() {
	const bottomTriggerRef = useRef(null)

	function useFadeIn(bottomTriggerRef) {
		const [isVisible, setIsVisible] = useState(false);

		useEffect(() => {

			const handleScroll = () => {
				const scrollY = window.scrollY;
				const fadeInPoint = window.innerHeight * 1.75;

				// As soon as bottom trigger make set to true
				const bottomTriggerInView = bottomTriggerRef.current &&
											bottomTriggerRef.current.getBoundingClientRect().top < window.innerHeight;

				if (scrollY > fadeInPoint && !bottomTriggerInView) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			};

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}, []);

		return useSpring({
			opacity: isVisible ? 1 : 0,
			config: { duration: 250 }
		});
	};

	return (
		<>
			<div className="w-full h-[250vh] flex px-[10%] items-start justify-between">
				<animated.div style={useFadeIn(bottomTriggerRef)} className="w-full h-[50vh] bg-purple-400 sticky top-[25vh]">AgroBot</animated.div>
				<div className="w-full h-[50vh] bg-green-400 relative top-[100vh]">CAD MODEL</div>
			</div>
			<div ref={bottomTriggerRef} className="bg-red-500 h-[10vh]">TRIGGER</div>
		</>
	)
}

function HomeProjects() {

	return (
		<>
			<Project />
			<Project />
			<Project />
		</>
	)
}

export default HomeProjects