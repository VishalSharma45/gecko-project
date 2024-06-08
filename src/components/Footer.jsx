import React, { useEffect, useState } from 'react'
import Logo from '../assets/Bitmaplogo.png'

const Footer = () => {

    const [address, setAddress] = useState([]);

    useEffect(() => {
        let getAddress = async () => {
            let response = await fetch("http://3.7.81.243:3253/api/settings/fetch-frontend-details");

            response = await response.json();
            console.log(response);
            setAddress(response.data);
        }

        getAddress();
    }, []);

    return (
        <footer className='bg-[#E7F1F2]'>
            <div className="flex flex-col container">
                <div className='flex sm:flex-col lg:flex-row  flex-wrap items-center justify-around gap-4 sm:mt-4 md:mt-16'>
                    <div className="">
                        <p className='font-bold text-[22px] italic'>Gecko Accountancy</p>
                        <p className='text-[#00D5F8] font-bold text-[22px]'>{address.contact_mail}</p>
                    </div>
                    {/* <div className='w-1 h-10 border border-r border-color: rgb(209 213 219); hidden md:block'></div> */}
                    <div className='grid grid-cols-2 gap-10'>
                        <div>
                            <h3>Address</h3>
                            <p className='text-[#606060] text-[14px]'>{address.address}</p>
                        </div>
                        <div>
                            <h3>Contacs</h3>
                            <p className='text-[#606060] text-[14px]'>{address.contact_mail}</p>
                            <p className='text-[#606060] text-[14px]'>{address.contact_no}</p>
                        </div>
                    </div>
                </div>
                <div className='flex sm:flex-col md:flex-row flex-wrap items-center justify-around gap-4 sm:mt-8 md:mt-32 pb-2'>
                    <div>
                        <img className='w-[135px] h-[60px]' src={Logo} alt="" />
                    </div>
                    <div className='text-[#606060] text-[15px] flex gap-10'>
                        <span>About</span>
                        <span>Blogs</span>
                        <span>Contact</span>
                        <span>Services</span>
                    </div>
                    <div className='text-gray-400 font-medium'>
                        © {new Date().getFullYear()}. All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer