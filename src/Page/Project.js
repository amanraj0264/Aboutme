import React from 'react'
import fitness from './Photo/fitness.png'
import lightcode from './Photo/Lightcode.png'
import hospitel from './Photo/Hospitel.png'
import Construction from './Photo/Construction.png'
import MobileApplication from './Photo/Mobile application.png'



export default function Project() {
    return (
        <div className='max-w-[1320px] mx-auto'>
            

            <div className='grid md:grid-cols-2 gap-10 py-20 px-6'>
                <div className='overflow-hidden rounded-3xl'>
                    <img src={fitness} className='rounded-3xl border-2 border-color-secondary hover:scale-105 duration-200 ease-in' alt='flence'></img>
                </div>

                <div className='flex items-center space-y-5'>
                    <div className='space-y-5'>
                        <h4 className='font-sora text-4xl font-medium'>Fitness Website</h4>
                        <p className='font-sora '> A responsive fitness website built using HTML , CSS and Bootstrap.</p>

                        <button class="button">
                            <span class="button-content  font-sora"> <a href="https://amanraj0264.github.io/fitness-club/">Demo</a>
                            </span>
                        </button>
                        
                    </div>
                </div>

            </div>

            
            <div className='flex  gap-10 py-20 px-6 flex-col-reverse md:flex-row'>
                

                <div className='flex items-center space-y-5 '>
                    <div className='space-y-5'>
                        <h4 className='font-sora text-4xl font-medium'>Fitness Website</h4>
                        <p className='font-sora '> A responsive financial App website built using Tailwind and React.</p>

                        <button class="button">
                            <span class="button-content  font-sora"><a href="https://financial-wine.vercel.app/">Demo</a> </span>
                        </button>
                    </div>
                </div>

                <div className='overflow-hidden rounded-3xl basis-3/6'>
                    <img src={lightcode} className=' rounded-3xl border-2 border-color-secondary hover:scale-105 duration-200 ease-in ' alt='flence'></img>
                </div>

            </div>


            <div className='grid md:grid-cols-2 gap-10 py-20 px-6'>
                <div className='overflow-hidden rounded-3xl'>
                    <img src={hospitel} className='rounded-3xl border-2 border-color-secondary hover:scale-105 duration-200 ease-in' alt='flence'></img>
                </div>

                <div className='flex items-center space-y-5'>
                    <div className='space-y-5'>
                        <h4 className='font-sora text-4xl font-medium'>Fitness Website</h4>
                        <p className='font-sora '> A responsive Cancer Hospitel website built using Tailwind and React.</p>

                        <button class="button">
                        <span class="button-content  font-sora"><a href="https://carcinova.vercel.app/">Demo</a> </span>
                        </button>
                    </div>
                </div>

            </div>


            <div className='flex  gap-10 py-20 px-6 flex-col-reverse md:flex-row'>
                

                <div className='flex items-center space-y-5'>
                    <div className='space-y-5 '>
                        <h4 className='font-sora text-4xl font-medium'>Construction Website Design</h4>
                        <p className='font-sora '>Creating this website design using Figma And Photoshop. </p>

                        <button class="button">
                            <span class="button-content  font-sora"><a href="https://www.figma.com/proto/wWumzybo6MEFlRiwJTK0hF/Website?page-id=1587%3A2648&node-id=1588-2653&viewport=102%2C297%2C0.1&t=mVZPijlfosRynqzE-1&scaling=scale-down-width&content-scaling=fixed">Demo</a> </span>
                        </button>
                    </div>
                </div>

                <div className='overflow-hidden rounded-3xl basis-3/6'>
                    <img src={Construction} className='rounded-3xl border-2 border-color-secondary hover:scale-105 duration-200 ease-in ' alt='flence'></img>
                </div>

            </div>



            <div className='grid md:grid-cols-2 gap-10 py-20 px-6'>
                <div className='overflow-hidden rounded-3xl '>
                    <img src={MobileApplication} className='rounded-3xl border-2 border-color-secondary hover:scale-105 duration-200 ease-in' alt='flence'></img>
                </div>

                <div className='flex items-center space-y-5 '>
                    <div className='space-y-5'>
                        <h4 className='font-sora text-4xl font-medium'>Mobile Application Design </h4>
                        <p className='font-sora '> Creating this website design using Figma And Photoshop.</p>

                        <button class="button">
                        <span class="button-content  font-sora"><a href="https://www.figma.com/proto/wWumzybo6MEFlRiwJTK0hF/Website?page-id=426%3A450&node-id=2723-126&node-type=canvas&viewport=295%2C279%2C0.1&t=k5oQAVqcjs1f1Ycv-1&scaling=scale-down&content-scaling=fixed">Demo</a> </span>
                        </button>
                    </div>
                </div>

            </div>




        </div>
    )
}
