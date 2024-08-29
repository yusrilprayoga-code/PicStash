import Link from 'next/link'
import React from 'react'
import { AboutPage } from './ui/about'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100'>
      <AboutPage />
    </div>
  )
}

export default About