import React from "react";
import { FaChevronDown } from 'react-icons/fa';

import { ConcentricOctagons, HomeFarm } from "../../assets";
import '../../index.css';
import * as c from "../../constant/home.js";

import TypingEffect from "./TypingEffect";

function HomeBanner() {

    const randomIndex = Math.floor(Math.random() * c.titleText[1].length);
    return (
        <div className="relative z-[0] flex h-[100vh] w-full flex-col-reverse items-center justify-center bg-[#91D0F2] pt-16 md:flex-row">
            <div className='absolute z-[1] h-full w-full bg-center bg-no-repeat opacity-[0.5]'></div>
            <div className="z-[2] flex flex-col items-center justify-center md:w-[50%]">
                <h1 className="roboto-custom h-[220px] text-center text-body font-bold uppercase text-[#3A3A3A] md:h-[300px] lg:text-header">
                    
                    {c.titleText[0]} <br />
                    <div className="relative">
                        <div className="w-[260px] rounded-[30px] bg-white text-[#78BE20] shadow-xl lg:w-[400px]">
                            <TypingEffect messages={c.titleText[1]} start_index={randomIndex} /><br />
                        </div>
                        {/* top left */}
                        <div className="absolute left-[-17px] top-[53px] flex h-3 w-3 items-center justify-center rounded-full bg-white opacity-80"></div>
                        <div className="absolute left-[-9px] top-[72px] flex h-4 w-4 items-center justify-center rounded-full bg-white opacity-75"></div>

                        {/* top right */}
                        <div className="absolute right-[-25px] top-[-15px] flex h-4 w-4 items-center justify-center rounded-full bg-white opacity-85"></div>
                        <div className="absolute right-[-0px] top-[-10px] flex h-3 w-3 items-center justify-center rounded-full bg-white opacity-60"></div>
                        <div className="absolute right-[-12px] top-[9px] flex h-2.5 w-2.5 items-center justify-center rounded-full bg-white opacity-60"></div>
                    </div>
                    {c.titleText[2]} <br />
                    <div className="relative">
                        <div className="w-[260px] rounded-[30px] bg-white text-[#78BE20] shadow-xl lg:w-[400px]">
                            <TypingEffect messages={c.titleText[3]} start_index={randomIndex} /><br />
                        </div>
                    {/* bottom left */}
                        <div className="absolute bottom-[50px] left-[-20px] flex h-3 w-3 items-center justify-center rounded-full bg-white opacity-75"></div>
                        <div className="absolute bottom-[65px] left-[-10px] flex h-4 w-4 items-center justify-center rounded-full bg-white opacity-80"></div>
                    {/* bottom right */}
                        <div className="absolute bottom-[10px] right-[-22px] flex h-4 w-4 items-center justify-center rounded-full bg-white opacity-60"></div>
                        <div className="absolute bottom-[-5px] right-[-6px] flex h-3 w-3 items-center justify-center rounded-full bg-white opacity-60"></div>
                    </div>
                    
                    
                </h1>
            </div>
            <div className='z-[2] h-[40%] md:h-auto md:w-[50%]'>
                <img className="h-full md:h-auto md:w-[547px]" alt="a farm being manned by cute robots" src={HomeFarm} />
            </div>
        </div>
    );
}

export default HomeBanner;
