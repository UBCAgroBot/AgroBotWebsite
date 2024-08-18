import React from "react";
import farm from '../../assets/image/matt-benson.jpg'

function WhoWeAre() {

	return (
		<div className="w-mobile-content lg:w-content mx-auto my-16 text-mobile-body lg:text-body">
			<h3 className="text-mobile-header lg:text-header font-bold pb-8">What makes a good AgroBotee?</h3>
			<p className="mb-6">
				Being part of UBC Agrobot means embracing innovation, collaboration, curiosity, and integrity, and applying them in everything we do. We are always striving for excellence!
			</p>
			<h4 className="font-medium my-2">Here's what makes a good AgroBotee:</h4>
			<ul className="list-disc ml-12 text-[20px] lg-[text-24px]">
				<li className="my-2">Passion for Innovation: Driven by a desire to revolutionize agriculture through cutting-edge technology.</li>
				<li className="my-2">Team Player: Values teamwork, diverse perspectives, and actively contributes to a supportive, inclusive environment.</li>
				<li className="my-2">Problem-Solving Skills: Uses strong analytical skills to tackle complex agricultural challenges with innovative solutions.</li>
				<li className="my-2">Technical Proficiency: Possesses relevant technical knowledge and skills, continuously expanding their expertise.</li>
				<li className="my-2">Commitment to Sustainability: Dedicated to developing sustainable solutions that benefit both farmers and the environment.</li>
				<li className="my-2">Curiosity and Growth Mindset: Eager to learn, explore new concepts, and continuously improve, fostering ongoing innovation.</li>
				<li className="my-2">Leadership and Initiative: Takes ownership of their work, demonstrates leadership, and inspires others to achieve their best.</li>
			</ul>
		</div>
	)

	// return (
	// 	<div className="bg-[#CDFF70] py-32 flex relative text-mobile-body lg:text-body">
	// 		<div className='mt-16 ml-[250px] lg:pl-32'>
	// 			<h3 className="text-mobile-header lg:text-header font-bold pb-8">What makes a good AgroBotee?</h3>
	// 			<p className="mb-6">
	// 				Being part of UBC Agrobot means embracing innovation, collaboration, curiosity, and integrity, and applying them in everything we do. We are always striving for excellence!
	// 			</p>
	// 			<h4 className="font-medium my-2">Here's what makes a good AgroBotee:</h4>
	// 			<ul className="list-disc ml-12">
	// 				<li>Passion for Innovation: Driven by a desire to revolutionize agriculture through cutting-edge technology.</li>
	// 				<li>Team Player: Values teamwork, diverse perspectives, and actively contributes to a supportive, inclusive environment.</li>
	// 				<li>Problem-Solving Skills: Uses strong analytical skills to tackle complex agricultural challenges with innovative solutions.</li>
	// 				<li>Technical Proficiency: Possesses relevant technical knowledge and skills, continuously expanding their expertise.</li>
	// 				<li>Commitment to Sustainability: Dedicated to developing sustainable solutions that benefit both farmers and the environment.</li>
	// 				<li>Curiosity and Growth Mindset: Eager to learn, explore new concepts, and continuously improve, fostering ongoing innovation.</li>
	// 				<li>Leadership and Initiative: Takes ownership of their work, demonstrates leadership, and inspires others to achieve their best.</li>
	// 			</ul>
	// 		</div>
	// 		<div className="hidden lg:block w-[250px] h-[600px] absolute left-0 top-0 mt-32 bg-cover bg-left-top" style={{backgroundImage: `url(${farm})`}}></div>
	// 	</div>
	// )
}

export default WhoWeAre