import React from 'react'
import ProgressCircle from "../assets/progress-circle.svg"
import DesignElements from '../assets/designElements.png';

const OurProcess = () => {
    return (
        <div className='container relative flex flex-col items-center justify-center'>
            <div className='w-full flex items-start'>
                <h2 class="drop-shadow-lg text-3xl font-bold mt-4 sm:text-5xl">Our Process</h2>
            </div>
            <div id='ourProcessContainer' className='w-full grid sm:grid-cols-1 md:grid-cols-3 gap-2 mt-16 justify-items-center'>
                {
                    [1, 2, 3].map((item) => (
                        <div className='w-[340px] h-[336px] flex flex-col items-center justify-center px-10' style={{ backgroundImage: `url(${ProgressCircle})`, backgroundRepeat: "no-repeat", }}>
                            <h4 className='text-[22px] font-bold'>Step {item}</h4>
                            <p className='text-[#606060] leading-snug text-center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>
                        </div>

                    ))
                }
            </div>
            <img className='absolute -top-[200px] bottom-0 left-[10px] md:w-128 h-full rotate-180' src={DesignElements} alt="" />
        </div>
    )
}

export default OurProcess