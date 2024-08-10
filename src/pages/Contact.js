import React, { useEffect } from 'react';
import { MailForm, Map } from '../components';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

	return (
		<div className="bg-[#CDFF70] mt-mobile-standard lg:mt-standard lg:pb-64">
			<div className="lg:w-full lg:h-[1250px] flex justify-between">
				<div className="w-full lg:w-[60%]">
					<MailForm />
				</div>
				<div className='hidden lg:block w-[40%]'>
					<Map />
				</div>
			</div>
		</div>
	);
};



export default ContactUs;
