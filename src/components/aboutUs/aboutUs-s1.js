import React from "react";
import { GroupWork, TeamDiscussion } from "../../assets/image";
import '../../index.css';
import { introText, introTitle } from "../../constant/aboutUs";

function AboutUsS1() {

    return (
        <div id="sponsorshipDiv" className="my-[7.5%] w-[80%] mx-auto">
            <div className="flex justify-center my-16 md:my-0">
                <div className="w-0 md:w-[30%] relative inline-block mr-[5%] style={{ maxWidth: '47.5%' }}">
                    <img src={TeamDiscussion} alt="Team" className="box-shadow absolute top-0 left-0 z-10 rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="w-full md:w-[50.5%] flex flex-col justify-center">
                    <h2 className=" text-4xl pb-10">{introTitle}</h2>
                    <img src={TeamDiscussion} alt="Team" className="md:hidden box-shadow rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                    <p className="pb-10 md:pt-0 pt-10 text-md md:pt-0 sm:pt-10">{introText}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsS1;