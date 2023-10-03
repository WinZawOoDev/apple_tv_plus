'use client';

import React, { useRef, useState } from 'react'
import { AiOutlinePause } from 'react-icons/ai'
import { IoPlay } from 'react-icons/io5'


export default function VideoBackground() {

    const [play, setPlay] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        setPlay(prev => !prev);
        if (play) {
            videoRef.current?.pause()
        } else {
            videoRef.current?.play()
        }
    }

    return (
        <div className='relative w-full'>
            <video preload='auto' ref={videoRef} playsInline autoPlay muted loop className="object-cover fixed top-0 left-0 aspect-square w-screen h-screen -z-10">
                <source src='./large.mp4' type="video/mp4" />
            </video>
            <button onClick={togglePlay} className='absolute bottom-10 right-8 w-8 h-8 flex items-center justify-center outline-none border border-gray-50 rounded-full text-white'>
                {play ? <AiOutlinePause /> : <IoPlay />}
            </button>
        </div>
    )
}
