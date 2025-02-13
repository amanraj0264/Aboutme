import React from 'react'
import aboutimg from './Photo/hero_img.webp'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from './Photo/Resume Aman.pdf'

export default function About() {
    return (
        <div className='max-w-[1320px] mx-auto py-14  px-6 md:px-0 '>
            <div className='relative'>

                <div className='blobs1'></div>


            </div>


            <div className='flex flex-col gap-5 md:flex-row justify-center items-center '>
                <div className='space-y-6 w-5/5 lg:w-full px-6 items-center'>
                    <h2 className='md:text-4xl font-sora font-bold text-center md:text-start '>I am Aman Kumar</h2>
                    <h1 className='md:text-7xl sm:text-5xl xs:text-3xl font-sora font-bold grandient text-center md:text-start'>Web Developer + <br></br>UI Designer</h1>
                    <p className='text-xl font-sora text-center md:text-start'>I am Frontend web devloper. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>

                   
                    <div className='flex md:flex-row flex-col  items-center gap-8 pt-6'>
                        <div>
                        <a href={resume} download="Aman resume">
                        <button className='py-4 px-8 tracking-widest  text-color-secondary border rounded-3xl hover:bg-color-secondary hover:text-white border-color-secondary duration-200 ease-in font-bold font-sora'>Download CV </button>  </a>
                        </div>

                        
        
   



                        <div className='space-x-3 flex'>
                        <div className='group border rounded-full border-color-secondary hover:bg-color-secondary duration-200 ease-in px-2 py-2'>
                        <a href="https://www.facebook.com/profile.php?id=100042054224821"><FacebookIcon className='text-color-secondary group-hover:text-white duration-200 ease-in'></FacebookIcon></a>
                        </div>

                        

                        <div className='group border rounded-full border-color-secondary hover:bg-color-secondary duration-200 ease-in px-2 py-2'>
                        <a href="https://www.instagram.com/mr__aman0264/"><InstagramIcon className='text-color-secondary group-hover:text-white duration-200 ease-in'></InstagramIcon></a>
                        </div>

                        

                        <div className='group border rounded-full border-color-secondary hover:bg-color-secondary duration-200 ease-in px-2 py-2'>
                        <a href="https://www.linkedin.com/in/aman-kumar-393a4a227/"><LinkedInIcon className='text-color-secondary group-hover:text-white duration-200 ease-in'></LinkedInIcon></a>
                        </div>

                        <div className='group border rounded-full border-color-secondary hover:bg-color-secondary duration-200 ease-in px-2 py-2'>
                        <a href="https://github.com/amanraj0264"><GitHubIcon className='text-color-secondary group-hover:text-white duration-200 ease-in'></GitHubIcon></a>
                        </div>


                        
                        </div>
                    </div>
                </div>

                <div>
                    <img src={aboutimg} className='rounded-3xl border md:rotate-3 border-color-secondary w-full' alt='about-img'></img>
                </div>
            </div>

        </div>
    )
}
