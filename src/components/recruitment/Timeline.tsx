import React, { useState, useEffect } from 'react'

function Timeline() {
  const [largeScreen, setLargeScreen] = useState(false)
  /*
   * Screen size detection
   */
  useEffect(() => {
    function handleResize() {
      setLargeScreen(window.innerWidth >= 1024)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let recruitment_open = true

  if (recruitment_open) {
    return (
      <p className="text-[32px] font-medium pt-8">
        Applications for the team are now officially open! Apply using the
        following{' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc4vEH-HFicipORrHWQuccLZjJ6KzEJTgNNcYDwD7ycx6EfmA/viewform?usp=publish-editor"
          className="underline"
        >
          Google Forms Link.
        </a>{' '}
        Questions? Send us an email at{' '}
        <a href="mailto:ubcagrobot@gmail.com" className="underline">
          ubcagrobot@gmail.com
        </a>
        .
      </p>
    )
  } else {
    return (
      <p className="text-[32px] font-medium pt-8">
        Applications for the team are now closed, stay tuned for updates in
        early January!
        <br />
        Questions? Send us an email at{' '}
        <a href="mailto:ubcagrobot@gmail.com" className="underline">
          ubcagrobot@gmail.com
        </a>
        .
      </p>
    )
  }
}

export { Timeline }
