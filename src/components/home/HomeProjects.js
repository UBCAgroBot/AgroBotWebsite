import React from "react";
import { useSpring, animated } from "react-spring";
import { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Agrobotmd } from "../projects/utils/Agrobotmd";
import AgroponicView from "../projects/agroponics/AgroponicView";
import AgropickerView from "../projects/agropicker/AgropickerView";

const AgrobotMod = <Agrobotmd />;
const AgroponicMod = <AgroponicView />;
const AgropickerMod = <AgropickerView />

function Project({ ProjectName, background, ModelComponent }) {
	const containerRef = useRef(null);

	function useFadeIn(containerRef) {
		const [isVisible, setIsVisible] = useState(false);

		useEffect(() => {
			const handleScroll = () => {
				const height = window.innerHeight;
				const containerTop = containerRef.current.getBoundingClientRect().top;
				const containerBottom =
					containerRef.current.getBoundingClientRect().bottom;

				if (containerTop < 200 && containerBottom > height + 200) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			};

			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}, [containerRef]);

		return useSpring({
			opacity: isVisible ? 1 : 0,
			config: { duration: 200 },
		});
	}

	return (
		<div
			ref={containerRef}
			className="w-full h-[250vh] flex px-[10%] items-start justify-between"
			style={background}
		>
			<animated.div
				style={useFadeIn(containerRef)}
				className="w-[40%] sticky top-[25vh]"
			>
				<div className="w-full h-full bg-glass rounded-[46px] p-8 shadow-sm">
					<h2 className="text-[48px] font-bold mb-4">{ProjectName}</h2>
					<p className="text-[24px]">The University of British Columbia (UBC) is a public research
              university with campuses near Vancouver and Okanagan in British
              Columbia, Canada. Established in 1908.
			  </p>
			  <button className="px-4 py-2 mt-4 bg-[#2E1B0F] font-medium text-[24px] rounded-full text-white">Learn More</button>
				</div>
			</animated.div>
			<div className="w-[47.5%] h-[50vh] bg-[#2E1B0F] relative top-[100vh] rounded-lg">
				{ModelComponent}
			</div>
		</div>
	);
}

function HomeProjects() {
	return (
		<div className="bg-[#CDFF70]">
			<Project ProjectName="AgroBot" ModelComponent={AgrobotMod} />
			<Project
				ProjectName="AgroPonics "
				ModelComponent={AgroponicMod}
				background={{
					background: "linear-gradient(to bottom, #CDFF70, #78BE20)",
				}}
			/>
			<Project
				ProjectName="AgroPicker "
				ModelComponent={AgropickerMod}
				background={{ background: "#78BE20" }}
			/>
		</div>
	);
}

export default HomeProjects;
