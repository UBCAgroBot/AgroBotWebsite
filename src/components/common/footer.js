import React from 'react';
import { AGROBOT_ICON } from "../../assets";
import { Link } from 'react-router-dom';
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full px-[5%] py-8 bg-[#2E1B0F] flex flex-col justify-between items-center">
            <div className="w-full my-4 lg:bg-[#46372c] rounded-2xl">
                <ul className="text-[#78BE20] font-bold text-[20px] flex flex-col lg:flex-row justify-between items-center text-center px-12">
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link to="/">Home</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link to="/agrobot">AgroBot</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link to="/agroponics">AgroPonics</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link to="/sponsorship">Sponsorship</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link to="/recruitment">Recruitment</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link to="/contact">Contact</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
                <div className="my-8 flex justify-center items-center lg:mb-0">
                    <img className="w-[80px] h-[80px]" src={AGROBOT_ICON} alt="Agrobot Icon" />
                    <h1 className="text-[24px] text-[#78BE20] text-left font-bold ml-2">UBC<br/>AGROBOT</h1>
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
