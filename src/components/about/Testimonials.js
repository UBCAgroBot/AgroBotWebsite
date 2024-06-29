import React from 'react'

function Card({ name, title, quote }) {
	return (
		<li className="bg-glass p-5 rounded-[42px] drop-shadow-2xl shadow-lg">
			<figcaption className="flex">
				<img 
						className="rounded-full w-[80px] h-[80px] bg-[#91D0F2]"
				/>
				<div className="ml-4">
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

	const testimonials = [
		{ name: "Arman Drismir", title: "Web Developer", quote: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try" },
		{ name: "Kori H.", title: "Web Developer", quote: "the best club" },
		{ name: "María Loo", title: "Marketing", quote: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try " },
		{ name: "Ishaan Datta", title: "ML Engineer", quote: "Just a heads up I won't be able to make the meeting today since I'm studying for my final", },
		{ name: "Robbie Baker", title: "CEO", quote: "I cant seem to get a background color I like for the projects section. Here are screenshots with about 0%, 30%, and 80% opacity. Do any of you have thoughts about which one looks the best?" },
	]
	const row_one = [
		{ name: "Arman Drismir", title: "Web Developer", quote: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try" },
		{ name: "Ishaan Datta", title: "ML Engineer", quote: "Just a heads up I won't be able to make the meeting today since I'm studying for my final", },
	]

	const row_two = [
		{ name: "Kori H.", title: "Web Developer", quote: "the best club" },
		{ name: "Robbie Baker", title: "CEO", quote: "I cant seem to get a background color I like for the projects section. Here are screenshots with about 0%, 30%, and 80% opacity. Do any of you have thoughts about which one looks the best?" },
	]

	const row_three = [
		{ name: "María Loo", title: "Marketing", quote: "Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex grid etc but just quicker to write and maintain. You should give it a try " },
	]

	return (
		<div className="p-4 bg-[#CDFF70] relative">
			<h1 className="text-[#2E1B0F] bg-[#FFFFFFD0] inline-block p-4 px-7 font-bold text-[36px] rounded-full drop-shadow-2xl shadow-lg">
				Testimonials
			</h1>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden">
				<ul className="space-y-4 my-8">
					{row_one.map((testimonial, index) => (
						<Card key={index} name={testimonial.name} title={testimonial.title} quote={testimonial.quote} />
					))}
				</ul>
				<ul className="space-y-4 my-8">
					{row_two.map((testimonial, index) => (
						<Card key={index} name={testimonial.name} title={testimonial.title} quote={testimonial.quote} />
					))}
				</ul>
				<ul className="space-y-4 my-8">
					{row_three.map((testimonial, index) => (
						<Card key={index} name={testimonial.name} title={testimonial.title} quote={testimonial.quote} />
					))}
				</ul>
			</div>
			<div className="bg-gradient-to-b from-[#CDFF7000] to-[#CDFF70] absolute left-0 bottom-0 w-full h-[22rem]" />
		</div>
	)
}

export default Testimonials