import React from "react";
import { TeamPhoto, ShadowTeamPhoto, Agrobot } from "../../assets/image";
import { PS1Title } from "../../constant";
import NotificationBanner from "../common/NotificationBanner";



function InfoParagraph(props) {
    const { text, title } = props;

    // This will turn the "<br />" in to a real <br />
    const processedPS1Title = PS1Title.split('<br />').map((processedPS1Title, index) => (
        <React.Fragment key={index}>
            {processedPS1Title}
            {index < processedPS1Title.length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <>
        <div className="w-full mb-20 md:mb-12 px-[10%]">
            <h1 className=" text-[40px] pb-10">{processedPS1Title}</h1>
            <div className="relative mx-auto">
                <div className="md:w-[50%] w-[100%] inline-block">
                    <img src={Agrobot} alt="Team" className="rounded-[14px]" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="md:w-[50%] w-auto justify-center absolute top-[60%] md:mx-0 mx-auto md:top-10 md:left-[40%] z-10 opacity-70">
                    <NotificationBanner titleText={title} descriptionText={text}></NotificationBanner>
                </div>
            </div>
        </div>
        </>
        
    );
}

export default InfoParagraph;