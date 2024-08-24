import React, { useState, useEffect, useRef } from 'react'
import { FaChevronRight } from "react-icons/fa";

import { BP1Team } from '../../assets';

import { ArticleOverlay } from "./ArticleOverlay"

const NewsCard = React.forwardRef((({ activateFn, bgImage, title, overlayName }, ref) => {
    return (
        <div ref={ref} onClick={() => activateFn(overlayName)} className="mb-8 flex w-full shrink-0 cursor-pointer flex-col overflow-hidden lg:mx-4 lg:mb-0 lg:w-[30%]">
            <div className="h-[300px]">
                <img src={bgImage} alt='news card' className="h-full w-full object-cover" />
            </div>
            <h2 className='m-2 text-center text-mobile-body font-medium lg:text-left'>{title}<FaChevronRight size='20px' className="ml-1 inline" /></h2>
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
        <div className="mx-auto my-16 w-[300px] bg-[#CDFF70] lg:w-[100vw]">
            {showOverlay ? <ArticleOverlay deactivateFn={DeactivateArticle} articleName={overlayKey} /> : null}
			<h1 className="my-8 text-center text-mobile-header font-bold text-[#2E1B0F] lg:text-header">
				AgroBot News
			</h1>
            <div className="flex w-full flex-col items-center lg:flex-row">
                <div className="h-full cursor-pointer p-2 transition-opacity duration-300 ease-in-out"
                    style={{ opacity: leftArrowOpacity }}
                    onClick={() => { setLeftCardIndex(leftCardIndex - 1) }}
                >
                    <FaChevronRight size='64px' style={{ transform: 'rotate(180deg)' }} />
                </div>

                <div ref={NewsContainerRef} className="flex w-full flex-col overflow-x-hidden lg:flex-row">
                    <NewsCard activateFn={ActivateArticle} overlayName="SowingTheFields" bgImage={BP1Team} title="Sowing The Fields" ref={NewsCardRef}/>
                </div>

                <div className="h-full cursor-pointer p-2 transition-opacity duration-300 ease-in-out"
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