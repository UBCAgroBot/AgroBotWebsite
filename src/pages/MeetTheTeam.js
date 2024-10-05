import React, { useEffect } from 'react'

function MeetTheTeam() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#F8F7F1] w-screen">
      <TitleBanner
        fromColor="#12200B"
        toColor="#4C5934"
        imageSrc={AgroBotTitleImg}
      >
        Meet the team
      </TitleBanner>
    </div>
  )
}

export default MeetTheTeam
