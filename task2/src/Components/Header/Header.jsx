import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { PiEnvelopeSimpleThin } from 'react-icons/pi'

function Header() {
    return (
        <div className='bg-white max-w-screen-xl flex flex-wrap justify-between mx-auto p-2 md:p-4 gap-3'>
            <img src="/logo.png" alt="" className='w-[90px] md:w-[150px]' />
            <div className='flex gap-3 md:gap-5 items-center'>
                <h2 className='text-[10px] md:text-sm'><BsTelephone className='h-3 md:h-5 w-3 md:w-5 text-primary inline-block mr-1' />+1(905)206-1444</h2>
                <h2 className='text-[10px] md:text-sm'><PiEnvelopeSimpleThin className='h-4 md:h-6 w-4 md:w-6 text-primary inline-block mr-1' />info@thecanadianhome.com</h2>
            </div>
        </div>
    )
}

export default Header
