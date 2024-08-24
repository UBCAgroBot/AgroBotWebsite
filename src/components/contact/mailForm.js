import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { IoSend } from "react-icons/io5";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const supabaseUrl = 'https://rpsuamzzbfswevkexntj.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
if (!supabaseKey) console.warn("WARNING: No supabase key found. Requests will not be sent to backend")


function MailForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if (!supabase) { throw Error(); }

			const { data, error } = await supabase
				.from('messages')
				.insert([
					{ firstName, lastName, email, phone, message, },
				])
				.select();

			if (error) {
				console.error('Error: ', error);
				throw Error();
			} else {
				setFirstName("");
				setLastName("");
				setPhone("");
				setMessage("");
			}
	
		} catch (error) {
			alert("Error sending message 🙀, sending an email is a good alternative");
		}
	};

	return (
		<div className="min-h-full w-full">
			<div className="flex flex-col items-center lg:pt-16">
				<div className="w-[75%]">
					<h3 className="mb-2 text-mobile-header font-bold lg:text-header">Contact Us</h3>
					<p className="text-mobile-body lg:text-body">Our team would love <br /> to hear from you.</p>
					<form onSubmit={handleSubmit} className="my-8 flex flex-col">
						<div className="flex justify-between">
							<div className='w-[49%]'>
								<label>First name</label>
								<input
									type="text"
									placeholder="first"
									className="my-2 w-full rounded-[24px] border-[4px] border-[#2E1B0F] bg-[#CDFF70] text-[32px]"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</div>
							<div className="w-[49%]">
								<label>Last name</label>
								<input
									type="text"
									placeholder="last"
									className="my-2 w-full rounded-[24px] border-[4px] border-[#2E1B0F] bg-[#CDFF70] text-[32px]"
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
						</div>
						<label>Email</label>
						<input
							type="email"
							placeholder="Email"
							className="my-2 rounded-[24px] border-[4px] border-[#2E1B0F] bg-[#CDFF70] text-[32px]"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Phone</label>
						<input
							type="tel"
							placeholder="Phone number"
							className="my-2 rounded-[24px] border-[4px] border-[#2E1B0F] bg-[#CDFF70] text-[32px]"
							onChange={(e) => setPhone(e.target.value)}
						/>
						<label>Message</label>
						<textarea
							placeholder="Message"
							className="my-2 min-h-[4em] rounded-[24px] border-[4px] border-[#2E1B0F] bg-[#CDFF70] p-3 text-[32px]"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button className="my-2 rounded-[24px] border-[4px] border-[#2E1B0F] bg-[#2E1B0F] p-2 text-[32px] text-[#CDFF70]" type='submit'>
							<p className="font-bold">Send message <IoSend className="inline pb-[2px]" /></p>
						</button>
					</form>
				</div>
				<div className="w-[75%] pt-12">
					<h3 className="text-mobile-header font-semibold text-[#2E1B0F] lg:text-header">Or via social media</h3>
					<div className="mx-auto my-12 flex flex-row flex-wrap justify-around">
						<a href="mailto:ubcagrobot@gmail.com"><div className="mr-8 flex flex-col items-center justify-center font-bold"><div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E1B0F] px-2 lg:h-24 lg:w-24 lg:p-0"><LuMail      size='64' color="#CDFF70" /></div></div></a>
						<a href="https://instagram.com/ubcagrobot" target="_blank" rel="noreferrer"><div className="mr-8 flex flex-col items-center justify-center font-bold"><div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E1B0F] p-2 lg:h-24 lg:w-24"><FaInstagram size='64' color="#CDFF70" /></div></div></a>
						<a href="https://www.linkedin.com/company/ubc-agrobot/" target="_blank" rel="noreferrer"><div className="mr-8 flex flex-col items-center justify-center font-bold"><div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E1B0F] p-2 lg:h-24 lg:w-24"><FaLinkedin  size='64' color="#CDFF70" /></div></div></a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MailForm;
