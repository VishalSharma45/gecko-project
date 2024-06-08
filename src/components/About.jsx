import React from 'react'
import AboutBg from '../assets/Rectangleabout-bg.svg';
import AboutBanner from '../assets/about-banner.png';

const About = () => {
    return (
        <div
            id='aboutus'
            className='md:h-[700px] bg-cover container mt-16  flex items-center justify-center'
            style={{ backgroundImage: `url(${AboutBg})`, backgroundRepeat: "no-repeat", }}
        >
            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5 sm:mt-16 md:mt-52'>
                <div className='p-2 sm:px-10 lg:px-28 flex flex-col justify-center items-start'>
                    <h2 class="drop-shadow-lg text-3xl font-bold mt-4 sm:text-5xl">About us </h2>
                    <p className='text-[#606060] leading-snug text-justify mt-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                    <button className='hover:bg-[#ff6600a8] text-xl rounded-full bg-[#FF6400] text-bold py-2 px-6 text-white text-bold mt-6'>About us</button>
                </div>
                <div className='flex-1 '>
                    <img className='sm:w-[300px] sm:h-[300px] md:w-[640px] md:h-[380px]' src={AboutBanner} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About