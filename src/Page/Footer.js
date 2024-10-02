import React from 'react'
import logo from './Photo/logo-primary.webp'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';

export default function Footer() {
    return (
        <div className=''>

            <div className='max-w-[1200px] mx-auto pt-20' >
                <div className='text-center mb-16'
                    data-aos-anchor-placement="bottom-bottom">
                    <h4 className='text-color-secondary font-bold text-2xl font-sora grandient'>Have A Questation </h4>
                    <h1 className='tital font-sora mt-4'>Get In Touch </h1>
                </div>



                {/* Form */}


                <div className='grid md:grid-cols-2 gap-10'>

                    <div className='w-full mx-auto text-center  pb-10 bg-[#140c1c] p-5  rounded-xl'>
                        <div className='text-color-primary-dark grid gap-6 md:grid-cols-2 px-6 md:px-0'>
                            <input type='text' placeholder='Name' className='bg-black border border-color-secondary text-sm rounded-lg  w-full p-3 focus:outline-none focus:border-color-secondary '></input>
                            <input type='text' placeholder='Phone' className='bg-black border border-color-secondary text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '></input>
                            <input type='text' placeholder='Address' className='bg-black border border-color-secondary text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '></input>
                            <input type='text' placeholder='Email' className='bg-black border border-color-secondary text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary '></input>

                        </div>
                        <div className='text-color-secondary py-6 md:px-0 px-6'>
                            <textarea placeholder='Message' className='bg-black border border-color-secondary text-sm rounded-lg block w-full h-40 p-3 focus:outline-none focus:border-color-secondary'></textarea>

                        </div>

                        <div className='md:px-0 px-6'>

                            <button class="button">
                                <span class="button-content  font-sora">Send Message </span>
                            </button>
                        </div>

                    </div>

                    <div className='flex items-center md:justify-start justify-center md:px-0 px-6'>
                    <div className='space-y-8'>
                        <div className='flex space-x-5'>
                        <div className='py-4 px-4 rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 '>
                        <LocalPhoneRoundedIcon ></LocalPhoneRoundedIcon>
                        </div>
                        <div>
                        <p className='font-sora font-medium'>Phone</p>
                        <p className='font-sora font-medium text-xl'>+91 7091991408</p>
                        </div>
                        </div>

                        <div className=' flex space-x-5 '>
                        <div className='py-4 px-4 rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400'>
                        <EmailRoundedIcon></EmailRoundedIcon>
                        </div>
                        <div>
                        <p className='font-sora font-medium '>Email</p>
                        <p className='font-sora font-medium text-xl'>amanraj0264@gmail.com</p>
                        </div>
                        </div>

                        <div className=' flex space-x-5'>
                        <div className='py-4 px-4 rounded-full bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 '>
                        <FmdGoodRoundedIcon></FmdGoodRoundedIcon>
                        </div>
                        <div>
                        <p className='font-sora font-medium'>Address</p>
                        <p className='font-sora font-medium text-xl'>Pratap Nagar  ,
                            Uttar Pradesh  201002</p>
                        </div>
                        </div>
                        
                        
                        
                    </div>
                    </div>

                </div>





            </div>

            <div className='text-center space-y-5 py-20'>
                <div className='flex justify-center '>
                    <img src={logo} className='w-20' alt='logo'></img>
                </div>


                <ul className='flex space-x-5 font-sora justify-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Project</li>
                    <li>Contact</li>

                </ul>
                <p>Copyright © 2024 Aman Kumar</p>

            </div>

        </div>
    )
}
