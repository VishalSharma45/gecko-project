import React from 'react'
import UserProfile from '../assets/user-profile.png'
import Quote from '../assets/quote.svg'
import TestimonialBg from '../assets/testimonial-bg.svg'
import Blogs from './Blogs'

const Testimonials = () => {
    return (
        <div className='container min-h-screen'
            style={{ backgroundImage: `url(${TestimonialBg})`, backgroundRepeat: "no-repeat" }}
        >
            <h2 class="drop-shadow-lg text-3xl font-bold mt-10 sm:text-5xl">Testimonials</h2>
            <div className='flex justify-center gap-8 mt-16 '>
                <div className='px-8 py-10 bg-white rounded-lg relative'>
                    <div className='flex sm:flex-col md:flex-row justify-start items-center gap-3'>
                        <img className='w-14 h-14 rounded-full' src={UserProfile} alt="" />
                        <h4 className='font-bold text-[18px]'>Josh brollins</h4>
                    </div>
                    <p className='text-[#606060] leading-snug mt-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
                    <img className='w-10 h-8 absolute top-0 -translate-y-1/2' src={Quote} alt="" />
                    <img className='w-10 h-8 absolute bottom-0 right-4 translate-y-1/2 rotate-180' src={Quote} alt="" />
                </div>
                <div className='px-8 py-10 bg-white rounded-lg relative'>
                    <div className='flex flex-row justify-start items-center gap-3'>
                        <img className='w-14 h-14 rounded-full' src={UserProfile} alt="" />
                        <h4 className='font-bold text-[18px]'>Josh brollins</h4>
                    </div>
                    <p className='text-[#606060] leading-snug mt-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
                    <img className='w-10 h-8 absolute top-0 -translate-y-1/2' src={Quote} alt="" />
                    <img className='w-10 h-8 absolute bottom-0 right-4 translate-y-1/2 rotate-180' src={Quote} alt="" />
                </div>
            </div>
            <Blogs />
        </div>
    )
}

export default Testimonials