import React from 'react'
import CreateForm from '../components/create-form'

const CreatePage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100'>
        <div className='p-8 bg-white rounded-lg shadow-lg'>
            <h1 className='text-2xl font-semibold text-slate-800 text-center'>Upload Image</h1>
            <CreateForm />
        </div>
    </div>
  )
}

export default CreatePage