import React, { useEffect } from 'react'
import { AgrobotMain, AgrobotSubteams } from '../components/projects'

const Agrobot = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="relative">
      <AgrobotMain />
      <AgrobotSubteams />
    </main>
  )
}

export default Agrobot
