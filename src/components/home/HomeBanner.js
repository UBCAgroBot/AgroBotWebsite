import React from "react";
import { ConcentricOctagons, HomeFarm } from "../../assets";
import { FaChevronDown } from 'react-icons/fa';
import '../../index.css';
import TypingEffect from "./TypingEffect";
import * as c from "../../constant/home.js";

function HomeBanner() {

    const randomIndex = Math.floor(Math.random() * c.titleText[1].length);
    return (
        <div className="h-[90vh] w-full bg-[#91D0F2] flex flex-col-reverse md:flex-row justify-center items-center relative z-[0]">
            <div className='absolute w-full h-full bg-center bg-no-repeat z-[1] opacity-[0.5]'></div>
            <div className="md:w-[50%] flex flex-col items-center justify-center z-[2]">
                <h1 className="h-[220px] md:h-[300px] text-[38px] md:text-[48px] text-[#3A3A3A] font-bold roboto-custom text-center uppercase">
                    
                    {c.titleText[0]} <br />
                    <div className="relative">
                        <div className="bg-white rounded-[30px] w-[400px] shadow-xl">
                            <TypingEffect messages={c.titleText[1]} start_index={randomIndex} /><br />
                        </div>
                        {/* top left */}
                        <div className="bg-white opacity-80 rounded-full h-3 w-3 flex items-center justify-center absolute top-[53px] left-[-17px]"></div>
                        <div className="bg-white opacity-75 rounded-full h-4 w-4 flex items-center justify-center absolute top-[72px] left-[-9px]"></div>

                        {/* top right */}
                        <div className="bg-white opacity-85 rounded-full h-4 w-4 flex items-center justify-center absolute top-[-15px] right-[-25px]"></div>
                        <div className="bg-white opacity-60 rounded-full h-3 w-3 flex items-center justify-center absolute top-[-10px] right-[-0px]"></div>
                        <div className="bg-white opacity-60 rounded-full h-2.5 w-2.5 flex items-center justify-center absolute top-[9px] right-[-12px]"></div>
                    </div>
                    {c.titleText[2]} <br />
                    <div className="relative">
                        <div className="bg-white rounded-[30px] w-[400px] shadow-xl">
                            <TypingEffect messages={c.titleText[3]} start_index={randomIndex} /><br />
                        </div>
                    {/* bottom left */}
                        <div className="bg-white opacity-75 rounded-full h-3 w-3 flex items-center justify-center absolute bottom-[50px] left-[-20px]"></div>
                        <div className="bg-white opacity-80 rounded-full h-4 w-4 flex items-center justify-center absolute bottom-[65px] left-[-10px]"></div>
                    {/* bottom right */}
                        <div className="bg-white opacity-60 rounded-full h-4 w-4 flex items-center justify-center absolute bottom-[10px] right-[-22px]"></div>
                        <div className="bg-white opacity-60 rounded-full h-3 w-3 flex items-center justify-center absolute bottom-[-5px] right-[-6px]"></div>
                    </div>
                    
                    
                </h1>
                <button
                    className="w-[316px] h-[50px] mt-[20px] bg-[#3A3A3A] rounded-md text-[#F8F7F1] font-bold"
                    onClick={() => window.scrollTo({
                        top: window.innerHeight * 0.9, // Need to multiply by 0.9 so that nav does not cover next section
                        behavior: 'smooth'
                    })}>
                    <h3 className="flex items-center justify-center ">{c.titleButton} <FaChevronDown size='14px' className='mx-1 mt-1' /></h3>
                </button>
            </div>
            <div className='h-[40%] md:h-auto md:w-[50%] z-[2]'>
                <img className="h-full md:h-auto md:w-[547px]" alt="a farm being manned by cute robots" src={HomeFarm} />
            </div>
        </div>
    );
}

export default HomeBanner;