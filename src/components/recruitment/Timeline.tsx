import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";

function Timeline() {
    const [largeScreen, setLargeScreen] = useState(false);
    /*
     * Screen size detection
     */
    useEffect(() => {
        function handleResize() {
            setLargeScreen(window.innerWidth >= 1024);
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const today = new Date()
    const curr_year = today.getFullYear()
    const start_day = new Date(curr_year, 7, 20);
    const end_day = new Date(curr_year, 8, 21);

    if (today > end_day || today < start_day) {
        return (
            <p className="text-[32px] font-medium pt-8">We are not taking applications right now. If you are still interested you can email us at <a href="mailto:ubcagrobot@gmail.com" className="underline">ubcagrobot@gmail.com</a>.</p>
        )
    }

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthNamesLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    /**
     * Using the day, returns a string with the 'ordinal indicators' appended
     * @param day - The day you want to format
     * @returns - The day with the indicators. 1 -> '1st', 2 -> '2nd'
     */
    function AddIndicator(day:number) {

        if (day === 11) { return '11th'}
        if (day === 12) { return '12th'}
        if (day === 13) { return '13th'}

        const last_digit = day % 10;
        
        switch (last_digit) {
            case 1:
                return `${day}st`;
            case 2:
                return `${day}nd`;
            case 3:
                return `${day}rd`;
            default:
                return `${day}th`;
        }
    }

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
        return 32 + clampedProgress * 936
    }

    function DateToTriOffset(DateOffset: number): number {
        return DateOffset + (124 / 2) - 44 / 2
    }

    const day_pixel_offset: number = GetDateOffset(start_day, end_day)
    const triOffset = DateToTriOffset(day_pixel_offset)
    const days_to_apply = Math.ceil((end_day - today) / (1000 * 3600 * 24))

    return (
        <>

            <p className="text-mobile-body lg:text-body font-medium pt-8">Applications are open until {monthNamesLong[end_day.getMonth()]} {AddIndicator(end_day.getDate())}!</p>
            {largeScreen ?
                <>
                    <div className="w-[1000px] h-[375px] relative text-white font-medium text-[32px] my-8">
                        <div className="absolute top-[190px] w-full h-4 bg-black rounded-full"></div>
                        {/* start date */}
                        <h3 className="text-black text-center absolute left-[0px] top-[275px] font-bold">Applications<br />Open</h3>
                        <div className="absolute left-[32px] top-[134px] w-[124px] h-[124px] bg-black rounded-full">
                            <div className="flex flex-col items-center justify-center h-full leading-8">
                                <span>{monthNames[start_day.getMonth()]}</span>
                                <span className="text-[#3199FF]">{start_day.getDate()}</span>
                            </div>
                        </div>
                        {/* end date */}
                        <h3 className="text-black text-center absolute right-[0px] top-[275px] font-bold">Applications<br />Close</h3>
                        <div className="absolute right-[32px] top-[134px] w-[124px] h-[124px] bg-black rounded-full">
                            <div className="flex flex-col items-center justify-center h-full leading-8">
                                <span>{monthNames[end_day.getMonth()]}</span>
                                <span className="text-[#3199FF]">{end_day.getDate()}</span></div>
                        </div>
                        {/* Current date */}
                        <IconContext.Provider value={{ className: "shared-class", size: '70' }}>
                            <div><TbTriangleInvertedFilled color="black" size={48} style={{ marginLeft: triOffset }} className="absolute top-[124px]" /></div>
                        </IconContext.Provider>
                        { /*}<img src={DownArrow} alt="down arrow" width="64px" style={{marginLeft: triOffset}} className="absolute top-[110px]"/> */}
                        <div style={{ 'marginLeft': day_pixel_offset }} className="absolute top-[20px] w-[124px] h-[124px] bg-black rounded-full">
                            <div className="flex flex-col items-center justify-center h-full leading-8">
                                <span>{monthNames[today.getMonth()]}</span>
                                <span className="text-[#EC4E20]">{today.getDate()}</span>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="bg-black mt-16 mb-4 p-4 rounded-[23px] text-white">
                    <h2 className="text-[#3199FF] font-bold text-center text-header">{days_to_apply}</h2>
                    <p className="w-[80%] mx-auto text-center text-mobile-body">more days to apply</p>
                </div>
            }
            <p className="text-mobile-body lg:text-body font-medium py-12">
                Before you dive in, check out our recruitment package. It contains essential information about our teams, projects, and what we're looking for in new members. Once you're ready, fill out the application form and take the first step towards an inspiring and impactful experience with UBC Agrobot!
            </p>
            <div className="flex flex-col lg:flex-row justify-around text-[#3199FF] mb-16 lg:mb-32">
                <a href="AgroBotWebsite/RecruitmentPoster.pdf" target="_blank" className="bg-black p-4 lg:px-8 my-2 lg:my-0 text-center rounded-[23px] lg:rounded-[46px] text-[28px] lg:text-body">
                    Recruitment Package
                    <FaExternalLinkAlt className="inline ml-2 mb-2" />
                </a>
                <a href="https://forms.gle/1xvmDm1rFjiyZ1GU9" target="_blank" className="bg-black p-4 lg:px-8 my-2 lg:my-0 text-center rounded-[23px] lg:rounded-[46px] text-[28px] lg:text-body">
                    Application Form
                    <FaExternalLinkAlt className="inline ml-2 mb-2" />
                </a>
            </div>
        </>
    )
}

export { Timeline }
