import React from 'react'
import Management from '../assets/management.svg';
import Budget from '../assets/budget.svg';
import Audit from '../assets/audit.svg';
import Payroll from '../assets/payroll.svg';
import Software from '../assets/software.svg';
import Tax from '../assets/tax.svg';
import DesignElements from '../assets/designElements.png';

const data = [
    {
        image: Audit,
        title: "Audit & Account",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        image: Budget,
        title: "Budget & Projections",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        image: Payroll,
        title: "Payroll & Booking",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        image: Software,
        title: "Software Training & IT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        image: Tax,
        title: "Tax planning & Returns",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        image: Management,
        title: "Management Information",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
]

const Services = () => {
    return (
        <div id="services" className='container mt-4 pt-1 relative'>
            <h2 class="drop-shadow-lg text-3xl font-bold mt-4 sm:text-5xl">Services </h2>
            <div id='cardContaine' className='grid md:grid-cols-3 gap-2 gap-x-16 gap-y-8 w-full px-2 '>
                {
                    data.length > 0 && data.map((item) => (
                        <div className='mt-20 flex flex-col items-center justify-center gap-3'>
                            <div>
                                <img className='w-20' src={item.image} alt="" />
                            </div>
                            <h4 className='text-[22px] font-bold'>{item.title}</h4>
                            <p className='text-[#606060] leading-snug text-center'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <img className='absolute top-0 bottom-0 right-0 md:w-128 h-full' src={DesignElements} alt="" />
        </div>
    )
}

export default Services