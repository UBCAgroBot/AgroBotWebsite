import React from "react";
import { HomeFarm } from "../../assets";
import '../../index.css';
import TypingEffect from "./TypingEffect";

const titleText = [
    "where",
    ["INNOVATION", "AGRICULTURE", "ENGINEERING"],
    "meets",
    ["AGRICULTURE", "ENGINEERING", "INNOVATION"]
];

function HomeBanner() {

    const randomIndex = Math.floor(Math.random() * titleText[1].length);
    return (
        <div className="h-[100vh] w-full bg-[#91D0F2] flex flex-col-reverse md:flex-row justify-center items-center relative z-[0] pt-16">
            <div className='absolute w-full h-full bg-center bg-no-repeat z-[1] opacity-[0.5]'></div>
            <div className="md:w-[50%] flex flex-col items-center justify-center z-[2]">
                <h1 className="h-[220px] md:h-[300px] text-body lg:text-header text-[#3A3A3A] font-bold roboto-custom text-center uppercase">
                    
                    {titleText[0]} <br />
                    <div className="relative">
                        <div className="text-[#78BE20] bg-white rounded-[30px] w-[260px] lg:w-[400px] shadow-xl">
                            <TypingEffect messages={titleText[1]} start_index={randomIndex} /><br />
                        </div>
                        {/* top left */}
                        <div className="bg-white opacity-80 rounded-full h-3 w-3 flex items-center justify-center absolute top-[53px] left-[-17px]"></div>
                        <div className="bg-white opacity-75 rounded-full h-4 w-4 flex items-center justify-center absolute top-[72px] left-[-9px]"></div>

                        {/* top right */}
                        <div className="bg-white opacity-85 rounded-full h-4 w-4 flex items-center justify-center absolute top-[-15px] right-[-25px]"></div>
                        <div className="bg-white opacity-60 rounded-full h-3 w-3 flex items-center justify-center absolute top-[-10px] right-[-0px]"></div>
                        <div className="bg-white opacity-60 rounded-full h-2.5 w-2.5 flex items-center justify-center absolute top-[9px] right-[-12px]"></div>
                    </div>
                    {titleText[2]} <br />
                    <div className="relative">
                        <div className="text-[#78BE20] bg-white rounded-[30px] w-[260px] lg:w-[400px] shadow-xl">
                            <TypingEffect messages={titleText[3]} start_index={randomIndex} /><br />
                        </div>
                    {/* bottom left */}
                        <div className="bg-white opacity-75 rounded-full h-3 w-3 flex items-center justify-center absolute bottom-[50px] left-[-20px]"></div>
                        <div className="bg-white opacity-80 rounded-full h-4 w-4 flex items-center justify-center absolute bottom-[65px] left-[-10px]"></div>
                    {/* bottom right */}
                        <div className="bg-white opacity-60 rounded-full h-4 w-4 flex items-center justify-center absolute bottom-[10px] right-[-22px]"></div>
                        <div className="bg-white opacity-60 rounded-full h-3 w-3 flex items-center justify-center absolute bottom-[-5px] right-[-6px]"></div>
                    </div>
                    
                    
                </h1>
            </div>
            <div className='h-[40%] md:h-auto md:w-[50%] z-[2]'>
                <img className="h-full md:h-auto md:w-[547px]" alt="a farm being manned by cute robots" src={HomeFarm} />
            </div>
        </div>
    );
}

export default HomeBanner;
