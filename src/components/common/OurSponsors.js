import React from 'react';

import { fcc, apsc, chbe, ece, egbc, gage, ieee, lfs, proto, solidworks, verdi, } from '../../assets';
import { headers } from '../../constant/sponsorFooter';
import { SectionHeader } from '../common';

function SponsorSection(props) {
    const { children, images } = props;

    return (
        <div className="my-6">
            <div className='flex w-full items-center justify-center'>
                <h2 className="text-bold z-20 bg-[#F8F7F1] px-4 text-lg">{children}</h2>
            </div>
            <div className='mb-[0.9rem] mt-[-0.9rem] flex items-center justify-center'>
                <div className='z-10 h-[2px] w-[75%] bg-black'></div>
            </div>
            <div className="flex flex-wrap items-center justify-evenly">
                {images.map((image, index) => (
                    <img className='m-4' key={index} src={image} alt={`Sponsor ${index}`} />
                ))}
            </div>
        </div>
    );
}

function OurSponsor() {
    return (
        <div className='my-[10vh] w-full'>
            <div className="mx-auto w-[80%] pt-[10vh]">
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