import React, { useState, useEffect, useRef } from 'react'
import TeamAgroBot from '../../assets/image/AgroBotWithTeamOnGrass.jpg'
import AgroBotBlueBg from '../../assets/image/AgroBotBlueBg.png'
import StudentsWorking from '../../assets/image/studentsWorking.jpg'
import { FaChevronRight } from "react-icons/fa";

const NewsCard = React.forwardRef((({ bgColor, bgImage, title }, ref) => {
    return (
        <div ref={ref} className="flex flex-col mx-4 w-[30%] overflow-hidden shrink-0">
            <div className="h-[300px] rounded-lg" style={bgColor}>
                <img src={bgImage} alt='news card' className="h-full w-full object-cover rounded-lg" />
            </div>
            <h2 className='m-2 text-[28px] font-bold'>{title}<FaChevronRight size='24px' className="inline" /></h2>
        </div>
    )
}))

function News() {
    const [leftCardIndex, setLeftCardIndex] = useState(0)
    const [newsCardWidth, setNewsCardWidth] = useState(0)
    const [scrollX, setScrollX] = useState(0)
    const NewsCardRef = useRef(null);
    const NewsContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)

    useEffect(() => {
        if (NewsCardRef.current) {
            setNewsCardWidth(NewsCardRef.current.offsetWidth);
        }
    }, [])

    useEffect(() => {
        if (leftCardIndex < 0) {
            setLeftCardIndex(0)
            return
        }
        
        if (leftCardIndex > NewsContainerRef.current.children.length) {
            setLeftCardIndex(NewsContainerRef.current.children.length)
            return
        }

        setScrollX(leftCardIndex * newsCardWidth)
    }, [leftCardIndex, newsCardWidth])

    useEffect(() => {
        if (NewsContainerRef.current) {
            NewsContainerRef.current.scrollTo({
                left: scrollX,
                behavior: 'smooth'
            });
        }

        if (leftCardIndex > 0) { setShowLeftArrow(true) }
        else { setShowLeftArrow(false) }

        if (leftCardIndex < NewsContainerRef.current.children.length - 1 &&
            scrollX + NewsContainerRef.current.clientWidth < NewsContainerRef.current.scrollWidth) {
            setShowRightArrow(true) 
        }
        else { setShowRightArrow(false) }


    }, [scrollX])

    return (
        <div className="w-full bg-[#CDFF70] py-[10vh] relative">

            { showLeftArrow ?
                <div className="w-[200px] h-full absolute top-0 left-0" style={{ background: "linear-gradient(-90deg, rgba(205,255,112,0) 0%, rgba(205,255,112,1) 50%, rgba(205,255,112,1) 100%)" }}>
                    <div className="h-full flex items-center justify-start ml-8 cursor-pointer" onClick={() => { setLeftCardIndex(leftCardIndex - 1) }}>
                        <FaChevronRight size='64px' style={{ transform: 'rotate(180deg)' }} />
                    </div>
                </div>
                :
                <></>
            }

            <div ref={NewsContainerRef} className="w-full flex overflow-x-hidden px-4">
                <NewsCard ref={NewsCardRef} bgImage={TeamAgroBot} title="2023 Competition" />
                <NewsCard bgImage={AgroBotBlueBg} title="Chasis Prototype" />
                <NewsCard bgImage={StudentsWorking} title="AgroPonics Launch" />
                <NewsCard bgImage={TeamAgroBot} title="Extra" />
                <NewsCard bgImage={TeamAgroBot} title="Extra" />
                <NewsCard bgImage={TeamAgroBot} title="Extra" />
                <NewsCard bgImage={TeamAgroBot} title="Extra" />
                <NewsCard bgImage={TeamAgroBot} title="Extra" />
                <NewsCard bgImage={TeamAgroBot} title="Extra" />
            </div>

            { showRightArrow ?
                <div className="w-[200px] h-full absolute top-0 right-0" style={{ background: "linear-gradient(90deg, rgba(205,255,112,0) 0%, rgba(205,255,112,1) 50%, rgba(205,255,112,1) 100%)" }}>
                    <div className="h-full flex items-center justify-end mr-8 cursor-pointer" onClick={() => { setLeftCardIndex(leftCardIndex + 1) }}>
                        <FaChevronRight size='64px' />
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default News