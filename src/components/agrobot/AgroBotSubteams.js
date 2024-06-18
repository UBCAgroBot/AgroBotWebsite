import React from "react";
import { HomeModularChassis, WorkingWithWires, HomeAutomation, agrobotChassisTemp } from "../../assets";
import { SectionHeader } from "../common";
import * as t from "../../constant/agrobot"

function Subteam(props) {
    const { fromColor, toColor, img } = props;

    const bannerStyle = {
        background: `linear-gradient(to top, ${fromColor}, ${toColor})`
    };

    return (
        <div style={bannerStyle} className={`w-full rounded-[14px] p-10 flex flex-col md:flex-row text-black my-[5vh]`}>
            <div className='md:w-[47.5%] md:mr-[5%]'>
                <h2 className='text-4xl mb-[2%]'>{props.children}</h2>
                <div className='py-4 md:py-0 text-[#1a491c]'>
                    {props.hlights.map((highlight, index) => (
                        <li key={index} className='min-w-[45%] mr-[5%]'>{highlight}</li>
                    ))}
                </div>
                <p className='mt-[5%] text-justify'>{props.text}</p>
            </div>
            <div className='pt-4 md:pt-0 md:w-[47.5%] flex justify-center align-middle'>
                <img src={img} alt='modular-chassis' className='object-cover rounded-[14px]'></img>
            </div>
        </div>
    );
}

function AgroBotSubteams() {
    const chassHlights = t.chassis[1]
    const chassText = t.chassis[2]
    const extHlights = t.extermination[1]
    const extText = t.extermination[2]
    const navHlights = t.navigation[1]
    const navText = t.navigation[2]
    const appAIHlights = t.appliedAI[1]
    const appAIText = t.appliedAI[2]
    const chassGradient = { fromColor: '#CC998D50', toColor: '#CC998D80' };
    const extGradient = { fromColor: '#7D7ABC50', toColor: '#7D7ABC80' };
    const navGradient = { fromColor: '#750D3750', toColor: '#750D3780' };
    const appAIGradient = { fromColor: '#226F5450', toColor: '#226F5480' };

    return (
        <div className='w-[80%] mx-auto my-[20vh]'>
            <SectionHeader>Subteams</SectionHeader>
            {/* made gradients to make the color of agrobots title banner simiar to subteam components */}
            <Subteam fromColor={chassGradient.fromColor} toColor={chassGradient.toColor} hlights={chassHlights} text={chassText} img={agrobotChassisTemp}>{t.chassis[0]}</Subteam>
            <Subteam fromColor={extGradient.fromColor} toColor={extGradient.toColor} hlights={extHlights} text={extText} img={HomeModularChassis}>{t.extermination[0]}</Subteam>
            <Subteam fromColor={navGradient.fromColor} toColor={navGradient.toColor} hlights={navHlights} text={navText} img={WorkingWithWires}>{t.navigation[0]}</Subteam>
            <Subteam fromColor={appAIGradient.fromColor} toColor={appAIGradient.toColor} hlights={appAIHlights} text={appAIText} img={HomeAutomation}>{t.appliedAI[0]}</Subteam>
        </div>
    );
}

export default AgroBotSubteams;