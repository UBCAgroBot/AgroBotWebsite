import React from "react";

function TitleBanner(props) {
    const { fromColor, toColor, imageSrc, imageAltText, children } = props;

    const bannerStyle = {
        background: `linear-gradient(to top, ${fromColor}, ${toColor})`
    };

    return (
        <div className="w-full flex flex-col justify-center items-center mt-[4vh] md:mt-[10vh] mb-[4vh] md:mb-[10vh]">
            <div style={bannerStyle} className="w-[90%] md:w-[80%] h-[20vh] flex items-center justify-center rounded-[14px]">
                <h1 className="text-white text-2xl md:text-5xl font-bold uppercase z-50">{children}</h1>
                <img src={imageSrc} alt={imageAltText || "Title Image"} className="h-[75px] sm:h-[150px] md:h-[120%] z-40" />
            </div>
        </div>
    );
}

export default TitleBanner;