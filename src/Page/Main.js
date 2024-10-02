import React from 'react'
import mainimg from './Photo/hero_img.webp'

export default function Main() {
    return (
        <div className='max-w-[1320px] mx-auto py-20 px-6'>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='hidden md:block'>
                <img src={mainimg} className='  rounded-3xl border  border-color-secondary md:w-3/4 w-full ' alt='about-img'></img>
                </div>
                <div className='flex  justify-center items-center'>
                    <div className=''>
                        <h1 className='font-soro text-2xl font-bold grandient md:text-start text-center'>About Me</h1>
                    <p className='font-sora py-8 leading-7 tracking-wider'>
                        I am Aman, A software engineering student based out of Cuttack, India. I am pursuing my Bachelor's of Technology in Computer Science & Engineering from DRIEMS, Cuttack. I have a predilection for design and enjoy working on projects where approaching design and development as co-dependent processes can lead to smarter solutions and a better overall product experience for fellow humans. If you have an exciting project in mind, or just wanna chat, get in touch with me here.
                    </p>

                    <div className=' md:text-start text-center'>
                    <button class="button ">
                            <span class="button-content uppercase font-sora">Read more </span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
