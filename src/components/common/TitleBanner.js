import React from "react";

function TitleBanner(props) {
    const { fromColor, toColor, imageSrc, imageAltText, children } = props;

    const bannerStyle = {
        background: `linear-gradient(to top, ${fromColor}, ${toColor})`
    };

    return (
        <div className="mb-[4vh] mt-[4vh] flex w-full flex-col items-center justify-center md:mb-[10vh] md:mt-[10vh]">
            <div style={bannerStyle} className="flex h-[20vh] w-[90%] items-center justify-center rounded-[14px] md:w-[80%]">
                <h1 className="z-50 text-2xl font-bold uppercase text-white md:text-5xl">{children}</h1>
                <img src={imageSrc} alt={imageAltText || "Title Image"} className="z-40 h-[75px] sm:h-[150px] md:h-[120%]" />
            </div>
        </div>
    );
}

export default TitleBanner;