import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full px-[5%] py-8 bg-[#2E1B0F] flex flex-col justify-between items-center">
            <div className="w-full my-4 lg:bg-[#46372c] rounded-2xl">
                <ul className="text-[#78BE20] font-bold text-[20px] flex flex-col lg:flex-row justify-between items-center text-center px-12">
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link href="/">Home</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link href="/agrobot">AgroBot</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link href="/agroponics">AgroPonics</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link href="/sponsorship">Sponsorship</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link href="/recruitment">Recruitment</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link href="/contact">Contact</Link></li>
                    <li className="bg-[#46372c] lg:bg-none p-2 my-2 rounded-xl"><Link href="/about">About</Link></li>
                </ul>
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
                <div className="my-8 flex justify-center items-center lg:mb-0">
                    <img className="w-[80px] h-[80px]" src="/img/AgrobotIcon.png" alt="Agrobot Icon" />
                    <h1 className="text-[24px] text-[#78BE20] text-left font-bold ml-2">UBC<br/>AGROBOT</h1>
                </div>
                <div className="my-4 flex lg:mt-auto">
                    <a target="_blank" href="https://www.instagram.com/ubcagrobot/"><FaInstagram className=" p-1 text-[#88BE22]" size={52} /></a>
                    <a target="_blank" href="https://www.linkedin.com/company/ubc-agrobot/mycompany/"><FaLinkedin className=" p-1 text-[#88BE22]" size={52} /></a>
                    <a href="mailto:ubcagrobot@gmail.com"><FaEnvelope className="p-1 text-[#88BE22]" size={52} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
