import React, { useEffect } from "react";
import TeamAgroBot from '../../assets/image/AgroBotWithTeamOnGrass.jpg'
import { CiClock2 } from "react-icons/ci";
const d3 = require('d3-ease');

function SubteamOverlay({ overlayFn }) {

    async function easeIn() {
        for (let i = 0; i <= 1; i+=0.7) {
            const easedVal = d3.easeCubic(i)
            document.getElementById('outer-overlay').style.opacity = easedVal;
            await new Promise(resolve => setTimeout(resolve, 1));
        }
        document.getElementById('outer-overlay').style.opacity = 1;
    }

    async function easeOut() {
        for (let i = 1; i >= 0; i -= 0.3) {
            const easedVal = d3.easeCubic(i);
            document.getElementById('outer-overlay').style.opacity = easedVal;
            await new Promise(resolve => setTimeout(resolve, 1));
        }
        await new Promise(resolve => setTimeout(resolve, 250));
        overlayFn();
    }

    // Disable scrolling on the body element when component mounts
    useEffect(() => {
        easeIn()

        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible'; // Re-enable scrolling when component unmounts
        };
    }, []);

    // If the click happened on the overlay we close the article.
    // If the click happened on the article we do nothing.
    function CheckClick(event) {
        if (event.target.id === 'outer-overlay') {
            easeOut()
        }
    }

    return (
        <div onClick={CheckClick} id="outer-overlay" className="opacity-0 fixed top-0 left-0 max-h-screen w-screen bg-[#000000b4] z-50 overflow-y-auto transition-opacity duration-500 ease-in-out">
            <div className="box-content text-[28px] w-[750px] bg-[#1E120A] text-white mx-auto my-12 rounded-[46px] p-24 px-32">
                <div className="flex items-center justify-center">
                    <h1 className="mr-4 font-medium text-[96px]">Applied AI</h1>
                    {/* <div className="w-[125px] h-[125px] bg-[#91D0F2F0] rounded-[46px] text-[96px] flex items-center justify-center">🤖</div> */}
                </div>
                <ul className="text-[32px] text-[#BBBBBB] font-medium pt-12">
                    <li>Team Lead: Arman Drismir</li>
                    <li>Projects: Agrobot, AgroPicker</li>
                    <li>Size: ~10 people</li>
                </ul>
                <h3 className="font-bold py-4 pt-12">Key Responsibilities:</h3>
                <ul className="list-disc ml-12 leading-9">
                    <li>Object detection using Tensorflow, and camera</li>
                    <li>Plant classification for distinguishing weeds and plants</li>
                    <li>Computer Vision for navigation</li>
                </ul>
                <p className="mt-12 w-[750px] leading-9">
                UBC Agrobot's Applied AI subteam is a crucial component of the university club, focusing on integrating artificial intelligence into agricultural robotics.
                </p>
            </div>
        </div>
    )
}

export { SubteamOverlay }