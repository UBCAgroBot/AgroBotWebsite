import React from "react";
import { AgroponicsS2 } from "../../assets";
import { SectionHeader } from "../common";
import { FaChevronRight } from 'react-icons/fa';
import { ststemComponents, systemComponents } from "../../constant/agroponics"

function SysComponents() {
    return (
        <div className='w-[80%] m-auto my-[10%]'>
            <SectionHeader>{systemComponents[0]}</SectionHeader>
            <div className="flex flex-col md:flex-row justify-between items-center py-8 w-full from-white to-[#e8ecf4] bg-gradient-to-b rounded-[30px] shadow-2xl p-6 my-8">
                <div className="h-[47%] w-full md:w-[47%] md:h-full flex text-black">
                    <ul className="h-full flex flex-col justify-center">
                        {systemComponents[1].map((component, index) => (
                            <li key={index} className="mb-[6%] flex items-center">
                                <FaChevronRight color={'#88BE22'} size={'20px'} />
                                {component}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-[47%] w-full md:w-[47%] md:h-full">
                    <img src={AgroponicsS2} alt="Hydroponics System" className="w-full h-full object-cover rounded-[30px] bg-[#d8d4dc]" />
                </div>
            </div>
        </div>
    );
};

export default SysComponents;