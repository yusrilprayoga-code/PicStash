import Link from 'next/link'
import React from 'react'
import { AboutPage } from './ui/about'
import Footer from '../components/footer'

const About = () => {
  return (
    <div className='min-h-screen items-center justify-center bg-slate-100'>
      <AboutPage />
      <Footer />
    </div>
  )
}

export default About