import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TextChild = ({ id, header, body }) => {
  const divId = '#' + id

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: divId,
        markers: false,
        start: 'top bottom',
        end: 'center center',
      },
    })

    timeline.fromTo(
      divId,
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
    <div id={id} classname="w-full h-full z-20">
      <div className="bg-glass opacity-100 p-5 rounded-3xl">
        <h2
          className="font-bold text-center"
          style={{ fontSize: 'clamp(24px, 6vw, 48px)' }}
        >
          {header}
        </h2>

        <p className="text-[18px] lg:text-[22px] text-center">{body}</p>
      </div>
    </div>
  )
}

export default TextChild
