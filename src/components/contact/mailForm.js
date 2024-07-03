import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { createClient } from '@supabase/supabase-js'

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
		<div className="m-8 bg-[#2E1B0F] px-8 rounded-[46px] w-[84%]">
			<h3 className="text-[#78BE20] text-[46px] font-bold p-4">Send us a message:</h3>
			<form onSubmit={handleSubmit}>
				<div className="flex justify-between">
					<input
						type="text"
						placeholder="Name"
						className="bg-[#FFFFFF20] border-none rounded-full w-full mr-2 text-[#78BE20] text-[36px]"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="Email"
						className="bg-[#FFFFFF20] border-none rounded-full w-full ml-2 text-[#78BE20] text-[36px]"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				{/* <input
					type="subject"
					placeholder="Subject"
					className="bg-[#FFFFFF20] border-none rounded-full w-full text-[#78BE20] text-[36px] leading-6 my-4 py-[0.5rem] px-[0.75rem]"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
				/> */}
				<input
					placeholder="Message"
					className="bg-[#FFFFFF20] border-none rounded-[46px] w-full text-[#78BE20] text-[36px] leading-6 py-[0.5rem] px-[0.75rem] my-4 min-h-[8rem]"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button className="" type='submit'>
					Send <MdChevronRight />
				</button>
			</form>
		</div>
	);
}

export default MailForm;
