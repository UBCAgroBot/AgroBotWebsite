import React from "react";
import { HomeChemicalBalancing } from "../../assets";
import { SectionHeader } from "../common";
import { chemBalSys } from "../../constant/agroponics";

function ChemicalBalancing() {
    return (
        <div className='w-[80%] mx-auto my-[10%]'>
            <SectionHeader>{chemBalSys[0]}</SectionHeader>
            <div className="w-full flex flex-col-reverse lg:flex-row rounded-[30px] my-8 bg-gradient-to-br from-[#1E293B] to-76% to-[rgb(7,38,0)] from-23%">
                <img className="w-full lg:w-[40%] rounded-[20px] object-cover" src={HomeChemicalBalancing} alt="HomeChemicalBalancing" />

                <div className="w-full my-auto p-8 text-white leading-6 text-[20px] tracking-wide">
                    <p className="m-[1rem]">
                        {chemBalSys[1]}
                    </p>
                    <p className="m-[1rem]">
                        {chemBalSys[2]}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ChemicalBalancing;