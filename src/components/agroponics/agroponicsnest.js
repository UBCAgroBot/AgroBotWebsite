import React from "react";
import { AgroponicsRooftop } from '../../assets';
import { SectionHeader } from "../common";
import { Implementation } from "../../constant/agroponics"

function Agroponicsnest() {
    return (
        <div className='w-[80%] mx-auto my-[10%]'>
            <SectionHeader>{Implementation[0]}</SectionHeader>
            <div className="w-full flex flex-col lg:flex-row-reverse rounded-[30px] my-8 bg-gradient-to-br from-[#597a00] to-76% to-[#1E293B] from-23%">
                <img className="w-full lg:w-[40%] rounded-[20px] object-cover" src={AgroponicsRooftop} alt="HomeChemicalBalancing" />

                <div className="w-full my-auto p-8 text-white leading-6 text-[20px] tracking-wide">
                    <p className="m-[1rem]">
                        {Implementation[1]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Agroponicsnest;