import React from "react";
import { HomeAutomation, HomeDataCollection, HomeModularChassis, HomeTargetedAction, HomeChemicalBalancing, HomeFullyAutonomous, HomeNutrientCycling, } from '../../assets';
import { MdChevronRight } from 'react-icons/md';
import { SectionHeader } from '../common';
import * as t from "../../constant/home.js";

function Img(props) {
    return (
        <div className='w-full h-full flex justify-center items-center flex-col'>
            <img alt='slideshow' src={props.imgSrc} className='h-[90%] rounded-[14px]'></img>
            <h3 className='p-2 text-center font-bold text-[18px]'>{props.children}</h3>
        </div>
    );
}

function Project(props) {

    const { children, projectNum, text, img1, img2, img3, img4, imgText1, imgText2, imgText3, imgText4, panelStyle, link } = props;

    return (
        <div style={panelStyle} className='flex flex-col rounded-[16px] w-full md:w-[49%] mt-4 md:mt-0 p-[4%]'>
            <div className='flex w-full items-center my-[4%]'>
                <div className=''>
                    <h3 className='text-[#88BE22] font-bold text-[16px] md:text-[20px]'>PROJECT_{projectNum}</h3>
                    <h2 className='text-[24px] md:text-[36px]'>{children}</h2>
                </div>
                <p className='ml-4 text-[16px] text-right'>{text}</p>
            </div>
            <div className='bg-[#FFFFFF80] mx-[-5%] px-[5%] my-[4%] rounded-[14px]'>
                <div className='flex justify-between my-4'>
                    <div className='w-[48%] rounded-[14px]'><Img imgSrc={img1}>{imgText1}</Img></div>
                    <div className='w-[48%] rounded-[14px]'><Img imgSrc={img2}>{imgText2}</Img></div>
                </div>
                <div className='flex justify-between my-4'>
                    <div className='w-[48%] rounded-[14px]'><Img imgSrc={img3}>{imgText3}</Img></div>
                    <div className='w-[48%] rounded-[14px]'><Img imgSrc={img4}>{imgText4}</Img></div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-auto'>
                <a href={link} className='flex items-center justify-center text-black font-bold bg-[#FFFFFF80] rounded-[14px] p-4 px-[10%]'>{t.project_bottom_text}{children} <MdChevronRight /></a>
            </div>
        </div>
    );
}

function HomeProjects() {

    const leftPanelStyle = {
        background: `linear-gradient(35deg, rgba(207,239,148,1) 0%, rgba(207,239,148,0.75) 35%, rgba(207,239,148,0.75) 65%, rgba(207,239,148,1) 100%)`
    }

    const rightPanelStyle = {
        background: `linear-gradient(75deg, rgba(207,239,148,1) 0%, rgba(207,239,148,0.75) 35%, rgba(207,239,148,0.75) 65%, rgba(207,239,148,1) 100%)`
    }

    return (
        <div className="w-full my-[10vh]">
            <div className='w-[80vw] mx-auto text-black'>
                <SectionHeader>{t.projects_title}</SectionHeader>
                <div className="flex w-full flex-col md:flex-row md:justify-between pt-8">
                    <Project projectNum="1" text={t.project_1_subtitle} img1={HomeTargetedAction}  img2={HomeDataCollection}  img3={HomeModularChassis}    img4={HomeAutomation}        imgText1={t.project_1_img_1_subtitle} imgText2={t.project_1_img_2_subtitle} imgText3={t.project_1_img_3_subtitle} imgText4={t.project_1_img_4_subtitle} panelStyle={leftPanelStyle} link='/agrobot'>{t.project_1_title}</Project>
                    <Project projectNum="2" text={t.project_2_subtitle} img1={HomeFullyAutonomous} img2={HomeNutrientCycling} img3={HomeChemicalBalancing} img4={HomeChemicalBalancing} imgText1={t.project_2_img_1_subtitle} imgText2={t.project_2_img_2_subtitle} imgText3={t.project_2_img_3_subtitle} imgText4={t.project_2_img_4_subtitle} panelStyle={rightPanelStyle} link='/agroponics'>{t.project_2_title}</Project>
                </div>
            </div>
        </div>
    );
}

export default HomeProjects;