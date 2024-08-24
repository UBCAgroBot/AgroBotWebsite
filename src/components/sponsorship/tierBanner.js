import React from "react";

function TierBanner({ tierElements, starImg, tierColor }) {

    const { name, price, perks } = tierElements;

    return (
        <div className="m-[1%] flex w-full flex-col rounded-[14px] bg-white text-center">
            <div className='flex-grow'>
                <div className="flex items-center justify-center pt-10">
                    <img src={starImg} alt="sponsor star" className="h-24"></img>
                </div>
                <h4 className="p-5 text-[30px] font-bold">{name}</h4>
                <h5 className="p-2 text-[24px] font-bold" style={{ color: tierColor }}>{price}</h5>
                <ul className="p-5">
                    {perks.map((perk, index) => (
                        <>
                            <li className='p-5' key={index}>{perk}</li>
                            <div className='h-[1px] w-full bg-[#979797]'></div>
                        </>
                    ))}
                </ul>
            </div>
            <a href="https://donate.support.ubc.ca/page/20924/donate/1?transaction.dirgift=AgroBot%20G2551" target="_blank" className="m-4 rounded-[14px] border-2 border-[#8cbc24] p-4 font-bold text-[#8cbc24]" rel="noreferrer">Sponsor Us</a>
        </div>
    );
}

export default TierBanner;