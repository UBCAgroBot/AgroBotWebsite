import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const blurPadding = 6; // Blurred items go over their width so we cant make them flush or else the blur will be abruptly cut off

const height = 340;
const width = 480;

const cardWidth = 400;
const cardHeight = 250;

const centerX = cardWidth / 2;
const centerY = height - cardHeight / 2;
const offsetX = (width - cardWidth) / 2;
const offsetY = (height - cardHeight) / 2;

const homePos = { left: centerX, top: centerY, zIndex: 4, filter: "blur(0px)" };
const offsetOne = {
	left: centerX + offsetX,
	top: centerY - offsetY,
	zIndex: 3,
	filter: "blur(3px)",
};
const offsetTwo = {
	left: centerX + 2 * offsetX - blurPadding,
	top: centerY - 2 * offsetY + blurPadding,
	zIndex: 2,
	filter: "blur(3px)",
};

const bottomPos = {
	left: centerX,
	top: height + cardHeight / 2,
	zIndex: 1,
	filter: "blur(0px)",
};

function getNextPos(currentPos) {
	switch (currentPos) {
		case homePos:
			return bottomPos;
		case bottomPos:
			return offsetTwo;
		case offsetTwo:
			return offsetOne;
		case offsetOne:
			return homePos;
	}
}

function RectangleAnimation() {
	let brownCardPos = homePos;
	let greenCardPos = offsetOne;
	let redCardPos = offsetTwo;
	let blueCardPos = bottomPos;

	const [brownCard, brownApi] = useSpring(() => ({
		from: brownCardPos,
	}));

	const [greenCard, greenApi] = useSpring(() => ({
		from: greenCardPos,
	}));

	const [redCard, redApi] = useSpring(() => ({
		from: redCardPos,
	}));

	const [blueCard, blueApi] = useSpring(() => ({
		from: blueCardPos,
	}));

	function UpdatePositions() {
		brownCardPos = getNextPos(brownCardPos);
		greenCardPos = getNextPos(greenCardPos);
		redCardPos = getNextPos(redCardPos);
		blueCardPos = getNextPos(blueCardPos);

		brownApi.start(brownCardPos);
		greenApi.start(greenCardPos);
		redApi.start(redCardPos);
		blueApi.start(blueCardPos);
	}

	useEffect(() => {
		const intervalId = setInterval(UpdatePositions, 8000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div
			className="relative overflow-hidden text-white"
			style={{
				height: height,
				width: width,
			}}
		>
			<animated.div
				className="absolute flex h-[250px] w-[400px] flex-col items-center justify-center rounded-md bg-[#1F5200]"
				style={{
					transform: "translate(-50%, -50%)",
					...blueCard,
				}}
			>
				<h2 className="pb-2 text-5xl font-bold text-white">$30.5 million</h2>
				<p className="w-[70%] text-center">
					is the expected agricultural robotics market size by 2032. 
				</p>
			</animated.div>

			<animated.div
				className="absolute flex h-[250px] w-[400px] flex-col items-center justify-center rounded-md bg-[#2E1B0F]"
				style={{
					transform: "translate(-50%, -50%)",
					...redCard,
				}}
			>
				<h2 className="pb-2 text-5xl font-bold text-white">30 million</h2>
				<p className="w-[70%] text-center">
					pounds of herbicide were reduced in 2021 through precision agriculture, in addition to 2 million acres of cropland and 100 million gallons of fossil fuel.
				</p>
			</animated.div>

			<animated.div
				className="absolute flex h-[250px] w-[400px] flex-col items-center justify-center rounded-md bg-[#1F5200]"
				style={{
					transform: "translate(-50%, -50%)",
					...greenCard,
				}}
			>
				<h2 className="pb-2 text-5xl font-bold text-white">90%</h2>
				<p className="w-[70%] text-center">
					of the water used in traditional soil farming can be saved through hydroponic systems.
				</p>
			</animated.div>

			<animated.div
				className="absolute flex h-[250px] w-[400px] flex-col items-center justify-center rounded-md bg-[#2E1B0F]"
				style={{
					transform: "translate(-50%, -50%)",
					...brownCard,
				}}
			>
				<h2 className="pb-2 text-5xl font-bold text-white">30%</h2>
				<p className="w-[70%] text-center">
					reduction in pesticide use as a result of artificial intelligence applications in pest control.
				</p>
			</animated.div>
		</div>
	);
}

function OurMission() {
	return (
		<div className="mx-auto my-24 w-[280px] bg-[#CDFF70] lg:flex lg:w-full lg:items-center lg:justify-center lg:px-24">
			<div className="w-full">
				<h1 className="mb-4 text-[20px] font-semibold text-[#2E1B0F] lg:text-body">
					Reduced Environmental Impact. <br />Increased Productivity and Yield. <br />Better Economic Results.
				</h1>
				<p className="text-[20px] text-[#2e1b0f]">

At UBC Agrobot, we are dedicated to advancing agritech by integrating precision techniques, cutting-edge technology, and sustainable practices. Our innovative projects and collaborative efforts aim to make agriculture more sustainable and prosperous for everyone.				</p>
			</div>
			<div className="ml-32 hidden items-center justify-center lg:flex">
				<RectangleAnimation />
			</div>
		</div>
	);
}

export default OurMission;
