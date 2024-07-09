import React from 'react';
import { MailForm, Map } from '../components';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

function ContactUs() {

	return (
		<div className="bg-[#CDFF70] pt-64 pb-32">
			<div className="w-full h-[1250px] flex justify-between">
				<div className="w-[50%]">
					<MailForm />
				</div>
				<div className='w-[50%]'>
					<Map />
				</div>
			</div>
		</div>
	);
};



export default ContactUs;