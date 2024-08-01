import React, { useState } from "react";
import { Timeline } from '../components/recruitment/Timeline.tsx'
import { SubteamOverlay } from "../components/recruitment/SubteamOverlay";

function SubteamBox({ emoji, title, bulletPoints, bg, overlayFn }) {
	return (
		<div className="w-[312px] h-[500px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-[10px] text-white">
			<div className="w-[286px] h-[250px] rounded-[46px] flex justify-center items-center" style={{background: bg}}>
				<p className="text-[128px]">{emoji}</p>
			</div>
			<h1 className="text-[32px] font-medium pt-4">{title}</h1>
			<ul className="text-[20px] pt-3 px-12 list-disc">
				{bulletPoints.map((text, index) => 
					<li key={index}>{text}</li>
				)}
			</ul>
			<button onClick={() => overlayFn(true)} className="text-[20px] pt-4 font-bold">Learn more +</button>
		</div>
	)
}

function Recruitment() {

	const [showSubteam, setShowSubteam] = useState(false);

	return (
		<div className="min-h-screen pt-48 pb-32 w-[1000px] mx-auto">
			{showSubteam ? <SubteamOverlay overlayFn={setShowSubteam} />
				:
				null
			}
			<h1 className="text-[48px] font-bold">Join the<br />Agrobot team!</h1>
			<Timeline />
			<h2 className="text-[32px] font-semibold my-12 mt-20">AgroBot Subteams:</h2>
			<div className="flex justify-between">
				<SubteamBox overlayFn={setShowSubteam} bg="#91D0F2" emoji='🤖' title='Applied AI' bulletPoints={["Object detection", "Plant classification", "Computer vision"]} />
				<SubteamBox overlayFn={setShowSubteam} bg="#1F5200" emoji='🏎️' title='Chassis' bulletPoints={["Build the agrobot chassis"]} />
				<SubteamBox overlayFn={setShowSubteam} bg="#91D0F2" emoji='🔋' title='Powertrain' bulletPoints={["Build the agrobot powertrain"]} />
			</div>
			<h2 className="text-[32px] font-semibold my-12 mt-20">AgroPonics Subteams:</h2>
			<div className="flex justify-between">
				<SubteamBox overlayFn={setShowSubteam} bg="#91D0F2" emoji='🤖' title='Applied AI' bulletPoints={["develop AI models to detect weeds"]} />
				<SubteamBox overlayFn={setShowSubteam} bg="#1F5200" emoji='🏎️' title='Chassis' bulletPoints={["Build the agrobot chassis"]} />
				<SubteamBox overlayFn={setShowSubteam} bg="#91D0F2" emoji='🔋' title='Powertrain' bulletPoints={["Build the agrobot powertrain"]} />
			</div>
			<h2 className="text-[32px] font-semibold my-12 mt-20">AgroPicker Subteams:</h2>
			<div className="flex justify-between">
				<SubteamBox overlayFn={setShowSubteam} bg="#91D0F2" emoji='🤖' title='Applied AI' bulletPoints={["develop AI models to detect weeds"]} />
				<SubteamBox overlayFn={setShowSubteam} bg="#1F5200" emoji='🏎️' title='Chassis' bulletPoints={["Build the agrobot chassis"]} />
				<SubteamBox overlayFn={setShowSubteam} bg="#91D0F2" emoji='🔋' title='Powertrain' bulletPoints={["Build the agrobot powertrain"]} />
			</div>
			<h2 className="text-[32px] font-semibold my-12 mt-20">Admin Subteams:</h2>
			<div className="flex justify-between">
				<SubteamBox overlayFn={setShowSubteam} bg="#91D0F2" emoji='🖍️' title='WebDev' bulletPoints={["suffer in figma and yell at React"]} />
				<SubteamBox overlayFn={setShowSubteam} bg="#1F5200" emoji='💵' title='Finance' bulletPoints={["Get those sponsorship $$$"]} />
				<SubteamBox overlayFn={setShowSubteam} bg="#91D0F2" emoji='🎤' title='Marketing' bulletPoints={["Build the agrobot powertrain"]} />
			</div>
		</div>
	);
}

export default Recruitment;
