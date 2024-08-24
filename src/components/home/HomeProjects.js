import React from "react";
import { useSpring, animated } from "react-spring";
import { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';

import { AgrobotModelView, AgroponicModelView, AgroPickerModelView } from "../models";
import { AgrobotModel2D, AgroArm2DModel, AgroponicModel2D } from "../../assets";

const AgrobotMod = <AgrobotModelView
	id={"agrobotModelView"}
	gsapType={"agrobotModelGsap"}
	scale={[1, 1, 1]}
	cameraPosition={[0.5, 1, 1]}
	groupPosition={[0, 0, 0]}
	vectorPosition={[0, 0.3, 0]} />

const AgroponicMod = <AgroponicModelView
	id={"agroponicModelView"}
	gsapType={"agroponicModelGsap"}
	scale={[1, 1, 1]}
	cameraPosition={[0.5, 1, 1.6]}
	groupPosition={[0, 0, 0]}
	vectorPosition={[0, 0, 0]} />

const AgropickerMod = <AgroPickerModelView
	id={"agroPickerModelView"}
	gsapType={"agroPickerModelGsap"}
	scale={[3, 3, 3]}
	cameraPosition={[2, 1, -3.5]}
	groupPosition={[0, 0, 0]}
	vectorPosition={[0.2, 0.8, 0]} />

const projects = [
	{
		ProjectName: "AgroBot",
		Text: "An autonomous robot utilizing AI and machine learning for precise intra-row weeding and data collection. It identifies and eliminates weeds without harming crops, reducing the need for chemical pesticides. Additionally, the robot collects data on crop health to help farmers make better, more informed decisions.",
		ModelComponent: AgrobotMod,
		MobileImg: AgrobotModel2D,
		background: { background: "#cdff70" },
		href: "/agrobot",
	},
	{
		ProjectName: "AgroPonics",
		Text: "An NFT (Nutrient Film Technique) hydroponic system focused on data collection, environmental control, and automation to optimize the nutrients and growing conditions of staple foods. Through a series of meticulously designed experiments, it aims to discover the most efficient environmental settings for growing a variety of crops.",
		ModelComponent: AgroponicMod,
		MobileImg: AgroponicModel2D,
		background: { background: "#cdff70" },
		href: "/agroponics",
	},
	{
		ProjectName: "AgroPicker",
		Text: "An autonomous robotic arm capable of detecting fruits, assessing their ripeness, and harvesting them efficiently. The robotic arm will be attached to a mobile robot intended for on-field navigation. This system aims to improve the efficiency and accuracy of fruit harvesting, reduce labor costs, and minimize fruit damage. ",
		ModelComponent: AgropickerMod,
		MobileImg: AgroArm2DModel,
		background: { background: "#cdff70" },
	},
]

function Project({ ProjectName, Text, background, ModelComponent, href }) {
	const containerRef = useRef(null);

	function useFadeIn(containerRef) {
		const [isVisible, setIsVisible] = useState(false);

		useEffect(() => {
			const handleScroll = () => {
				const height = window.innerHeight;
				const containerTop = containerRef.current.getBoundingClientRect().top;
				const containerBottom =
					containerRef.current.getBoundingClientRect().bottom;

				// First number is how many pixels from the top of the screen this 
				// component should be before appearing
				// Second number is how many pixels from the bottom of the screen
				// this component should be before dissapearing
				if (containerTop < 400 && containerBottom > height -0) {
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
			className="flex h-[150vh] w-full items-start justify-between px-[5%]"
			style={background}
		>
			<animated.div
				style={useFadeIn(containerRef)}
				className="sticky top-[20vh] w-[47.5%]"
			>
				<div className="h-full w-full rounded-[46px] p-8">
					<h2 className="mb-4 text-mobile-header font-bold lg:text-header">{ProjectName}</h2>
					<p className="text-mobile-body">{Text}</p>
					<div className="mt-4">
						<Link to={href} className="rounded-full bg-[#2E1B0F] px-4 py-2 text-[24px] font-medium text-white">{href === "#" ? "Coming soon" : "Learn More"}</Link>
					</div>
				</div>
			</animated.div >
			<div className="relative top-[50vh] h-[50vh] w-[47.5%] rounded-full bg-[#2e1b0f1f]">
				{ModelComponent}
			</div>
		</div >
	);
}

function HomeProjects() {

	const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

	if (!isMobile) {
		return (
			<>
				{projects.map((proj, index) => (
					<Project
						ProjectName={proj.ProjectName}
						Text={proj.Text}
						ModelComponent={proj.ModelComponent}
						MobileImg={proj.MobileImg}
						background={proj.background}
						href={proj.href}
						key={index}
					/>
				))}
			</>
		);
	}
	else {
		return (
			<>
				{projects.map((proj, index) => (
					<div key={index} className="mx-auto my-16 w-[280px]">
						<h2 className="text-mobile-header font-semibold">{proj.ProjectName}</h2>
						<p className="mb-8 text-mobile-body">{proj.Text}</p>
						<img src={proj.MobileImg} className="w-[280px]" />
						<div className="mb-12 mt-8 flex items-center justify-center">
							<Link to={proj.href} className="rounded-full bg-[#2E1B0F] p-2 px-12 text-white" >{proj.href === "#" ? "Coming soon" : "Learn More"}</Link>
						</div>
					</div>
				))}
			</>
		)
	}
}

export default HomeProjects;
