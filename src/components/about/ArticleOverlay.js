import React, { useEffect, useState } from 'react'
import { BP1Team } from '../../assets'
import { CiClock2 } from 'react-icons/ci'
const d3 = require('d3-ease')

function SowingTheFields() {
  return (
    <>
      <h1 className="font-bold text-[42px] mb-6">Sowing The Fields</h1>
      <div className="text-[16px] my-6 flex">
        <div>
          <p>By: Ryan Chang</p>
          <p>
            <CiClock2 className="inline" /> 5 minute read · Updated 7:00PM PST,
            Mon Aug 19, 2024
          </p>
        </div>
      </div>
      <img alt="article" src={BP1Team} width="750" />
      <p className="mt-12 text-[20px] leading-7 w-full">
        Welcome reader to the UBC Agrobot blog! Here we hope to periodically
        showcase what we’re doing to bring innovation to agriculture, so keep up
        with us for future updates.
      </p>
      <p className="mt-6 text-[20px] leading-7 w-full">
        Today’s post truly marks the beginning of beginnings as the first
        prototype of our flagship Agrobot has just completed construction. The
        team has worked many hours over the summer to bore, turn, cut, and
        assemble every part of the chassis and powertrains to spec. It’s been a
        long journey that started all the way back in the fall of last year. All
        the component sourcing, all the machine design calculations, and all the
        CAD work has finally accumulated to this. It wasn’t without struggle of
        course. The logistics of working in the off-term reared its pesky head
        from time to time, and don’t get me started on tracking down order
        packages. But seeing the Agrobot leap off the screen and onto the EDC
        table was a great moment of pride to the whole team, and a totem to
        their dedication and perseverance.
      </p>
      <p className="mt-6 text-[20px] leading-7 w-full">
        A personal highlight for me was working on our wheel’s power
        transmission system. To allow for complete and agile control, each wheel
        is driven and steered individually. This lets the Agrobot swerve,
        strafe, and crabwalk through the fields to get into optimal position for
        spraying. To keep the motors safe from dirt, mud, and impact, we’ve
        elevated each of them off the ground and connected them through systems
        of chains, sprockets, and shafts to deliver power to the wheels. This
        was the first time personally working with chains and sprockets away
        from my bike at home - designing and building it was totally worth the
        grease-stained afternoons. Anything for smooth operation.
      </p>
      <p className="mt-6 text-[20px] leading-7 w-full">
        And it all worked! At least as far as preliminary testing has gone. With
        the help of the navigation team’s software, we’ve driven the Agrobot
        around the floor of the EDC multiple times. Sighs of relief quickly
        turned into sounds of elation. And the robot’s got power to boot. At
        full juice, it’ll no doubt handle dirt fields, even light mud if the
        rain starts to shower down. Did I mention the chassis is designed to be
        waterproof? I suppose that’s a blog article for another time, especially
        with the weather this summer. -- Ryan
      </p>
    </>
  )
}

function ArticleOverlay({ deactivateFn, articleName }) {
  const [Content, setContent] = useState(<></>)

  async function easeIn() {
    for (let i = 0; i <= 1; i += 0.01) {
      // const easedVal = d3.easeCubic(i) // I found this to not look as good
      document.getElementById('outer-overlay').style.opacity = i
      await new Promise((resolve) => setTimeout(resolve, 1))
    }
    document.getElementById('outer-overlay').style.opacity = 1
  }

  async function easeOut() {
    for (let i = 1; i >= 0; i -= 0.01) {
      const easedVal = d3.easeCubic(i)
      document.getElementById('outer-overlay').style.opacity = easedVal
      await new Promise((resolve) => setTimeout(resolve, 1))
    }
    document.getElementById('outer-overlay').style.opacity = 0
    deactivateFn()
  }

  // Disable scrolling on the body element when component mounts
  useEffect(() => {
    switch (articleName) {
      case 'SowingTheFields':
        setContent(<SowingTheFields />)
        break
      default:
        console.log('Article not found. Defaulting to Comp 2023')
        setContent(<>I didnt catch the article I was supposed to show 😵</>)
    }

    document.body.style.overflow = 'hidden'

    easeIn()

    return () => {
      document.body.style.overflow = 'visible' // Re-enable scrolling when component unmounts
    }
  }, [])

  // If the click happened on the overlay we close the article.
  // If the click happened on the article we do nothing.
  function CheckClick(event) {
    if (event.target.id === 'outer-overlay') {
      easeOut()
    }
  }

  return (
    <div
      onClick={CheckClick}
      id="outer-overlay"
      className="opacity-0 fixed top-0 left-0 h-screen w-screen bg-[#000000b4] z-50 overflow-y-auto"
    >
      <div className="box-content w-[250px] lg:w-[750px] bg-white mx-auto my-12 rounded-[46px] p-5 lg:p-24 lg:px-32">
        {Content}
      </div>
    </div>
  )
}

export { ArticleOverlay }
