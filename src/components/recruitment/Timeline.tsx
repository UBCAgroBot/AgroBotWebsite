import React from "react";
import { IconContext } from "react-icons";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";

function Timeline() {
    const start_day = new Date(2024, 6, 1)
    const end_day = new Date(2024, 11, 25)
    const today = new Date()

    if (today > end_day) {
        return (
            <p className="text-[32px] font-medium pt-8 pb-16">We are not taking applications right now. If you are still interested you can email us at <a href="mailto:ubcagrobot@gmail.com" className="underline">ubcagrobot@gmail.com</a>.</p>
        )
    }

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    /**
     * Takes two dates and returns a px offset for the timeline.
     * @param {Date} start_day - Beginning of recruitment
     * @param {Date} end_day - End of recruitment
     * @returns {number} - Clamped to be between 0-100% of the timeline.
     */
    function GetDateOffset(start_day: Date, end_day: Date): number {

        // Calculate total duration in days
        const totalDuration = (end_day - start_day) / (1000 * 60 * 60 * 24);

        // Calculate elapsed time in days
        const elapsedTime = (today - start_day) / (1000 * 60 * 60 * 24);

        // Calculate the percentage progress
        let progressPercentage = (elapsedTime / totalDuration);
        if (totalDuration === 0) { progressPercentage = 1 }

        // Clamp the progress percentage to the range [0, 1]
        const clampedProgress = Math.max(0, Math.min(1, progressPercentage));

        // Offset of left date + (clampedProgress * width between dates)
        return 126 + clampedProgress * 886
    }

    function DateToTriOffset(DateOffset: number): number {
        return DateOffset + (124 / 2) - 42 / 2
    }

    const day_pixel_offset: number = GetDateOffset(start_day, end_day)
    const triOffset = DateToTriOffset(day_pixel_offset)

    return (
        <>
            <p className="text-[32px] font-medium pt-8 pb-16">Applications are open until January 27th! Before you apply you should read our recruitment package. When you are ready you can fill out the application form.</p>
            <div className="w-full h-[375px] relative text-white font-medium text-[32px]">
                <div className="absolute left-[95px] top-[190px] w-[85%] h-5 bg-black rounded-full"></div>
                {/* start date */}
                <h3 className="text-black text-center absolute left-[88px] top-[46px] font-bold">Applications<br />Open</h3>
                <div className="absolute left-[126px] top-[138px] w-[124px] h-[124px] bg-black rounded-full">
                    <div className="flex flex-col items-center justify-center h-full">
                        {monthNames[start_day.getMonth()]}<br />
                        <span className="text-[#3199FF]">{start_day.getDate()}</span>
                    </div>
                </div>
                {/* end date */}
                <h3 className="text-black text-center absolute right-[96px] top-[46px] font-bold">Applications<br />Close</h3>
                <div className="absolute right-[126px] top-[138px] w-[124px] h-[124px] bg-black rounded-full">
                    <div className="flex flex-col items-center justify-center h-full">
                        {monthNames[end_day.getMonth()]}<br />
                        <span className="text-[#3199FF]">{end_day.getDate()}</span></div>
                </div>
                {/* Current date */}
                <IconContext.Provider value={{ className: "shared-class", size: '70' }}>
                    <div><TbTriangleInvertedFilled color="black" size={42} style={{ marginLeft: triOffset }} className="absolute top-[144px]" /></div>
                </IconContext.Provider>
                <div style={{ 'marginLeft': day_pixel_offset }} className="absolute top-[40px] w-[124px] h-[124px] bg-black rounded-full">
                    <div className="flex flex-col items-center justify-center h-full">
                        {monthNames[today.getMonth()]}<br />
                        <span className="text-[#3199FF]">{today.getDate()}</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-around text-[#3199FF] text-[36px] mb-32">
                <a href="#" className="bg-black p-4 px-8 rounded-[46px]">
                    Recruitment Package
                    <FaExternalLinkAlt className="inline ml-2" />
                </a>
                <a href="#" className="bg-black p-4 px-8 rounded-[46px]">
                    Application Form
                    <FaExternalLinkAlt className="inline ml-2" />
                </a>
            </div>
        </>
    )
}

export { Timeline }