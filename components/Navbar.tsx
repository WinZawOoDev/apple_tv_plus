'use client'

import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { AiFillApple, AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import Link from 'next/link';

const Navlinks = [
    { id: nanoid(), name: "Store" },
    { id: nanoid(), name: "Mac" },
    { id: nanoid(), name: "Ipad" },
    { id: nanoid(), name: "Iphone" },
    { id: nanoid(), name: "Watch" },
    { id: nanoid(), name: "Vision" },
    { id: nanoid(), name: "AirPods" },
    { id: nanoid(), name: "TV & Home" },
    { id: nanoid(), name: "Enterainments" },
    { id: nanoid(), name: "Accessories" },
    { id: nanoid(), name: "Suport" },
];


export default function Navbar() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);


    return (
        <>
            <div className='fixed top-0 px-2 bg-gray-900 z-30 w-full py-2 border border-y border-x-0 border-gray-600 '>
                <nav className='relative text-gray-300 w-full max-w-5xl mx-auto'>
                    <ul className='flex items-center justify-between text-xs'>
                        <li className='text-2xl mx-3 cursor-pointer hover:text-gray-100'><AiFillApple /></li>
                        {Navlinks.map(nav => (
                            <li className='mx-3 hover:text-gray-100 hidden lg:block' key={nav.id}>
                                <Link href={"#"}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                        <div className='flex items-center justify-between'>
                            <li className='text-xl mx-3  cursor-pointer hover:text-gray-50'><AiOutlineSearch /></li>
                            <li className='text-base mx-3 cursor-pointer  hover:text-gray-50 '>< BsBag /></li>
                            <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen} />
                        </div>
                    </ul>
                    <div className='flex items-center justify-between mt-6 px-5 text-gray-200'>
                        <Link href={"#"} className='block font-semibold text-lg lg:text-xl'>Apple TV<span className='text-lg'>+</span></Link>
                        <Link href={"#"} className='bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-[0.2em]'>
                            <span className='text-sm text-gray-700'>Stream now</span>
                        </Link>
                    </div>
                </nav>
            </div>
            <MobielMenu isOpen={isMenuOpen} close={toggleMenu} />
        </>

    )
}



const HamburgerButton = ({ onClick, isOpen }: { onClick: () => void, isOpen: boolean }) => (
    <button onClick={onClick} type='button' className='relative w-5 h-full mx-3 outline-none lg:hidden'>
        <span className={`absolute w-full h-[0.2em] rounded-full bg-gray-400 transition-all duration-150 transform  ${isOpen ? '-rotate-45 translate-y-0' : 'rotate-0 -translate-y-[0.31em]'}`} />
        <span className={`absolute w-full h-[0.2em] rounded-full bg-gray-400 transition-all duration-150 transform  ${isOpen ? 'rotate-45 translate-y-0' : 'rotate-0 translate-y-[0.31em]'}`} />
    </button>
)


const MobielMenu = ({ isOpen, close }: { isOpen: boolean, close: () => void }) => (
    <div className={`fixed lg:hidden top-0 transition-all duration-200 delay-100 ${isOpen ? 'h-screen' : 'h-0 hidden'} w-full z-40 bg-gray-950`}>
        <div className='float-right px-2 py-1'>
            <HamburgerButton isOpen={isOpen} onClick={close} />
        </div>
        <ul className='text-white font-semibold text-2xl mx-10 mt-14'>
            {Navlinks.map(nav => (
                <li key={nav.id} className='my-3'>{nav.name}</li>
            ))}
        </ul>
    </div>
)