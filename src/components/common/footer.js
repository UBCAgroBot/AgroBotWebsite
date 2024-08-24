import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

import { AGROBOT_ICON } from "../../assets";

function Footer() {
    return (
        <footer className="flex w-full flex-col items-center justify-between bg-[#2E1B0F] px-[5%] py-8">
            <div className="my-4 w-full rounded-2xl lg:bg-[#46372c]">
                <ul className="flex flex-col items-center justify-between px-12 text-center text-[20px] font-bold text-[#78BE20] lg:flex-row">
                    <li className="my-2 rounded-xl bg-[#46372c] p-2 lg:bg-none"><Link to="/">Home</Link></li>
                    <li className="my-2 rounded-xl bg-[#46372c] p-2 lg:bg-none"><Link to="/agrobot">AgroBot</Link></li>
                    <li className="my-2 rounded-xl bg-[#46372c] p-2 lg:bg-none"><Link to="/agroponics">AgroPonics</Link></li>
                    <li className="my-2 rounded-xl bg-[#46372c] p-2 lg:bg-none"><Link to="/sponsorship">Sponsorship</Link></li>
                    <li className="my-2 rounded-xl bg-[#46372c] p-2 lg:bg-none"><Link to="/recruitment">Recruitment</Link></li>
                    <li className="my-2 rounded-xl bg-[#46372c] p-2 lg:bg-none"><Link to="/contact">Contact</Link></li>
                    <li className="my-2 rounded-xl bg-[#46372c] p-2 lg:bg-none"><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="flex w-full flex-col-reverse items-center justify-center lg:flex-row lg:justify-between">
                <div className="my-8 flex items-center justify-center lg:mb-0">
                    <img className="h-[80px] w-[80px]" src={AGROBOT_ICON} alt="Agrobot Icon" />
                    <h1 className="ml-2 text-left text-[24px] font-bold text-[#78BE20]">UBC<br/>AGROBOT</h1>
                </div>
                <div className="my-4 flex lg:mt-auto">
                    <a target="_blank" href="https://www.instagram.com/ubcagrobot/" rel="noreferrer"><FaInstagram className=" p-1 text-[#88BE22]" size={52} /></a>
                    <a target="_blank" href="https://www.linkedin.com/company/ubc-agrobot/mycompany/" rel="noreferrer"><FaLinkedin className=" p-1 text-[#88BE22]" size={52} /></a>
                    <a href="mailto:ubcagrobot@gmail.com"><FaEnvelope className="p-1 text-[#88BE22]" size={52} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
