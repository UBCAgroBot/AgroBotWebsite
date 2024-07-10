import React from "react";

function SubteamBox({ emoji, title, bulletPoints, bg }) {
	return (
		<div className="w-[330px] h-[480px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-[10px] text-white">
			<div className="w-[310px] h-[250px] rounded-[46px] flex justify-center items-center" style={{background: bg}}>
				<p className="text-[128px]">{emoji}</p>
			</div>
			<h1 className="text-[48px] font-medium">{title}</h1>
			<ul className="text-[20px] pt-8 px-12 list-disc">
				{bulletPoints.map(text => 
					<li>{text}</li>
				)}
			</ul>
			<p className="text-[20px] pt-4">Learn more +</p>
		</div>
	)
}

function Recruitment() {
	return (
		<div className="min-h-screen pt-48 pb-32 w-[1262px] mx-auto">
			<h1 className="text-[96px] font-bold">Join the<br />Agrobot team!</h1>
			<p className="text-[48px] font-medium pt-8">Applications are open until January 27th! Before you apply you should read our recruitment package. When you are ready you can fill out the application forum.</p>
			<div className="w-full bg-black h-64 my-16"></div>
			<h2 className="text-[64px] font-semibold my-12 mt-20">AgroBot Subteams:</h2>
			<div className="flex justify-between">
				<SubteamBox bg="#91D0F2" emoji='🤖' title='Applied AI' bulletPoints={["develop AI models to detect weeds"]} />
				<SubteamBox bg="#1F5200" emoji='🏎️' title='Chassis' bulletPoints={["Build the agrobot chassis"]} />
				<SubteamBox bg="#91D0F2" emoji='🔋' title='Powertrain' bulletPoints={["Build the agrobot powertrain"]} />
			</div>
			<h2 className="text-[64px] font-semibold my-12 mt-20">AgroPonics Subteams:</h2>
			<div className="flex justify-between">
			<SubteamBox bg="#91D0F2" emoji='🤖' title='Applied AI' bulletPoints={["develop AI models to detect weeds"]} />
				<SubteamBox bg="#1F5200" emoji='🏎️' title='Chassis' bulletPoints={["Build the agrobot chassis"]} />
				<SubteamBox bg="#91D0F2" emoji='🔋' title='Powertrain' bulletPoints={["Build the agrobot powertrain"]} />
			</div>
			<h2 className="text-[64px] font-semibold my-12 mt-20">Admin Subteams:</h2>
			<div className="flex justify-between">
				<SubteamBox bg="#91D0F2" emoji='🖍️' title='WebDev' bulletPoints={["suffer in figma and yell at React"]} />
				<SubteamBox bg="#1F5200" emoji='💵' title='Finance' bulletPoints={["Get those sponsorship $$$"]} />
				<SubteamBox bg="#91D0F2" emoji='🎤' title='Marketing' bulletPoints={["Build the agrobot powertrain"]} />
			</div>
		</div>
	);
}

export default Recruitment;
