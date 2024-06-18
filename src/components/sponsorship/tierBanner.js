import React from "react";

function TierBanner({ tierElements, starImg, tierColor }) {

    const { name, price, perks } = tierElements;

    return (
        <div className="bg-white w-full m-[1%] rounded-[14px] text-center flex flex-col">
            <div className='flex-grow'>
                <div className="flex justify-center items-center pt-10">
                    <img src={starImg} alt="sponsor star" className="h-24"></img>
                </div>
                <h4 className="text-[30px] font-bold p-5">{name}</h4>
                <h5 className="p-2 font-bold text-[24px]" style={{ color: tierColor }}>{price}</h5>
                <ul className="p-5">
                    {perks.map((perk, index) => (
                        <>
                            <li className='p-5' key={index}>{perk}</li>
                            <div className='w-full h-[1px] bg-[#979797]'></div>
                        </>
                    ))}
                </ul>
            </div>
            <a href="https://donate.support.ubc.ca/page/20924/donate/1?transaction.dirgift=AgroBot%20G2551" target="_blank" className="p-4 m-4 border-2 rounded-[14px] border-[#8cbc24] text-[#8cbc24] font-bold">Sponsor Us</a>
        </div>
    );
}

export default TierBanner;