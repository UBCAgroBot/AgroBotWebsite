import React, { useState, useEffect } from 'react';
import { mailPhoto } from '../assets';
import { TitleBanner } from '../components';
import { MailForm, SideBar} from '../components';

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
      const later = () => {
          clearTimeout(timeout);
          func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
  };
}

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const handleResize = debounce(() => {
          setIsMobile(window.innerWidth < 768);
      }, 250);

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };

  }, []);

  return (
<div className="bg-[#F8F7F1] h-full w-screen px-10 pb-10" style={{ background: 'linear-gradient(to bottom, #F8F7F1, #E2F4C1)' }}>
        <TitleBanner fromColor="#007165" toColor="#00b491" imageSrc={mailPhoto} imageAltText="Mail">Contact Us</TitleBanner>
      
        <MailForm isMobile={isMobile}></MailForm>
    </div>

  );
};



export default ContactUs;