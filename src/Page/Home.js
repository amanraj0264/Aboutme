import React from 'react'
import logo from './Photo/logo-primary.webp'

export default function Home() {
    return (
        <div className='max-w-[1320px] mx-auto pt-5'>
            
            <div className='flex justify-between items-center py-4  px-6'>
                <div className=''>
                    <img src={logo} className='w-12' alt='Logo'></img>
                </div>


                <div >
                    <ul className='hidden lg:flex justify-between space-x-10 items-center font-sora '>


                       
                       <li className=' ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder  hover:border-b-4 hover:border-color-secondary  duration-200'>Home</li>
                       <li className=' ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder hover:border-b-4 hover:border-color-secondary duration-200'>About</li>
                       <li className=' ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder hover:border-b-4 hover:border-color-secondary duration-200'>Service</li>
                       <li className=' ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder hover:border-b-4 hover:border-color-secondary duration-200'>Project</li>
                       <li className=' ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder hover:border-b-4 hover:border-color-secondary duration-200'>Contact</li>
                       
                       
                     
                        
                        
                        

                        
                        <button class="button">
                            <span class="button-content uppercase font-sora">Hire me! </span>
                        </button>

                    </ul>

                </div>
            </div>

        </div>
    )
}
