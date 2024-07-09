'use client'  // Since we use hooks from React

import Image from 'next/image';
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Link from "next/link";
import Arrow from "@/static/Arrow";
import profilePic from "@../../../public/elveera_sq.svg"


// Set size to view instead of pixel value to scale fonts automatically. Eg: mobile:text-[5vw]

function Hero() {
    return <div id="Hero" className="flex items-center min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientLeft to-gradientRight">
        <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse flex-row items-center w-full flex-1">
            <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
            <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full">Greetings, I&apos;m Elveera</p>
                <p className="desktop:text-[3vw] mobile:text-[5vw]">a Software Test developer specializing in web and backend automation. This website is created using 
                {/** This uses the react-type-animation node js library. */ }
                    <Typing />
                </p>
                <div className='flex mobile:hidden mt-6 justify-start w-[17vw]'><SocialMedia size={100} /></div>
            </div>
            {/* <img className="w-2/5 mobile:w-full mobile:max-w-xl object-contain self-center animate-scalepulse rounded-full" src="/static/elveera.png" /> */}
            <Image className="w-2/5 mobile:w-full mobile:max-w-xl object-contain self-center animate-scalepulse rounded-full" src={profilePic.src} alt="" width={100} height={100} />
        </div>
        <div className="desktop:absolute desktop: bottom-10 inset-0 flex items-end py-2 justify-center z-10">
            <Link href={"/#About"} aria-label='About' >
                <Arrow/>
            </Link>
        </div>
    </div>
}

export default Hero;