import React from "react";
import { TeamPhoto } from "../../assets/image";
import { S2Title, S2BenefitsParagraph, S2ButtonText } from "../../constant";
import { MdChevronRight } from 'react-icons/md';
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
        <div id="sponsorshipDiv" className="min-h-[55vh] my-[7.5%] w-[80%] mx-auto">
            <div className="flex justify-center my-16 md:my-0">
                <div className="w-0 md:w-[47.5%] relative inline-block mr-[5%] style={{ maxWidth: '47.5%' }}">
                    <img src={TeamPhoto} alt="Team" className="box-shadow absolute top-0 left-0 z-10 rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="w-full md:w-[47.5%] flex flex-col justify-center">
                    <h2 className=" text-4xl pb-10">{processedS2Title}</h2>
                    <p className="pb-10">{S2BenefitsParagraph}</p>
                    <div className="flex justify-center">
                        <a href={`${process.env.PUBLIC_URL}/assets/UBC-AgroBot-Sponsorship-Package-2020-1.pdf`} target="_blank" rel="noopener noreferrer" className="p-4 w-auto rounded-[14px] bg-[#002601] text-white font-bold flex justify-center items-center">
                            {S2ButtonText} <MdChevronRight />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorshipS2;