import React, { useRef, useEffect, useState } from 'react'

function Map() {
  const divRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (divRef.current) {
      const updateDimensions = () => {
        setDimensions({
          width: divRef.current.offsetWidth - 1, // needs minus 1 to prevent rounded error from causing overflow
        })
      }

      updateDimensions()
      window.addEventListener('resize', updateDimensions)
      return () => window.removeEventListener('resize', updateDimensions)
    }
  }, [divRef])

  return (
    <div ref={divRef} className="w-full h-full bg-slate-200 mr-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.8993312616496!2d-123.24855093083661!3d49.26246699189951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672ca28521b4d%3A0x24ebb137da23a622!2sEngineering%20Student%20Centre!5e0!3m2!1sen!2sca!4v1719984834620!5m2!1sen!2sca"
        width={dimensions.width}
        height="1400px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map
