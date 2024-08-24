import React from "react";
import { MdChevronRight } from 'react-icons/md';

import { TeamPhoto } from "../../assets/image";
import { S2Title, S2BenefitsParagraph, S2ButtonText } from "../../constant";
import '../../index.css';

function SponsorshipS2() {

    // This will turn the "<br />" in to a real <br />
    const processedS2Title = S2Title.split('<br />').map((processedS2Title, index) => (
        <React.Fragment key={index}>
            {processedS2Title}
            {index < processedS2Title.length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <div id="sponsorshipDiv" className="mx-auto my-[7.5%] min-h-[55vh] w-[80%]">
            <div className="my-16 flex justify-center md:my-0">
                <div className="w-0 md:w-[47.5%] relative inline-block mr-[5%] style={{ maxWidth: '47.5%' }}">
                    <img src={TeamPhoto} alt="Team" className="box-shadow absolute left-0 top-0 z-10 rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="flex w-full flex-col justify-center md:w-[47.5%]">
                    <h2 className=" pb-10 text-4xl">{processedS2Title}</h2>
                    <p className="pb-10">{S2BenefitsParagraph}</p>
                    <div className="flex justify-center">
                        <a href={`${process.env.PUBLIC_URL}/assets/UBC-AgroBot-Sponsorship-Package-2020-1.pdf`} target="_blank" rel="noopener noreferrer" className="flex w-auto items-center justify-center rounded-[14px] bg-[#002601] p-4 font-bold text-white">
                            {S2ButtonText} <MdChevronRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorshipS2;