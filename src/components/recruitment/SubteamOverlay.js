import React, { useEffect } from "react";
import TeamAgroBot from '../../assets/image/AgroBotWithTeamOnGrass.jpg'
import { CiClock2 } from "react-icons/ci";

function SubteamOverlay({ overlayFn }) {

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
            <div className="box-content text-[28px] w-[750px] bg-[#1E120A] text-white mx-auto my-12 rounded-[46px] p-24 px-32">
                <h1 className="font-bold text-[42px] mb-6">Applied AI</h1>
                <div className="bg-[#91D0F2] rounded-[46px] w-[750px] h-[150px] flex justify-center items-center text-[128px]">🤖</div>
                <h3 className="font-bold py-4 pt-8">Key Responsibilities:</h3>
                <ul className="list-disc ml-12 leading-9">
                    <li>Object detection using Tensorflow, and camera</li>
                    <li>Plant classification for distinguishing weeds and plants</li>
                    <li>Computer Vision for navigation</li>
                </ul>
                <p className="mt-8 w-[750px] leading-9">
                    UBC Agrobot's Applied AI subteam is a crucial component of the university club, focusing on integrating artificial intelligence into agricultural robotics. This dedicated group of students works on developing and implementing AI algorithms to enhance the capabilities of the club's agricultural robots. Their tasks likely include machine learning for crop identification, computer vision for navigation and obstacle avoidance, and data analysis to optimize farming processes. The Applied AI team collaborates closely with other subteams to ensure seamless integration of AI technologies into the physical robotic systems. By leveraging cutting-edge AI techniques, they aim to create more efficient, precise, and autonomous agricultural solutions that can address real-world farming challenges.
                </p>
            </div>
        </div>
    )
}

export { SubteamOverlay }