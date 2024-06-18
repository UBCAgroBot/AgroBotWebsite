import React, { useState, useEffect, useRef } from 'react';
import { AGROBOT_ICON } from "../../assets";
import { FaFacebook, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full px-[5%] py-8 bg-[#2E1B0F] flex flex-col justify-between items-center">
            <div className="w-full py-2 rounded-full bg-[#ffffff1e]">
                <ul className="text-[#78BE20] font-bold text-[24px] flex justify-around items-center">
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/sponsorship">Sponsorship</a></li>
                    <li><a href="/recruitment">Recruitment</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
            <div className="w-full flex justify-between items-end mt-6">
                <div className="w-[35%] flex items-center justify-left">
                    <img className="w-[80px] h-[80px]" src={AGROBOT_ICON} alt="Agrobot Icon" />
                    <h1 className="text-[24px] text-[#78BE20] text-left font-bold ml-2">UBC<br/>AGROBOT</h1>
                </div>
                <div className="flex">
                    <a href="https://www.facebook.com"><FaFacebook className="p-1 text-[#88BE22]" size={52} /></a>
                    <a href="https://www.instagram.com"><FaInstagram className=" p-1 text-[#88BE22]" size={52} /></a>
                    <a href="https://www.linkedin.com"><FaLinkedin className=" p-1 text-[#88BE22]" size={52} /></a>
                    <a href="mailto:example@example.com"><FaEnvelope className="p-1 text-[#88BE22]" size={52} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
