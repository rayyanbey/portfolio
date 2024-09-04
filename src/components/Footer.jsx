import React from 'react'
import { FaBehance, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Muhammad Rayyan</h3>
            
        </div>
        <p className='text-gray-400'>@2024 Muhammad Rayyan</p>
    </div>
  )
}

export default Footer