import React, { useEffect } from "react";
import TeamAgroBot from '../../assets/image/AgroBotWithTeamOnGrass.jpg'
import { CiClock2 } from "react-icons/ci";

function ArticleOverlay({ overlayFn }) {

    // Disable scrolling on the body element when component mounts
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible'; // Re-enable scrolling when component unmounts
        };
    }, []);

    // If the click happened on the overlay we close the article.
    // If the click happened on the article we do nothing.
    function CheckClick(event) {
        if (event.target.id === 'outer-overlay') {
            overlayFn(false)
        }
    }

    return (
        <div onClick={CheckClick} id="outer-overlay" className="fixed top-0 left-0 max-h-screen w-screen bg-[#000000b4] z-50 overflow-y-auto transition-opacity duration-500 ease-in-out">
            <div className="box-content w-[750px] bg-white mx-auto my-12 rounded-[46px] p-24 px-32">
                <h1 className="font-bold text-[42px] mb-6">UBC Agrobot takes home gold!</h1>
                <div className="text-[16px] my-6 flex">
                    <img className="bg-sky-400 w-[40px] h-[40px] rounded-full mr-2"/>
                    <div>
                        <p>By: Arman Drismir</p>
                        <p><CiClock2 className="inline"/> 5 minute read · Updated 7:10PM PST, Mon Jul 15, 2024</p>
                    </div>
                </div>
                <img src={TeamAgroBot} width="750" />
                <p className="mt-12 text-[20px] leading-7 w-[750px]">
                    <strong>Vancouver (AgroBot) - </strong>
                    UBC Agrobot, a student engineering club at the University of British Columbia, 
                    recently achieved a significant milestone by winning a gold medal for their 
                    <br /><br />
                    innovative agricultural robot. The team's creation, an autonomous fertilizing 
                    machine, showcased advanced capabilities in precision agriculture. By utilizing 
                    sensors, GPS technology, and machine learning algorithms, the robot can navigate 
                    fields independently, identify individual plants, and apply fertilizer with 
                    <br /><br />
                    remarkable accuracy. This achievement not only demonstrates the club's technical 
                    prowess but also highlights the potential for automation to revolutionize farming 
                    <br /><br />
                    <strong className="leading-[2em] block">Biden won’t speculate on future of 2024 race</strong>
                    practices, potentially increasing crop yields while reducing resource waste and 
                    environmental impact.</p>
            </div>
        </div>
    )
}

export { ArticleOverlay }