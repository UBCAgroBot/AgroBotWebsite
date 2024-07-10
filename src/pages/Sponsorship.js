import React from "react";

const Sponsorship = () => {
    return (
        <div className="min-h-screen pt-64 pb-32 px-48">
            <h1 className="text-[96px] font-bold">Sponsor <br />UBC Agrobot</h1>
            <p className="text-[48px] font-medium w-[100%]">Sponsors are the lifeblood of UBC Agrobot. If you would like to help us build the future of farming send us an email at <u>agrobot@gmail.com</u>. For  detailed information about sponsorship you can read our <u>sponsorship package</u>.</p>
            <h2 className="text-[64px] font-bold pt-32">Sponsorship tiers</h2>
            <div className="flex justify-between pt-12">
                <div className="w-[400px] h-[700px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-12">
                    <div className="w-[300px] h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
                        <p className="text-[128px]">🌱</p>
                    </div>
                    <h3 className="font-medium text-[48px] text-[#78BE20] pt-8">$100+</h3>
                    <h3 className="font-medium text-[48px] text-white pt-12">Seedling</h3>
                    <ul className="text-white text-[24px] pt-8">
                        <li>&bull; logo on our website</li>
                        <li>&bull; logo on Agrobot marketing</li>
                    </ul>
                </div>
                <div className="w-[400px] h-[700px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-12">
                    <div className="w-[300px] h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
                        <p className="text-[128px]">🪴</p>
                    </div>
                    <h3 className="font-medium text-[48px] text-[#78BE20] pt-8">$500+</h3>
                    <h3 className="font-medium text-[48px] text-white pt-12">Sapling</h3>
                    <ul className="text-white text-[24px] pt-8">
                        <li>&bull; logo on our website</li>
                        <li>&bull; logo on Agrobot marketing</li>
                    </ul>
                </div>
                <div className="w-[400px] h-[700px] bg-[#2E1B0F] rounded-[46px] flex flex-col items-center pt-12">
                    <div className="w-[300px] h-[250px] bg-[#1F5200] rounded-[46px] flex justify-center items-center">
                        <p className="text-[128px]">🌳</p>
                    </div>
                    <h3 className="font-medium text-[48px] text-[#78BE20] pt-8">$1000+</h3>
                    <h3 className="font-medium text-[48px] text-white pt-12">Pine</h3>
                    <ul className="text-white text-[24px] pt-8">
                        <li>&bull; logo on our website</li>
                        <li>&bull; logo on Agrobot marketing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sponsorship;