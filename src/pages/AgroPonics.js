import React from "react";
import { TitleBanner, SysComponents, ChemicalBalancing, Agroponicsnest, WantToHelp, ProjectInstance } from "../components";
import { AgroPonicsTitleImg } from "../assets";
import { AgroPonicsHeader } from "../constant";
import { AgroPonicsIntro } from "../constant/agroponics"

function AgroPonics() {

    return (
        <div className="bg-gradient-to-b from-[#F8F7F1] via-[#d0ec94] to-[#F8F7F1] w-screen">
            <TitleBanner fromColor="#12200B" toColor="#4C5934" imageSrc={AgroPonicsTitleImg}>{AgroPonicsHeader}</TitleBanner>
            <ProjectInstance img={AgroPonicsTitleImg} text={AgroPonicsIntro[1]} projectNum='2'>{AgroPonicsIntro[0]}</ProjectInstance>
            <SysComponents/>
            <ChemicalBalancing />
            <Agroponicsnest />
            <WantToHelp></WantToHelp>
        </div>
    );
};

export default AgroPonics;