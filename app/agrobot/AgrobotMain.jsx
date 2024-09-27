"use client";

import React from 'react';

function AgrobotMain() {

	return (
		<section
			className="lg:h-[175vh] w-full bg-black flex flex-col gap-[2rem] justify-start pt-10"
		>
			<div className="w-full h-[50vh] lg:h-[100vh] pt-8 opacity-1">
				<img src="/img/AgrobotModel2D.jpg" />
			</div>
			<div className="w-full lg:h-[75vh] flex flex-col lg:flex-row ">
				<div className="w-full h-full">
					<div className="justify-center mx-5">
						<h2 className="text-white text-center text-[42px] lg:text-[7rem] font-bold mb-2">AgroBot</h2>
						<p className="text-white text-center text-[18px] lg:text-[1.25rem]">
							An autonomous robot utilizing AI and machine learning for precise intra-row weeding and data collection. It identifies and eliminates weeds without harming crops, reducing the need for chemical pesticides. Additionally, the robot collects data on crop health to help farmers make better, more informed decisions.
						</p>
						<p className="text-white text-center font-bold text-[18px] lg:text-[1.25rem] mt-10 mb-20">
							AgroBot is a product of collaboration between five different sub-teams, each playing a pivotal role in its development and performance:
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AgrobotMain;
