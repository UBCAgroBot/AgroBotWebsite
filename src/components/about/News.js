import React, { useState, useEffect, useRef } from 'react'
import TeamAgroBot from '../../assets/image/AgroBotWithTeamOnGrass.jpg'
import AgroBotBlueBg from '../../assets/image/AgroBotBlueBg.png'
import StudentsWorking from '../../assets/image/studentsWorking.jpg'
import AgroPickerBlueBg from '../../assets/image/AgroPickerBluBg.png'
import { FaChevronRight } from "react-icons/fa";
import { ArticleOverlay } from "./ArticleOverlay"

const NewsCard = React.forwardRef((({ activateFn, bgImage, title, overlayName }, ref) => {
    return (
        <div ref={ref} onClick={() => activateFn(overlayName)} className="flex flex-col mx-4 w-[30%] overflow-hidden shrink-0 cursor-pointer">
            <div className="h-[300px] rounded-lg">
                <img src={bgImage} alt='news card' className="h-full w-full object-cover rounded-lg" />
            </div>
            <h2 className='m-2 text-[28px] font-bold'>{title}<FaChevronRight size='24px' className="inline" /></h2>
        </div>
    )
}))

function News() {
    const [showOverlay, setShowOverlay] = useState(false)
    const [overlayKey, setOverlayKey] = useState('')
    const [leftCardIndex, setLeftCardIndex] = useState(0)
    const [newsCardWidth, setNewsCardWidth] = useState(0)
    const [scrollX, setScrollX] = useState(0)
    const NewsCardRef = useRef(null);
    const NewsContainerRef = useRef(null);
    const [leftArrowOpacity, setLeftArrowOpacity] = useState(0)
    const [rightArrowOpacity, setRightArrowOpacity] = useState(1)

    useEffect(() => {
        if (NewsCardRef.current) {
            setNewsCardWidth(NewsCardRef.current.offsetWidth + 32);
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

        if (leftCardIndex > 0) { setLeftArrowOpacity(1) }
        else { setLeftArrowOpacity(0) }

        if (leftCardIndex < NewsContainerRef.current.children.length - 1 &&
            scrollX + NewsContainerRef.current.clientWidth < NewsContainerRef.current.scrollWidth) {
            setRightArrowOpacity(1)
        }
        else { setRightArrowOpacity(0) }


    }, [scrollX])

    useEffect(() => {
        if (overlayKey === '') {
            setShowOverlay(false)
        } else {
            setShowOverlay(true)
        }
    }, [overlayKey])

    function ActivateArticle(key) {
        setOverlayKey(key)
    }

    function DeactivateArticle() {
        setOverlayKey('')
    }

    return (
        <div className="bg-[#CDFF70] px-4 py-64">
            {showOverlay ? <ArticleOverlay deactivateFn={DeactivateArticle} articleName={overlayKey} /> : null}
			<h1 className="text-[#2E1B0F] text-[64px] font-bold text-center my-8">
				AgroBot News
			</h1>
            <div className="flex items-center">
                <div className="h-full transition-opacity duration-300 ease-in-out cursor-pointer p-2"
                    style={{ opacity: leftArrowOpacity }}
                    onClick={() => { setLeftCardIndex(leftCardIndex - 1) }}
                >
                    <FaChevronRight size='64px' style={{ transform: 'rotate(180deg)' }} />
                </div>

                <div ref={NewsContainerRef} className="w-full flex overflow-x-hidden">
                    <NewsCard activateFn={ActivateArticle} overlayName="Comp2023"         bgImage={TeamAgroBot}      title="2023 Competition" ref={NewsCardRef}/>
                    <NewsCard activateFn={ActivateArticle} overlayName="ChasisPrototype"  bgImage={AgroBotBlueBg}    title="Chasis Prototype" />
                    <NewsCard activateFn={ActivateArticle} overlayName="AgroPonicsLaunch" bgImage={StudentsWorking}  title="AgroPonics Launch" />
                    <NewsCard activateFn={ActivateArticle} overlayName="AgroPickerLaunch" bgImage={AgroPickerBlueBg} title="AgroPickerLaunch" />
                </div>

                <div className="h-full transition-opacity duration-300 ease-in-out cursor-pointer p-2"
                    style={{ opacity: rightArrowOpacity, }}
                    onClick={() => { setLeftCardIndex(leftCardIndex + 1) }}
                >
                    <FaChevronRight size='64px' />
                </div>
            </div>
        </div>
    )
}

export default News