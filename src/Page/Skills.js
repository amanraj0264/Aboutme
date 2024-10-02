import React from 'react'
import html from './Photo/html.png'
import css from './Photo/css.png'
import javascript from './Photo/javascript.png'
import bootstrap from './Photo/bootstrap.png'
import tailwind from './Photo/tailwind.png'
import react from './Photo/react.png'
import python from './Photo/python.png'
import mysql from './Photo/mysql.png'
import photoshop from './Photo/Photoshop.png'
import figma from './Photo/figma.png'
import xd from './Photo/Adobexd.png'


export default function Skills() {
    return (
        <div className='max-w-[1320px] mx-auto'>

            <div>
                <h1 className=' font-sora font-bold text-center text-4xl py-20 grandient'>Skills</h1>
            </div>


            <div className='grid md:grid-cols-4 grid-cols-2  gap-10 justify-items-center items-center py-20 '>


                <div>
                    <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                        
                            <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                                <img className=' h-[100px] py-2   rounded-2xl' src={html} alt='html'></img>
                                <h5 className='text-center font-mono text-2xl'>80%</h5>
                            </div>
                    </div>
                    <h5 className='font-sora text-center py-5 text-color-secondary'>HTML</h5>
                </div>

                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px]  px-6   rounded-2xl' src={css} alt='css'></img>
                    <h5 className='text-center font-mono text-2xl '>75%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>CSS</h5>
                </div>


                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] px-10 py-2   rounded-2xl' src={javascript} alt='javasrcipt'></img>
                    <h5 className='text-center font-mono text-2xl '>70%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>Javascript</h5>
                </div>


                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] py-2 px-8   rounded-2xl' src={bootstrap} alt='bootstrap'></img>
                    <h5 className='text-center font-mono text-2xl '>80%</h5>
                    
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>Bootstrap</h5>
                </div>


                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] py-2 px-2    rounded-2xl' src={tailwind} alt='tailwind'></img>
                    <h5 className='text-center font-mono text-2xl '>80%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>Tailwind</h5>
                </div>

                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] py-2 px-8  rounded-2xl' src={react} alt='react'></img>
                    <h5 className='text-center font-mono text-2xl '>70%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>React</h5>
                </div>


                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] py-2 px-8  rounded-2xl' src={python} alt='python'></img>
                    <h5 className='text-center font-mono text-2xl '>75%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>Python</h5>
                </div>



                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] py-2 px-8  rounded-2xl' src={mysql} alt='mysql'></img>
                    <h5 className='text-center font-mono text-2xl '>75%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>Mysql</h5>
                </div>


               <div>
               <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] py-2   rounded-2xl' src={photoshop} alt='photoshop'></img>
                    <h5 className='text-center font-mono text-2xl '>70%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>Photoshop</h5>
               </div>


                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] py-2 px-8  rounded-2xl' src={figma} alt='figma'></img>
                    <h5 className='text-center font-mono text-2xl '>80%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>Figma</h5>
                </div>


                <div>
                <div className='border-2 bg-black hover:bg-color-secondary duration-200 ease-in border-color-secondary rounded-2xl '>
                    <img className=' h-[100px] py-2 px-2   rounded-2xl' src={xd} alt='xd'></img>
                    <h5 className='text-center font-mono text-2xl '>80%</h5>
                </div>
                <h5 className='font-sora text-center py-5 text-color-secondary'>Adobe XD</h5>
                </div>



            </div>
        </div>
    )
}
