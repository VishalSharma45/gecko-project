import React, { useState, useEffect } from 'react';
import Logo from '../assets/Bitmaplogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(window.innerWidth > 768); // Open on large screens, closed on small screens

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`px-4 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-20 ${scrolling ? 'backdrop-blur-md' : 'bg-transparent'}`}>
            <Link to="/" id="logo" className="flex gap-2 items-center flex-1">
                <img className="object-cover h-[80px] w-[180px]" src={Logo} alt="logo" />
            </Link>
            <div id="nav-menu" className={`lg:flex gap-8 ${drawerOpen ? '' : 'hidden'}`}>
                <a href="#services" className="font-bold m-1 text-[20px] p-1 hover:bg-gray-100 block rounded-lg hover:bg-opacity-30">Services</a>
                <a href="#aboutus" className="font-bold m-1 text-[20px] p-1 hover:bg-gray-100 block rounded-lg hover:bg-opacity-30">About us</a>
                <Link to="blogs" className="font-bold m-1 text-[20px] p-1 hover:bg-gray-100 block rounded-lg hover:bg-opacity-30">Blogs</Link>
                <a href="#" className="font-bold m-1 text-[20px] p-1 hover:bg-gray-100 block rounded-lg hover:bg-opacity-30">Case Studies</a>
                <a href="#contactus">
                    <button
                        id='contactus'
                        className="p-2 font-bold bg-[#FF6400] text-xl rounded-full text-white px-6 py-2 hover:bg-[#ff6600a4] shadow-md uppercase"
                        style={{
                            "-webkit-text-stroke-width": "0.8px",
                            "-webkit-text-stroke-color": "black",
                        }}
                    >
                        Contact us
                    </button>
                </a>
            </div>
            <button className="p-2 lg:hidden" onClick={() => setDrawerOpen(prev => !prev)}>
                <i className="fa-solid fa-bars text-gray-600"></i>
            </button>
            <div className={`hidden fixed z-10 bg-white inset-0 p-3 md:hidden ${drawerOpen ? '' : 'hidden'}`}>
                <div className="flex justify-between">
                    <Link to="/" id="logo" className="flex gap-2 items-center">
                        <img className="object-cover max-w-12 max-h-12" src={Logo} alt="logo" />
                    </Link>
                    <button className="p-2" onClick={() => setDrawerOpen(prev => !prev)}>
                        <i className="fa-solid fa-xmark text-gray-600"></i>
                    </button>
                </div>
                <div className="mt-6 flex flex-col">
                    <Link to="#services" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg hover:bg-opacity-30">Services</Link>
                    <Link to="#aboutus" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg hover:bg-opacity-30">About us</Link>
                    <Link to="/blogs" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg hover:bg-opacity-30">Blogs</Link>
                    <Link to="#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg hover:bg-opacity-30">Case Studies</Link>
                    <button className="p-2">Contact us</button>
                </div>
                <div className="h-[1px] bg-gray-300"></div>
            </div>
        </nav>
    );
};

export default Navbar;
