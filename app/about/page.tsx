import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100'>
      <div className='p-8 bg-white rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold text-slate-800 text-center'>About</h1>
        <p className='text-slate-800 text-center'>This is the about page</p>
        <Link href='/' className='
            block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg
            text-center hover:bg-blue-700
        '> Go back to home</Link>
      </div>
    </div>
  )
}

export default About