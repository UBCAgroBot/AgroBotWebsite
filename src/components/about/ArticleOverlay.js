import React, { useEffect, useState } from "react";
import TeamAgroBot from '../../assets/image/AgroBotWithTeamOnGrass.jpg'
import AgroBotBlueBg from '../../assets/image/AgroBotBlueBg.png'
import StudentsWorking from '../../assets/image/studentsWorking.jpg'
import AgroPickerBlueBg from '../../assets/image/AgroPickerBluBg.png'
import { CiClock2 } from "react-icons/ci";
const d3 = require('d3-ease');

function Comp2023() {
    return (
        <>
            <h1 className="font-bold text-[42px] mb-6">UBC Agrobot takes home gold!</h1>
            <div className="text-[16px] my-6 flex">
                <img alt="" className="bg-sky-400 w-[40px] h-[40px] rounded-full mr-2" />
                <div>
                    <p>By: Arman Drismir</p>
                    <p><CiClock2 className="inline" /> 5 minute read · Updated 7:10PM PST, Mon Jul 15, 2024</p>
                </div>
            </div>
            <img alt="article" src={TeamAgroBot} width="750" />
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
        </>
    )
}

function ChasisPrototype() {
    return (
        <>
            <h1 className="font-bold text-[42px] mb-6">Chassis Prototype</h1>
            <div className="text-[16px] my-6 flex">
                <img alt="" className="bg-sky-400 w-[40px] h-[40px] rounded-full mr-2" />
                <div>
                    <p>By: Arman Drismir</p>
                    <p><CiClock2 className="inline" /> 5 minute read · Updated 7:10PM PST, Mon Jul 15, 2024</p>
                </div>
            </div>
            <img alt="article" src={AgroBotBlueBg} width="750" />
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
                environmental impact.
            </p>
        </>
    )
}

function AgroPonicsLaunch() {
    return (
        <>
            <h1 className="font-bold text-[42px] mb-6">AgroPonics Launches!</h1>
            <div className="text-[16px] my-6 flex">
                <img alt="" className="bg-sky-400 w-[40px] h-[40px] rounded-full mr-2" />
                <div>
                    <p>By: Arman Drismir</p>
                    <p><CiClock2 className="inline" /> 5 minute read · Updated 7:10PM PST, Mon Jul 15, 2024</p>
                </div>
            </div>
            <img alt="article" src={StudentsWorking} width="750" />
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
                environmental impact.
            </p>
        </>
    )
}

function AgroPickerLaunch() {
    return (
        <>
            <h1 className="font-bold text-[42px] mb-6">Introducing AgroPicker!</h1>
            <div className="text-[16px] my-6 flex">
                <img alt="" className="bg-sky-400 w-[40px] h-[40px] rounded-full mr-2" />
                <div>
                    <p>By: Arman Drismir</p>
                    <p><CiClock2 className="inline" /> 5 minute read · Updated 7:10PM PST, Mon Jul 15, 2024</p>
                </div>
            </div>
            <img alt="article" src={AgroPickerBlueBg} width="750" />
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
                environmental impact.
            </p>
        </>
    )
}

function ArticleOverlay({ deactivateFn, articleName })
{
    const [Content, setContent] = useState(<Comp2023 />);

    async function easeIn() {
        for (let i = 0; i <= 1; i+=0.01) {
            const easedVal = d3.easeCubic(i)
            document.getElementById('outer-overlay').style.opacity = i;
            await new Promise(resolve => setTimeout(resolve, 1));
        }
        document.getElementById('outer-overlay').style.opacity = 1;
    }

    async function easeOut() {
        for (let i = 1; i >= 0; i -= 0.01) {
            const easedVal = d3.easeCubic(i);
            document.getElementById('outer-overlay').style.opacity = easedVal;
            await new Promise(resolve => setTimeout(resolve, 1));
        }
        document.getElementById('outer-overlay').style.opacity = 0;
        deactivateFn();
    }

    // Disable scrolling on the body element when component mounts
    useEffect(() => {

        switch (articleName) {
            case 'Comp2023':
                setContent(<Comp2023 />)
                break;
            case 'ChasisPrototype':
                setContent(<ChasisPrototype />)
                break;
            case 'AgroPonicsLaunch':
                setContent(<AgroPonicsLaunch />)
                break;
            case 'AgroPickerLaunch':
                setContent(<AgroPickerLaunch />)
                break;
            default:
                console.log("Article not found. Defaulting to Comp 2023")
                setContent(<Comp2023 />)
        }

        document.body.style.overflow = 'hidden';

        easeIn()

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
        <div
            onClick={CheckClick} 
            id="outer-overlay"
            className="opacity-0 fixed top-0 left-0 max-h-screen w-screen bg-[#000000b4] z-50 overflow-y-auto" 
            >
            <div className="box-content w-[750px] bg-white mx-auto my-12 rounded-[46px] p-24 px-32">
                {Content}
            </div>
        </div>
    )
}

export { ArticleOverlay }