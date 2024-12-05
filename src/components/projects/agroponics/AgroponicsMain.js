import { AgroponicModelView } from '../../models'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { AgroponicModel2D } from '../../../assets'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'

const AgroponicsMain = () => {
  gsap.registerPlugin(ScrollTrigger)
  const modelContainer = 'mainAgroponicModel'
  const modelContainerId = '#' + modelContainer
  const modelRender = 'mainAgroPonicGsap'
  const modelRenderId = '#' + modelRender
  const modelDestContainer = 'agroponicDestContaienr'
  const modelDestContainerId = '#' + modelDestContainer
  const textDiv = 'agroponicMainText'
  const textDivId = '#' + textDiv
  const isMobile = useMediaQuery({ query: '( max-width: 640px)' })

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    const dest = document.getElementById(modelDestContainer)
    const destDiv = dest.getBoundingClientRect()
    const modelDivStartinPosition = window.innerWidth / 2
    const destDivCenter = (destDiv.left + destDiv.right) / 2

    mm.add('(min-width: 1024px)', () => {
      ScrollTrigger.defaults({
        immediateRender: false,
        ease: 'power1.inOut1',
        scrub: true,
        pinSpacer: false,
        ease: 'none',
      })

      gsap.from(modelContainerId, {
        delay: 1.25,
        duration: 1,
        opacity: 0,
      })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: modelRenderId,
            start: 'center center',
            endTrigger: modelDestContainerId,
            end: 'center center',
            markers: false,
            pin: true,
            invalidateOnRefresh: true,
            pinSpacer: false,
            ease: 'none',
          },
        })
        .to(modelRenderId, {
          x: () => destDivCenter - modelDivStartinPosition,
        })
    })

    return () => {
      mm.revert()
    }
  }, [])

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: textDivId,
        markers: false,
        start: 'top bottom',
        end: 'center center',
      },
    })

    timeline.fromTo(
      textDivId,
      {
        opacity: 0,
      },
      {
        y: '1rem',
        opacity: 1,
        duration: 1,
        ease: 'power1.out',
      }
    )
  }, [])

  return (
    <section className="lg:h-[190vh] w-full bg-black flex flex-col gap-[2rem] justify-start pt-10">
      <div className="w-full h-[40vh] lg:h-[100vh] pt-8 opacity-1">
        {!isMobile ? (
          <AgroponicModelView
            id={modelContainer}
            gsapType={modelRender}
            scale={[1, 1, 1]}
            cameraPosition={[0.5, 1, 2]}
            groupPosition={[0, 0, 0]}
            vectorPosition={[0, 0, 0]}
          />
        ) : (
          <img src={AgroponicModel2D} className="mt-10 mb-[-200px]"></img>
        )}
      </div>
      <div className="w-full h-[60vh] lg:h-[75vh] flex flex-col lg:flex-row ">
        <div id={modelDestContainer} className="w-full h-full "></div>
        <div className="w-full h-full">
          <div id={textDiv} className="justify-center align-middle mx-5">
            <h2 className="text-white text-center text-[42px] lg:text-[7rem] font-bold mb-2">
              AgroPonics
            </h2>
            <p className="text-white text-center text-[18px] lg:text-[1.25rem] mb-20">
              The Agroponics team designs autonomous hydroponic systems through
              multidisciplinary collaboration. It integrates IoT for automation,
              structural design for optimized environments, and experimental
              research on growth of staple foods. The aim is to enhance
              agricultural efficiency by reducing resource use and improving
              crop production in a controlled, sustainable setting.
            </p>
            <div className="flex justify-center mt-2"></div>
            {/* TODO: Place the featured image here */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgroponicsMain
