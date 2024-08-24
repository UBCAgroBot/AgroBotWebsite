import React, { useEffect } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

import { MailForm, Map } from '../components';

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

	return (
		<div className="mt-mobile-standard bg-[#CDFF70] lg:mt-standard lg:pb-64">
			<div className="flex justify-between lg:h-[1250px] lg:w-full">
				<div className="w-full lg:w-[60%]">
					<MailForm />
				</div>
				<div className='hidden w-[40%] lg:block'>
					<Map />
				</div>
			</div>
		</div>
	);
};



export default ContactUs;
