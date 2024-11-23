import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useState, useEffect, useRef } from 'react'
import {
  AgrobotModelView,
  AgroponicModelView,
  AgroPickerModelView,
} from '../models'
import { AgrobotModel2D, AgroArm2DModel, AgroponicModel2D } from '../../assets'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

const AgrobotMod = (
  <AgrobotModelView
    id={'agrobotModelView'}
    gsapType={'agrobotModelGsap'}
    scale={[1, 1, 1]}
    cameraPosition={[0.5, 1, 1]}
    groupPosition={[0, 0, 0]}
    vectorPosition={[0, 0.3, 0]}
  />
)

const AgroponicMod = (
  <AgroponicModelView
    id={'agroponicModelView'}
    gsapType={'agroponicModelGsap'}
    scale={[1, 1, 1]}
    cameraPosition={[0.5, 1, 1.6]}
    groupPosition={[0, 0, 0]}
    vectorPosition={[0, 0, 0]}
  />
)

const AgropickerMod = (
  <AgroPickerModelView
    id={'agroPickerModelView'}
    gsapType={'agroPickerModelGsap'}
    scale={[3, 3, 3]}
    cameraPosition={[2, 1, -3.5]}
    groupPosition={[0, 0, 0]}
    vectorPosition={[0.2, 0.8, 0]}
  />
)

const projects = [
  {
    ProjectName: 'AgroBot',
    Text: 'An autonomous robot utilizing AI and machine learning for precise intra-row weeding and data collection. It identifies and eliminates weeds without harming crops, reducing the need for chemical pesticides. Additionally, the robot collects data on crop health to help farmers make better, more informed decisions.',
    ModelComponent: AgrobotMod,
    MobileImg: AgrobotModel2D,
    background: { background: '#cdff70' },
    href: '/agrobot',
  },
  {
    ProjectName: 'AgroPonics',
    Text: 'The Agroponics team designs autonomous hydroponic systems through multidisciplinary collaboration. It integrates IoT for automation, structural design for optimized environments, and experimental research on growth of staple foods. The aim is to enhance agricultural efficiency by reducing resource use and improving crop production in a controlled, sustainable setting.',
    ModelComponent: AgroponicMod,
    MobileImg: AgroponicModel2D,
    background: { background: '#cdff70' },
    href: '/agroponics',
  },
  {
    ProjectName: 'AgroPicker',
    Text: 'An autonomous robotic arm capable of detecting fruits, assessing their ripeness, and harvesting them efficiently. The robotic arm will be attached to a mobile robot intended for on-field navigation. This system aims to improve the efficiency and accuracy of fruit harvesting, reduce labor costs, and minimize fruit damage. ',
    ModelComponent: AgropickerMod,
    MobileImg: AgroArm2DModel,
    background: { background: '#cdff70' },
  },
]

function Project({
  ProjectName,
  Text,
  background,
  ModelComponent,
  MobileImg,
  href,
}) {
  const containerRef = useRef(null)

  function useFadeIn(containerRef) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const height = window.innerHeight
        const containerTop = containerRef.current.getBoundingClientRect().top
        const containerBottom =
          containerRef.current.getBoundingClientRect().bottom

        // First number is how many pixels from the top of the screen this
        // component should be before appearing
        // Second number is how many pixels from the bottom of the screen
        // this component should be before dissapearing
        if (containerTop < 400 && containerBottom > height - 0) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [containerRef])

    return useSpring({
      opacity: isVisible ? 1 : 0,
      config: { duration: 200 },
    })
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[150vh] flex px-[5%] items-start justify-between"
      style={background}
    >
      <animated.div
        style={useFadeIn(containerRef)}
        className="w-[47.5%] sticky top-[20vh]"
      >
        <div className="w-full h-full rounded-[46px] p-8">
          <h2 className="text-mobile-header lg:text-header font-bold mb-4">
            {ProjectName}
          </h2>
          <p className="text-mobile-body">{Text}</p>
          <div className="mt-4">
            <Link
              to={href}
              className="px-4 py-2 bg-[#2E1B0F] font-medium text-[24px] rounded-full text-white"
            >
              {href === '#' ? 'Coming soon' : 'Learn More'}
            </Link>
          </div>
        </div>
      </animated.div>
      <div className="w-[47.5%] h-[50vh] bg-[#2e1b0f1f] relative top-[50vh] rounded-full">
        <img src={MobileImg} />
      </div>
    </div>
  )
}

function HomeProjects() {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  if (!isMobile) {
    return (
      <>
        {projects.map((proj, index) => (
          <Project
            ProjectName={proj.ProjectName}
            Text={proj.Text}
            ModelComponent={proj.ModelComponent}
            MobileImg={proj.MobileImg}
            background={proj.background}
            href={proj.href}
            key={index}
          />
        ))}
      </>
    )
  } else {
    return (
      <>
        {projects.map((proj, index) => (
          <div key={index} className="w-[280px] mx-auto my-16">
            <h2 className="font-semibold text-mobile-header">
              {proj.ProjectName}
            </h2>
            <p className="text-mobile-body mb-8">{proj.Text}</p>
            <img src={proj.MobileImg} className="w-[280px]" />
            <div className="mt-8 mb-12 flex justify-center items-center">
              <Link
                to={proj.href}
                className="bg-[#2E1B0F] text-white p-2 px-12 rounded-full"
              >
                {proj.href === '#' ? 'Coming soon' : 'Learn More'}
              </Link>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default HomeProjects
