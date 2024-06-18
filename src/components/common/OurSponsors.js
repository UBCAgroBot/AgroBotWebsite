import React from 'react';

import { fcc, apsc, chbe, ece, egbc, gage, ieee, lfs, proto, solidworks, verdi, } from '../../assets';

import { headers } from '../../constant/sponsorFooter';
import { SectionHeader } from '../common';

function SponsorSection(props) {
    const { children, images } = props;

    return (
        <div className="my-6">
            <div className='w-full flex items-center justify-center'>
                <h2 className="text-lg text-bold px-4 bg-[#F8F7F1] z-20">{children}</h2>
            </div>
            <div className='flex items-center justify-center mt-[-0.9rem] mb-[0.9rem]'>
                <div className='w-[75%] h-[2px] bg-black z-10'></div>
            </div>
            <div className="flex justify-evenly items-center flex-wrap">
                {images.map((image, index) => (
                    <img className='m-4' key={index} src={image} alt={`Sponsor ${index}`} />
                ))}
            </div>
        </div>
    );
}

function OurSponsor() {
    return (
        <div className='w-full my-[10vh]'>
            <div className="w-[80%] mx-auto pt-[10vh]">
                <SectionHeader>{headers[0]}</SectionHeader>
                <SponsorSection images={[apsc, fcc, ece]}>{headers[1]}</SponsorSection>
                <SponsorSection images={[chbe, lfs, ieee, gage]}>{headers[2]}</SponsorSection>
                <SponsorSection images={[egbc, verdi]}>{headers[3]}</SponsorSection>
                <SponsorSection images={[proto, solidworks]}>{headers[4]}</SponsorSection>
            </div>
        </div>
    );
}

export default OurSponsor;