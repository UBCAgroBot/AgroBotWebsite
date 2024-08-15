import React from "react";
import { useSpring, animated } from "react-spring";
import { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Agrobotmd } from "../projects/utils/Agrobotmd";
import AgroponicView from "../projects/agroponics/AgroponicView";
import AgropickerView from "../projects/agropicker/AgropickerView";
import { AgrobotModel2D, AgroArm2DModel, AgroponicModel2D } from "../../assets";
import { useMediaQuery } from "react-responsive";

const AgrobotMod = <Agrobotmd />
const AgroponicMod = <AgroponicView />
const AgropickerMod = <AgropickerView />

function Project({ ProjectName, Text, background, ModelComponent, MobileImg, isMobile }) {
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
			className="w-full h-[250vh] flex px-[5%] items-start justify-between"
			style={background}
		>
			<animated.div
				style={useFadeIn(containerRef)}
				className="w-[47.5%] sticky top-[20vh]"
			>
				<div className="w-full h-full bg-glass rounded-[46px] p-8 shadow-sm">
					<h2 className="text-mobile-header lg:text-header font-bold mb-4">{ProjectName}</h2>
					<p className="text-mobile-body">{Text}</p>
					<button className="px-4 py-2 mt-4 bg-[#2E1B0F] font-medium text-[24px] rounded-full text-white">Learn More</button>
				</div>
			</animated.div>
			{!isMobile &&
				<div className="w-[47.5%] h-[50vh] bg-[#2E1B0F] relative top-[100vh] rounded-lg">
					{ModelComponent}
				</div>
			}
			{isMobile &&
				<div className="w-[47.5%] h-[50vh] bg-[#2E1B0F] relative top-[100vh] rounded-lg">
					<img src={MobileImg}></img>
				</div>
			}
		</div>
	);
}

function HomeProjects() {

	// const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
	const isMobile = true;

	const projects = [
		{
			ProjectName: "AgroBot",
			Text: "An autonomous robot utilizing AI and machine learning for precise intra-row weeding and data collection. It identifies and eliminates weeds without harming crops, reducing the need for chemical pesticides. Additionally, the robot collects data on crop health to help farmers make better, more informed decisions.",
			ModelComponent: AgrobotMod,
			MobileImg: AgrobotModel2D,
		},
		{
			ProjectName: "AgroPonics",
			Text: "An NFT (Nutrient Film Technique) hydroponic system focused on data collection, environmental control, and automation to optimize the nutrients and growing conditions of staple foods. Through a series of meticulously designed experiments, it aims to discover the most efficient environmental settings for growing a variety of crops.",
			ModelComponent: AgroponicMod,
			MobileImg: AgroponicModel2D,
			background: { background: "linear-gradient(to bottom, #CDFF70, #78BE20)" },
		},
		{
			ProjectName: "AgroPicker",
			Text: "An autonomous robotic arm capable of detecting fruits, assessing their ripeness, and harvesting them efficiently. The robotic arm will be attached to a mobile robot intended for on-field navigation. This system aims to improve the efficiency and accuracy of fruit harvesting, reduce labor costs, and minimize fruit damage. ",
			ModelComponent: AgropickerMod,
			MobileImg: AgroArm2DModel,
			background: { background: "#78BE20" },
		},
	]

	if (!isMobile) {
		return (
			<div className="bg-[#CDFF70]">
				{projects.map((proj) => (
					<Project
						ProjectName={proj.ProjectName}
						Text={proj.Text}
						ModelComponent={proj.ModelComponent}
						MobileImg={proj.MobileImg}
						background={proj.background}
					/>
				))}
			</div>
		);
	}
	else {
		return (
			<>Mobile Projects</>
		)
	}
}

export default HomeProjects;
