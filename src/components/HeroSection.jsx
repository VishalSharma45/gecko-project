import React from 'react'
import hero from '../assets/hero.png'
 
const HeroSection = () => {
    return (
        <main className="">
            <div
                className="w-full h-screen bg-cover bg-right "
                style={{ backgroundImage: `url(${hero})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat", backgroundPosition: "right" }}
            >
                <div className='pt-16 md:px-24 flex justify-between items-center h-full'>
                    <div className='md:w-1/2 sm:w-full '>
                        <h2 class="drop-shadow-lg text-3xl font-bold mt-4 sm:text-6xl uppercase">How much </h2>
                        <h2 className='drop-shadow-lg text-3xl font-bold mt-4 sm:text-6xl uppercase'>
                            could you save? </h2>
                        <p className='text-lg w-3/4 text-[#232323] mt-4'>Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.</p>
                        <div className='bg-white rounded-md py-8 px-16 mt-6 sm:text-xl md:text-3xl font-bold text-center '>
                            Is your turnover expected to be more than £85k?
                            <div id='' className='flex items-center justify-center mt-4'>
                                <button className='hover:bg-[#ff6600a8] text-2xl rounded-full bg-[#FF6400] text-bold py-2 px-6 text-white text-bold'>Yes</button>
                                <button className='hover:bg-[#ff6600a8] text-2xl rounded-full bg-[#FF6400] text-bold py-2 px-6 text-white text-bold ml-4'>No</button>
                            </div>
                        </div>
                        <p className='text-lg text-[#232323] mt-3 font-semibold'>Takes less than 30 seconds</p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default HeroSection