import React from 'react'
import map from '../assets/Map.svg'

const Content = () => {
  return (
    <div className=' flex flex-row justify-center'>
      <img src={map} alt="" className='absolute left-0 top-12 z-0' />
      <div className='border flex flex-col items-center justify-center rounded-lg w-2/5 h-72 z-10 absolute top-60'>
        <div className='border rounded-3xl h-5 w-72 flex items-center px-1'>
          <div className='bg-mainColor h-3 w-32 rounded-xl '></div>
        </div>
        <p className='text-2xl font-semibold text-center pt-8 leading-10'>
          سيتم دراسة طلبك خلال إسبوع <br />
          وإعلامك بالنتيجة عبر البريد الالكتروني
        </p>
      </div>
    </div>
  )
}

export default Content