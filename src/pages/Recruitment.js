import React, { useState, useEffect } from "react";
import { Timeline } from '../components/recruitment/Timeline.tsx'
import { SubteamOverlay } from "../components/recruitment/SubteamOverlay";
import { useLocation } from "react-router-dom";

function SubteamBox({ emoji, title, description, bg, overlayId, setOverlayId }) {
	return (
		<div className="w-[300px] mb-4 lg:w-[312px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center py-[10px] text-white">
			<div className="w-[286px] h-[250px] rounded-[46px] flex justify-center items-center" style={{ background: bg }}>
				<p className="text-[128px]">{emoji}</p>
			</div>
			<h1 className="text-[32px] w-full px-6 font-medium pt-4">{title}</h1>
			<p className="text-[16px] w-full px-6 pt-4">{description}</p>
			<button onClick={() => setOverlayId(overlayId)} className="text-[20px] mt-8 my-4 p-2 px-6 font-semibold rounded-full bg-glass text-[#2E1B0F]">Learn more +</button>
		</div>
	)
}

function Recruitment() {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const location = useLocation();

	useEffect(() => {
	  if (location.hash) {
		const element = document.getElementById(location.hash.substring(1));
		if (element) {
		  element.scrollIntoView({ behavior: "smooth" });
		}
	  }
	}, [location]);

	const applied_ai = {
		overlayId: "applied_ai",
		bg: "#91D0F2",
		emoji: "💻",
		title: "Applied AI",
		description: "The Applied AI sub-team pioneers ML models and AI to develop innovative solutions for AgroBot's tasks, from plant identification to advanced machine vision."
	}

	const chassis_powertrain = {
		overlayId: "chassis_powertrain",
		bg: "#1F5200",
		emoji: "⚙️",
		title: "Chassis/ Powertrain",
		description: "The Chassis/Powertrain sub-team designs and manufactures AgroBot's chassis and powertrain, ensuring efficient mobility and smooth integration of components."
	}

	const electrical = {
		overlayId: "electrical",
		bg: "#91D0F2",
		emoji: "🔋",
		title: "Electrical",
		description: "The Electrical Team ensures AgroBot’s success by carefully designing, assembling, and integrating power systems with rigorous testing and quality control."
	}

	const extermination = {
		overlayId: "extermination",
		bg: "#1F5200",
		emoji: "🌱",
		title: "Extermination",
		description: "The Extermination sub-team designs precision extermination mechanisms, like sprayer nozzles and the extermination arm, focusing on eco-friendly weed management and crop protection.",
	}

	const navigation_embedded_systems = {
		overlayId: "navigation_embedded_systems",
		bg: "#91D0F2",
		emoji: "🧭",
		title: "Navigation and Embedded Systems",
		description: "The Navigation & Embedded Systems sub-team designs cutting-edge autonomous systems integrating sensors like LiDAR, GPS, and IMU, to guide AgroBot safely through crop fields.",
	}

	const automation = {
		overlayId: "automation",
		bg: "#91D0F2",
		emoji: "🤖",
		title: "Automation",
		description: "The Automation sub-team is responsible for researching and implementing the sensing and control systems that monitor the growing environment of hydroponic systems."
	}

	const plants = {
		overlayId: "plants",
		bg: "#1F5200",
		emoji: "🪴",
		title: "Plants",
		description: "The Plants subteam manages the logistics and design of hydroponic systems, with a strong emphasis on research. Members utilize their creativity to design experiments and develop innovative methods for growing nutritionally relevant crops without soil or sunlight.",
	}

	const structure = {
		overlayId: "structure",
		bg: "#91D0F2",
		emoji: "🪵",
		title: "Structure",
		description: "The Structure sub-team designs and builds optimal growing environments by renovating and equipping spaces for hydroponic systems.",
	}

	const web_development = {
		overlayId: "web_development",
		bg: "#91D0F2",
		emoji: "🖍️",
		title: "Web Dev",
		description: "The Web Development sub-team develops and maintains our website and internal tools to boost team productivity and ensure our online presence is engaging and up-to-date.",
	};

	const agricultural_research = {
		overlayId: "agricultural_research",
		bg: "#1F5200",
		emoji: "📝",
		title: "Agricultural Research",
		description: "The Agricultural Research sub-team provides critical agricultural knowledge and conducts research to support the development of AgroBot, AgroPonics, and AgroPicker, ensuring our projects are informed by the latest advancements in the field.",
	}

	const finance = {
		overlayId: "finance",
		bg: "#91D0F2",
		emoji: "🏦",
		title: "Finance",
		description: "The Finance sub-team manages our financial resources, ensures budgetary compliance, and secures funding to support our projects and operations.",
	}

	const marketing = {
		overlayId: "marketing",
		bg: "#1F5200",
		emoji: "📢",
		title: "Marketing",
		description: "The Marketing sub-team manages UBC Agrobot’s public image and online presence, creates engaging content, and promotes our projects and initiatives to the public.",
	}

	const outreach = {
		overlayId: "outreach",
		bg: "#91D0F2",
		emoji: "📧",
		title: "Outreach",
		description: "The Outreach sub-team manages all of UBC Agrobot’s corporate relations with relevant organizations, whether it be for partnerships, sponsorships, or other collaborations.",
	}

	const teams = [
		{
			"name": "AgroBot Team",
			"subteams": [applied_ai, chassis_powertrain, electrical, extermination, navigation_embedded_systems]
		},
		{
			"name": "AgroPonics Team",
			"subteams": [automation, plants, structure]
		},
		{
			"name": "Administration Team",
			"subteams": [web_development, agricultural_research, finance, marketing, outreach]
		}
	]

	// When overlayId is null, the overlay is off.
	const [overlayId, setOverlayId] = useState(null);

	return (
		<div className="mt-standard pb-32 w-[300px] lg:w-[1000px] mx-auto">
			{overlayId ?
				<SubteamOverlay setOverlayId={setOverlayId} overlayId={overlayId} />
				:
				null
			}
			<h1 className="text-mobile-header lg:text-header font-bold">Join the Future of <br />Sustainable Agriculture!</h1>
			<Timeline />
			<div id="join-us">
				{teams.map((team, index) => (
					<div key={index}>
						<h2 className="text-mobile-header lg:text-header text-center lg:text-left font-semibold my-12 mt-20">{team.name}</h2>
						<div className="flex flex-col lg:flex-row flex-wrap">
							{team.subteams.map((subteam, index) => (
								<div key={index} className="mx-[10px]">
									<SubteamBox
										setOverlayId={setOverlayId}
										overlayId={subteam.overlayId}
										bg={subteam.bg}
										emoji={subteam.emoji}
										title={subteam.title}
										description={subteam.description}
									/>
								</div>
							))
							}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Recruitment;
