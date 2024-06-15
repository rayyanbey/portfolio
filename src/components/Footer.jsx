import React from 'react'
import { FaBehance, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-gray-200 font-semibold'>Shahryar Haroon</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://www.behance.net/ironpool" target='_blank'><FaBehance /></a>
                <a href="https://www.facebook.com/sheryar.haroon.12?mibextid=ZbWKwL" target='_blank' ><FaFacebook /></a>
            </div>
        </div>
        <p className='text-gray-400'>@2024 Shahryar Haroon</p>
    </div>
  )
}

export default Footer