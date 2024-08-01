import React, { useState } from "react";
import Slider from "react-slick";

import { ieee, fcc, ece, chbe, lfs, gage } from "../assets";
import { FaArrowRight } from "react-icons/fa6";

function SponsorTier({ title, emoji, price, bullets }) {

    return (
        <div className="w-[312px] h-[700px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-4">
            <div className="w-[286px] h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
                <p className="text-[128px]">{emoji}</p>
            </div>
            <h3 className="font-medium text-[32px] text-[#78BE20] pt-8">{price}</h3>
            <h3 className="font-medium text-[32px] text-white pt-12">{title}</h3>
            <ul className="text-white text-[24px] pt-8 w-[70%] list-disc">
                {bullets.map((val, index) => (
                        <li key={index}>{val}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const Sponsorship = () => {

    const [leftOffset, setLeftOffset] = useState(0)

    const items = [
        { image: ieee, alt: 'ieee' },
        { image: fcc, alt: 'fcc' },
        { image: ece, alt: 'ece' },
        { image: chbe, alt: 'chbe' },
        { image: lfs, alt: 'lfs' },
        { image: gage, alt: 'gage' },
    ];

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        speed: 4000 * items.length,
        autoplaySpeed: 0,
        slidesToScroll: items.length,
        autoplay: true,
        cssEase: 'linear',
        rtl: true,
    };

    return (
        <>
            <div className="pt-48 w-[1000px] mx-auto">
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <div className="min-h-screen pb-24">
                    <h1 className="text-[48px] font-bold">Sponsor <br />UBC Agrobot</h1>
                    <p className="text-[32px] font-medium w-[100%] pt-5">Sponsors are the lifeblood of UBC Agrobot. If you would like to help us build the future of farming send us an email at <a href="mailto:ubcagrobot@gmail.com"><u>agrobot@gmail.com</u></a>. For  detailed information about sponsorship you can read our <u>sponsorship package</u>.</p>
                    <h2 className="text-[32px] font-bold pt-16">Sponsorship tiers</h2>
                    <div className="flex justify-between pt-12">
                        <SponsorTier title="Seedling" emoji="🌱" price="$100+"  bullets={["logo on our website", "logo on marketing"]}/>
                        <SponsorTier title="Sapling"  emoji="🪴" price="$500+"  bullets={["logo on our website", "logo on marketing"]}/>
                        <SponsorTier title="Bonsai"   emoji="🌳" price="$1000+" bullets={["logo on our website", "logo on marketing"]}/>
                    </div>
                </div>
            </div>
            <Slider {...settings} className="h-[300px] py-[50px] bg-[#FFFFFF80] w-screen flex justify-center overflow-hidden">
                {items.map((item, index) => (
                    <div className="h-[200px] px-8" key={index}>
                        <img className="h-full" src={item.image} alt={item.alt} />
                    </div>
                ))}
            </Slider>
            <div className="flex flex-col justify-center items-center py-32">
                <p className="bg-[#2E1B0F] text-white text-[48px] font-medium text-center leading-[80px] p-8 rounded-[46px]">We would love to have you!<br />
                    <a href="mailto:ubcagrobot@gmail.com" className="font-bold cursor-pointer text-[56px] decoration-[#75cfff] text-[#75cfff]">Sponsor us <FaArrowRight className="inline" color="#68beed" /></a></p>
            </div>
        </>
    );
};

export default Sponsorship;