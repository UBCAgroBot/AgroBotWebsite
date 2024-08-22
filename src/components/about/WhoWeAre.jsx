import React from "react";
import CW from '../../assets/image/cameron-witney.jpg';
import RS from '../../assets/image/ryan-searle.jpg';

function WhoWeAre() {

	return (
		<div className="flex my-32 lg:my-48 items-stretch w-full max-w-full overflow-hidden">
			<div className="hidden lg:block flex-grow relative">
				<img src={CW} className="absolute bottom-[0px] right-[12px] h-96 object-cover"/>
			</div>
			<div className="w-[280px] lg:w-[1000px] mx-auto bg-[#CDFF70] text-[20px] lg:text-[24px] relative">
				<div className='lg:w-[100%]'>
					<h3 className="text-mobile-header lg:text-header font-semibold pb-4">What makes a good AgroBotee?</h3>
					<p className="mb-6">
						Being part of UBC Agrobot means embracing innovation, collaboration, curiosity, and integrity, and applying them in everything we do. We are always striving for excellence!
					</p>
					<h4 className="font-semibold my-2">Here's what makes a good AgroBotee:</h4>
					<ul className="list-disc ml-12 text-[20px]">
						<li className="my-2"><strong>Passion for Innovation:</strong> Driven by a desire to revolutionize agriculture through cutting-edge technology.</li>
						<li className="my-2"><strong>Team Player:</strong> Values teamwork, diverse perspectives, and actively contributes to a supportive, inclusive environment.</li>
						<li className="my-2"><strong>Problem-Solving Skills:</strong> Uses strong analytical skills to tackle complex agricultural challenges with innovative solutions.</li>
						<li className="my-2"><strong>Technical Proficiency:</strong> Possesses relevant technical knowledge and skills, continuously expanding their expertise.</li>
						<li className="my-2"><strong>Commitment to Sustainability:</strong> Dedicated to developing sustainable solutions that benefit both farmers and the environment.</li>
						<li className="my-2"><strong>Curiosity and Growth Mindset:</strong> Eager to learn, explore new concepts, and continuously improve, fostering ongoing innovation.</li>
						<li className="my-2"><strong>Leadership and Initiative:</strong> Takes ownership of their work, demonstrates leadership, and inspires others to achieve their best.</li>
					</ul>
					<h3 className="text-mobile-header lg:text-header font-semibold pt-8 pb-4">Our Values:</h3>
					<ol className="list-decimal ml-12 text-[20px]">
						<li className="my-2"><strong>Innovation:</strong> We are committed to pushing the boundaries of agricultural technology. Our passion for innovation drives us to explore new ideas, embrace cutting-edge solutions, and constantly improve our projects to create a better future for agriculture.</li>
						<li className="my-2"><strong>Collaboration:</strong> Teamwork is at the heart of everything we do. We believe that diverse perspectives and collective effort lead to the best outcomes. By working together, sharing knowledge, and supporting one another, we achieve greater success.</li>
						<li className="my-2"><strong>Curiosity:</strong> Our curiosity fuels our desire to learn and grow. We are always eager to explore new concepts, ask questions, and seek out opportunities for improvement. This relentless curiosity helps us stay at the forefront of agricultural advancements.</li>
						<li className="my-2"><strong>Integrity:</strong> We uphold the highest standards of honesty and ethics in all our actions. Integrity guides our decisions and interactions, ensuring that we build trust within our team and with our partners. We are dedicated to doing what is right, including considering the environmental impact of our work and striving for sustainable solutions.</li>
					</ol>
				</div>
			</div>
			<div className="hidden lg:block flex-grow relative">
				<img src={RS} className=" absolute left-12 top-[-0px] h-[420px] object-cover"/>
			</div>
		</div>
	)
}

export default WhoWeAre
