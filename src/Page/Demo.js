import React from 'react'
import logo from './Photo/logo-primary.webp'

export default function Demo() {
    return (
        <div className=" py-6">


            <nav className=" max-w-[1320px] mx-auto  px-6 bg-[#0f0715] shadow-md flex flex-wrap items-center lg:py-0 py-2">
                <div class="flex-1 flex justify-between items-center ">
                    <a href="/" className="flex items-center text-lg font-semibold">
                        <img src={logo} className='w-12' alt='Logo'></img>
                        
                    </a>
                </div>
                <label for="menu-toggle" className="cursor-pointer lg:hidden block">
                    <svg
                        class="fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0 space-x-0 lg:space-x-4">
                        <li class="py-2 lg:py-0 ">
                                <span className=" font-sora ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder  hover:border-b-4 hover:border-color-secondary  duration-200"href="#">
                                    Home
                                </span>
                            </li>
                            <li className=" py-2 lg:py-0 ">
                                <span className=" font-sora ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder  hover:border-b-4 hover:border-color-secondary  duration-200"href="#">
                                    About
                                </span>
                            </li>
                            <li className="py-2 lg:py-0 ">
                                <span class=" font-sora ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder  hover:border-b-4 hover:border-color-secondary  duration-200 "href="#">
                                    Service
                                </span>
                            </li>
                            <li className="py-2 lg:py-0 ">
                                <span class=" font-sora ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder  hover:border-b-4 hover:border-color-secondary  duration-200"href="#">
                                    Project
                                </span>
                            </li>
                            <li className="py-2 lg:py-0 ">
                                <span class=" font-sora ease-in font-medium uppercase py-2 border-b-4 border-[#0f0715] hover:boder  hover:border-b-4 hover:border-color-secondary  duration-200"href="#">
                                    Contact
                                </span>
                            </li>

                            <button class="button">
                            <span class="button-content uppercase font-sora">Hire me! </span>
                        </button>
                           
                        </ul>
                    </nav>
                </div>
            </nav>

        </div>
    )
}
