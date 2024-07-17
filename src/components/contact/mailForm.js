import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { IoSend } from "react-icons/io5";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const supabaseUrl = 'https://rpsuamzzbfswevkexntj.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
if (!supabaseKey) console.warn("WARNING: No supabase key found. Requests will not be sent to backend")


function MailForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data, error } = await supabase
			.from('messages')
			.insert([
				{ name: name, email: email, subject: subject, message: message },
			])
			.select();

		if (error) {
			console.error('Error: ', error);
		} else {
			setName("");
			setEmail("");
			setSubject("");
			setMessage("");
		}
	};

	return (
		<div className="w-full min-h-full">
			<div className="flex flex-col items-center pt-16">
				<div className="w-[75%]">
					<h3 className="text-[#2E1B0F] font-bold text-[64px]">Contact Us</h3>
					<p className="text-[#2E1B0F] text-[32px]">Our team would love <br /> to hear from you.</p>
					<form onSubmit={handleSubmit} className="my-8 flex flex-col">
						<div className="flex justify-between">
							<div className='w-[49%]'>
								<label>First name</label>
								<input
									type="text"
									placeholder="first"
									className="my-2 text-[32px] w-full bg-[#CDFF70] rounded-[24px] border-[4px] border-[#2E1B0F]"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="w-[49%]">
								<label>Last name</label>
								<input
									type="text"
									placeholder="last"
									className="my-2 text-[32px] w-full bg-[#CDFF70] rounded-[24px] border-[4px] border-[#2E1B0F]"
								/>
							</div>
						</div>
						<label>Email</label>
						<input
							type="email"
							placeholder="Email"
							className="my-2 text-[32px] bg-[#CDFF70] rounded-[24px] border-[4px] border-[#2E1B0F]"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Phone</label>
						<input
							type="tel"
							placeholder="Phone number"
							className="my-2 text-[32px] bg-[#CDFF70] rounded-[24px] border-[4px] border-[#2E1B0F]"
						/>
						<label>Message</label>
						<textarea
							placeholder="Message"
							className="p-3 my-2 text-[32px] bg-[#CDFF70] rounded-[24px] border-[4px] border-[#2E1B0F] min-h-[4em]"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button className="my-2 p-2 text-[32px] bg-[#2E1B0F] rounded-[24px] border-[4px] border-[#2E1B0F] text-[#CDFF70]" type='submit'>
							<p className="font-bold">Send message <IoSend className="inline pb-[2px]" /></p>
						</button>
					</form>
				</div>
				<div className="w-[75%] pt-12">
					<h3 className="text-[#2E1B0F] font-bold text-[64px]">Or via social media</h3>
					<div className="flex mx-auto my-12">
						<div className="flex flex-col items-center justify-center font-bold mr-8"><div className="bg-[#2E1B0F] rounded-xl p-0 mb-2 flex justify-center items-center w-24 h-24"><LuMail      size='64' color="#CDFF70" /></div></div>
						<div className="flex flex-col items-center justify-center font-bold mr-8"><div className="bg-[#2E1B0F] rounded-xl p-2 mb-2 flex justify-center items-center w-24 h-24"><FaInstagram size='64' color="#CDFF70" /></div></div>
						<div className="flex flex-col items-center justify-center font-bold mr-8"><div className="bg-[#2E1B0F] rounded-xl p-2 mb-2 flex justify-center items-center w-24 h-24"><FaLinkedin  size='64' color="#CDFF70" /></div></div>
						<div className="flex flex-col items-center justify-center font-bold mr-8"><div className="bg-[#2E1B0F] rounded-xl p-2 mb-2 flex justify-center items-center w-24 h-24"><FaFacebook  size='64' color="#CDFF70" /></div></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MailForm;
