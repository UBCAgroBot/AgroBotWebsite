import React from "react";
import { MdChevronRight } from 'react-icons/md';

import { TeamDiscussion } from "../../assets";
import { SectionHeader } from "../../components";
import * as t from "../../constant/agrobot";


function WantToHelp() {
    
    const gradient = { background: `linear-gradient(35deg, rgba(207,239,148,1) 0%, rgba(207,239,148,0.75) 35%, rgba(207,239,148,0.75) 65%, rgba(207,239,148,1) 100%)` }

    return (
        <div className='mx-auto my-[20vh] w-[80%]'>
            <SectionHeader>{t.want_to_help[0]}</SectionHeader>
            <div className='my-4 flex w-full justify-between'>
                <div style={gradient} className='flex w-full flex-col items-center justify-center rounded-[14px] p-8 lg:w-[49%]'>
                    <p className='mb-4 text-justify text-lg'>{t.want_to_help[1]}</p>
                    <button className='flex items-center justify-center rounded-md bg-[#202020] px-4 py-2 font-bold text-white' onClick={() => window.location.href = '/recruitment'}>{t.want_to_help[2]} <MdChevronRight/></button>
                </div>
                <div className='hidden w-[49%] lg:flex'>
                    <img src={TeamDiscussion} alt='modular-chassis' className='w-full rounded-[14px]'></img>
                </div>
            </div>
        </div>
    );
}

export default WantToHelp;