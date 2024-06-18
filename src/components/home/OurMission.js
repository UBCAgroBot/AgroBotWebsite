import { useEffect } from 'react'
import { useSpring, animated } from 'react-spring';

const blurPadding = 6 // Blurred items go over their width so we cant make them flush or else the blur will be abruptly cut off

const height = 340
const width = 520

const cardWidth = 400
const cardHeight = 250

const centerX = cardWidth / 2
const centerY = height - (cardHeight / 2)
const offsetX = (width - cardWidth) / 2
const offsetY = (height - cardHeight) / 2

const homePos = { left: centerX, top: centerY, zIndex: 4, filter: 'blur(0px)'}
const offsetOne = { left: centerX + offsetX, top: centerY - offsetY, zIndex: 3, filter: 'blur(3px)'}
const offsetTwo = { left: centerX + 2 * offsetX - blurPadding, top: centerY - 2 * offsetY + blurPadding, zIndex: 2, filter: 'blur(3px)'}

const bottomPos = { left: centerX, top: height + cardHeight / 2, zIndex: 1, filter: 'blur(0px)'}

function getNextPos(currentPos) {
	switch (currentPos) {
		case homePos:
			return bottomPos
		case bottomPos:
			return offsetTwo
		case offsetTwo:
			return offsetOne
		case offsetOne:
			return homePos
	}
}

function RectangleAnimation() {

	let brownCardPos = homePos
	let greenCardPos = offsetOne
	let redCardPos = offsetTwo
	let blueCardPos = bottomPos

	const [brownCard, brownApi] = useSpring(() => ({
		from: brownCardPos,
	}))

	const [greenCard, greenApi] = useSpring(() => ({
		from: greenCardPos,
	}))

	const [redCard, redApi] = useSpring(() => ({
		from: redCardPos,
	}))

	const [blueCard, blueApi] = useSpring(() => ({
		from: blueCardPos,
	}))

	function UpdatePositions() {
		brownCardPos = getNextPos(brownCardPos)
		greenCardPos = getNextPos(greenCardPos)
		redCardPos = getNextPos(redCardPos)
		blueCardPos = getNextPos(blueCardPos)

		brownApi.start(brownCardPos)
		greenApi.start(greenCardPos)
		redApi.start(redCardPos)
		blueApi.start(blueCardPos)
	}

	useEffect(() => {
		const intervalId = setInterval(UpdatePositions, 2000)
		return () => clearInterval(intervalId)
	}, [])


	return (
		<div className="relative overflow-hidden text-white"
			style={{
				height: height,
				width: width,
			}}>

<animated.div className="absolute w-[400px] h-[250px] bg-[#1F5200] rounded-md flex flex-col justify-center items-center"
				style={{
					transform: 'translate(-50%, -50%)',
					...blueCard,
				}}
			>
				<h2 className="font-bold text-white text-5xl pb-2">98%</h2>
				<p className="w-[70%] text-center">Can't drink water without drooling. They are like dogs in every way but appearance</p>
			</animated.div>

			<animated.div className="absolute w-[400px] h-[250px] bg-[#2E1B0F] rounded-md flex flex-col justify-center items-center"
				style={{
					transform: 'translate(-50%, -50%)',
					...redCard,
				}}
			>
				<h2 className="font-bold text-white text-5xl pb-2">98%</h2>
				<p className="w-[70%] text-center">Can't drink water without drooling. They are like dogs in every way but appearance</p>
			</animated.div>

			<animated.div className="absolute w-[400px] h-[250px] bg-[#1F5200] rounded-md flex flex-col justify-center items-center"
				style={{
					transform: 'translate(-50%, -50%)',
					...greenCard,
				}}
			>
				<h2 className="font-bold text-white text-5xl pb-2">98%</h2>
				<p className="w-[70%] text-center">Can't drink water without drooling. They are like dogs in every way but appearance</p>
			</animated.div>

			<animated.div className="absolute w-[400px] h-[250px] bg-[#2E1B0F] rounded-md flex flex-col justify-center items-center"
				style={{
					transform: 'translate(-50%, -50%)',
					...brownCard,
				}}
			>
				<h2 className="font-bold text-white text-5xl pb-2">98%</h2>
				<p className="w-[70%] text-center">Can't drink water without drooling. They are like dogs in every way but appearance</p>
			</animated.div>
		</div>
	);
};

function OurMission() {

	return (
		<div className="w-full h-[100vh] bg-[#CDFF70] px-[10%] flex justify-center items-center">
			<div className="w-[50%] px-[5%]">
				<h1 className="mb-4 font-bold text-[48px] text-[#2E1B0F]">A fully integrated suite of fertilizing and exterminating products</h1>
				<p className="text-[18px] text-[#2e1b0fa7]">Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use UBC AGrobot to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.</p>
			</div>
			<div className="ml-[10%] flex justify-center items-center">
				<RectangleAnimation />
			</div>
		</div>
	);
}

export default OurMission;
