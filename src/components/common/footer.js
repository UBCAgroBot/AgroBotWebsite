import React, { useState, useEffect, useRef } from 'react';
import { AGROBOT_ICON } from "../../assets";
import { Link } from 'react-router-dom';
import { FaFacebook, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full px-[5%] py-8 bg-[#2E1B0F] flex flex-col justify-between items-center">
            <div className="w-full my-4 lg:bg-[#46372c] rounded-2xl">
                <ul className="text-[#78BE20] font-bold text-[24px] flex flex-col lg:flex-row justify-between items-center text-center">
                    <li className="bg-[#46372c] p-2 my-2 w-[180px] rounded-xl"><Link to="/">Home</Link></li>
                    <li className="bg-[#46372c] p-2 my-2 w-[180px] rounded-xl"><Link to="/agrobot">Projects</Link></li>
                    <li className="bg-[#46372c] p-2 my-2 w-[180px] rounded-xl"><Link to="/sponsorship">Sponsorship</Link></li>
                    <li className="bg-[#46372c] p-2 my-2 w-[180px] rounded-xl"><Link to="/recruitment">Recruitment</Link></li>
                    <li className="bg-[#46372c] p-2 my-2 w-[180px] rounded-xl"><Link to="/contact">Contact</Link></li>
                    <li className="bg-[#46372c] p-2 my-2 w-[180px] rounded-xl"><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
                <div className="my-8 flex justify-center items-center lg:mb-0">
                    <img className="w-[80px] h-[80px]" src={AGROBOT_ICON} alt="Agrobot Icon" />
                    <h1 className="text-[24px] text-[#78BE20] text-left font-bold ml-2">UBC<br/>AGROBOT</h1>
                </div>
                <div className="my-4 flex lg:mt-auto">
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
