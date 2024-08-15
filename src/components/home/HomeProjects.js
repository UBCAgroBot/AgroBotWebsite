import React from "react";
import { useSpring, animated } from "react-spring";
import { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { AgrobotModelView, AgroponicModelView, AgroPickerModelView } from "../models";
import { AgrobotModel2D, AgroArm2DModel, AgroponicModel2D } from "../../assets";
import { useMediaQuery } from "react-responsive";

function Project({ ProjectName, background, ModelComponent, MobileImg }) {
	const containerRef = useRef(null);
	const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

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
			{!isMobile &&
				<div className="w-[50%] h-[55vh] bg-[#2E1B0F] relative top-[100vh] rounded-lg">
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
	return (
		<div className="bg-[#CDFF70]">
			<Project
				ProjectName="AgroBot"
				MobileImg={AgrobotModel2D}
				ModelComponent={<AgrobotModelView
					id={"agrobotModelView"}
					gsapType={"agrobotModelGsap"}
					scale={[2, 2, 2]}
					cameraPosition={[0, 0, 1]}
					groupPosition={[0, 0, 0]}
					vectorPosition={[0, 0, 0]} />}
			/>
			<Project
				ProjectName="AgroPonics "
				MobileImg={AgroponicModel2D}
				background={{
					background: "linear-gradient(to bottom, #CDFF70, #78BE20)",
				}}
				ModelComponent={<AgroponicModelView
					id={"agroponicModelView"}
					gsapType={"agroponicModelGsap"}
					scale={[1, 1, 1]}
					cameraPosition={[0, 0, 1]}
					groupPosition={[0, 0, 0]}
					vectorPosition={[0, 0, 0]} />}
			/>
			<Project
				ProjectName="AgroPicker "
				background={{ background: "#78BE20" }}
				MobileImg={AgroArm2DModel}
				ModelComponent={<AgroPickerModelView
					id={"agroPickerModelView"}
					gsapType={"agroPickerModelGsap"}
					scale={[1, 1, 1]}
					cameraPosition={[2, 2, 3]}
					groupPosition={[0, 0, 0]}
					vectorPosition={[0, 0, 0]} />}
			/>
		</div>
	);
}

export default HomeProjects;
