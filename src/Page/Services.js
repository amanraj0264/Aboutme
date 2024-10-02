import React from 'react'


function Services() {
    return (
        <div className='max-w-[1320px] mx-auto py-20 px-6'>

            <h1 className='text-center font-sora text-3xl grandient'>Service</h1>
            <div className='flex md:flex-row flex-col gap-10 py-20 '>






                {data.map((d) => (


                    <div className='border border-color-secondary py-10 px-10 rounded-2xl group hover:bg-color-secondary duration-200 ease-in'>
                        <div className='flex justify-center '>
                            <img src={d.img} className=' border border-color-secondary group-hover:border-white py-4 px-4 rounded-2xl duration-200 ease-in hover:bg-color-secondary ' alt='responsive-icon '></img>
                        </div>
                        <div className='text-center'>
                            <h4 className='font-sora text-xl py-4 '>{d.title}</h4>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        </div>
                    </div>


                ))}

               
            </div>
        </div >
    )
}

const data = [
    {
        img: "./Image/service-icon-1.webp",
        title: "Responsive Design",

    },
    {
        img: "./Image/service-icon-2.webp",
        title: "Web Development",

    },
    {
        img: "./Image/service-icon-3.webp",
        title: "UI Designer",

    },
    

]

export { Services };