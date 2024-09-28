"use client";

import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AgrobotMain() {
	const [isClient, setIsClient] = useState(false)

	gsap.registerPlugin(ScrollTrigger)
	const modelContainer = "mainAgrobotModel";
	const modelContainerId = "#" + modelContainer;
	const modelImg = "mainAgroGsap";
	const modelImgId = "#" + modelImg;
	const modelDestContainer = "agrobotDestContaienr";
	const modelDestContainerId = "#" + modelDestContainer;
	const textDiv = "agrobotMainText";
	const textDivId = "#" + textDiv;

	useEffect(() => {
		setIsClient(true)
	})

	useEffect(() => {
		if (!isClient) { return }

		if (typeof window === undefined) { return }

		const mm = gsap.matchMedia();
		const dest = document.getElementById(modelDestContainer);
		const destDiv = dest.getBoundingClientRect();
		const modelDivStartinPosition = window.innerWidth / 2;
		const destDivCenter = (destDiv.left + destDiv.right) / 2;
		const modelContainer = "mainAgrobotModel";

		mm.add("(min-width: 1024px)", () => {
			ScrollTrigger.defaults({
				immediateRender: true,
				scrub: true,
				pinSpacer: false,
				ease: 'none',
			});


			gsap.timeline({
				scrollTrigger: {
					trigger: modelImgId,
					start: 'center center',
					endTrigger: modelDestContainerId,
					end: 'center center',
					markers: false,
					pin: true,
					invalidateOnRefresh: true,
					pinSpacer: false,
					ease: 'none',
				},
			}).to(modelImgId, {
				x: () => destDivCenter - modelDivStartinPosition,
			});
		});

		return () => {
			mm.revert();
		};
	}, [isClient])

	useGSAP(() => {
		const timeline = gsap.timeline({
		  scrollTrigger: {
			trigger: textDivId,
			markers: false,
			start: "top bottom",
			end: "center center",
		  },
		});
	
		timeline.fromTo(textDivId, {
		  opacity: 0,
		},
		  {
			y: "1rem",
			opacity: 1,
			duration: 0.25,
			ease: "power1.out",
		  },
		);
	  }, []);

	return (
		<section
			className="lg:h-[175vh] w-full bg-black flex flex-col gap-[2rem] justify-start pt-10"
		>
			<div className="w-full h-[50vh] lg:h-[100vh] pt-8 opacity-1">
				<div id={modelContainer}>
					<img id={modelImg} src="/img/AgrobotModel2D.jpg" />
				</div>
			</div>
			<div className="w-full lg:h-[75vh] flex flex-col lg:flex-row ">
				<div id={modelDestContainer} className="w-full h-full "/>
				<div className="w-full h-full">
					<div className="justify-center mx-5">
						<h2 id={textDiv} className="text-white text-center text-[42px] lg:text-[7rem] font-bold mb-2">AgroBot</h2>
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
