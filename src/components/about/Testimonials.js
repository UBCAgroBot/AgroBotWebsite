import React, { useState } from 'react'

function Card({ name, title, quote, image }) {
	return (
		<li className="bg-glass p-5 rounded-[42px] drop-shadow-2xl shadow-lg">
			<figcaption className="flex">
				<div 
						className="rounded-full w-[80px] h-[80px] bg-[#91D0F2] bg-center bg-cover"
						style={{backgroundImage: `url(${image})`}}
				/>
				<div className="ml-4 overflow-y-scroll">
					<div className="text-[36px] text-[#2E1B0F] font-bold">{name}</div>
					<div className="text-[24px] text-[#2e1b0fb4] font-bold">{title}</div>
				</div>
			</figcaption>
			<p className="p-4 text-[24px]">
				{quote}
			</p>
		</li>
	)
}

function Testimonials() {

	const [showMore, setShowMore] = useState(false)

	const row_one = [
		{ name: "Arman Drismir", title: "Web Developer", quote: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try", },
		{ name: "Ishaan Datta", title: "ML Engineer", quote: "Just a heads up I won't be able to make the meeting today since I'm studying for my final"},
		{ name: "Arman Drismir", title: "Web Developer", quote: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try"},
		{ name: "Ishaan Datta", title: "ML Engineer", quote: "Just a heads up I won't be able to make the meeting today since I'm studying for my final"},
	]

	const row_two = [
		{ name: "Kori H.", title: "Web Developer", quote: "the best club" },
		{ name: "Robbie Baker", title: "CEO", quote: "I cant seem to get a background color I like for the projects section. Here are screenshots with about 0%, 30%, and 80% opacity. Do any of you have thoughts about which one looks the best?" },
		{ name: "Kori H.", title: "Web Developer", quote: "the best club" },
		{ name: "Robbie Baker", title: "CEO", quote: "I cant seem to get a background color I like for the projects section. Here are screenshots with about 0%, 30%, and 80% opacity. Do any of you have thoughts about which one looks the best?" },
	]

	const row_three = [
		{ name: "María Loo", title: "Marketing", quote: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try " },
		{ name: "María Loo", title: "Marketing", quote: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try " },
	]

	return (
		<div className="p-4 bg-[#CDFF70] text-[#2E1B0F] relative mt-24">
			<h1 className=" text-[48px] font-bold text-center mt-8 mb-4">
				Testimonials
			</h1>
			<div className={`grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden ${showMore ? '' : 'max-h-[33rem]'} ${showMore ? 'pb-[72px]' : ''}`}>
				<ul className="space-y-4 my-8">
					{row_one.map((testimonial, index) => (
						<Card key={index} name={testimonial.name} title={testimonial.title} quote={testimonial.quote} image={testimonial.image} />
					))}
				</ul>
				<ul className="space-y-4 my-8 hidden sm:block">
					{row_two.map((testimonial, index) => (
						<Card key={index} name={testimonial.name} title={testimonial.title} quote={testimonial.quote} image={testimonial.image} />
					))}
				</ul>
				<ul className="space-y-4 my-8 hidden lg:block">
					{row_three.map((testimonial, index) => (
						<Card key={index} name={testimonial.name} title={testimonial.title} quote={testimonial.quote} image={testimonial.image} />
					))}
				</ul>
			</div>
			{showMore ? 
				null
				:
				<div className="bg-gradient-to-b from-[#CDFF7000] to-[#CDFF70] absolute left-0 bottom-0 w-full h-[22rem]" /> 
			}
			<button
				onClick={() => setShowMore(!showMore)}
				className="text-mobile-body lg:text-body bg-glass shadow-lg font-bold px-4 p-2 lg:p-4 lg:px-7 rounded-full absolute bottom-8 left-1/2 transform -translate-x-1/2"
				>
				{showMore ? 'Show Less' : 'Show More'}
			</button>
		</div>
	)
}

export default Testimonials