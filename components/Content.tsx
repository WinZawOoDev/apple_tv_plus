import Link from 'next/link'
import React from 'react'
import { AiFillApple } from 'react-icons/ai'

export default function Content() {
    return (
        <div className='relative flex items-center justify-start h-screen w-full px-9 md:px-5 lg:px-2'>
            <div className='text-gray-50 text-5xl md:text-6xl lg:text-[5.6em] font-bold mt-48 sm:mt-96 md:mt-64 lg:mt-44 leading-tight fade-in-content'>
                <span className='block'>All Apple Originals.</span>
                <span className='block'>Only on Apple TV+.</span>
                <Link href={"#"}  >
                    <span className=' px-6 py-4  bg-gray-200 hover:bg-gray-300 rounded-full font-normal text-gray-900 text-lg leading-tight '>Stream now</span>
                </Link>
            </div>
            <div className='absolute bottom-10 w-fit h-fit cursor-default fade-in-hero-logo '>
                <span className='flex items-center font-bold text-white tracking-wider'>Watch on the <HeroIcon /> app.</span>
            </div>
        </div>
    )
}

const HeroIcon = () => (
    <span className='flex items-center justify-center w-10 h-10 m-auto rounded-lg bg-[#2B2B2B] mx-2 text-gray-100 '>
        <span className='text-lg'>
            <AiFillApple />
        </span>
        <span className='font-semibold'>tv</span>
    </span>
)
