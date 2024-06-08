import React, { useEffect, useState } from 'react'
import Left from "../assets/Left.svg";
import Account1 from "../assets/account-img.png";
import Account2 from "../assets/account-mobile.png";
import Account3 from "../assets/account-money.png";
import { Link } from 'react-router-dom';
import moment from 'moment';

const Blogs = () => {


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        let getAllBlogs = async () => {
            let response = await fetch("http://3.7.81.243:3253/api/blog/");
            response = await response.json();
            console.log(response.data);
            setBlogs(response.data);
        }
        getAllBlogs();
    }, []);
    return (
        <div id="blogs" className='mt-10'>
            <div className='flex justify-between flex-row'>
                <h2 class="drop-shadow-lg text-3xl font-bold mt-4 sm:text-5xl">Blogs</h2>
                <div className='flex flex-row items-center gap-2'>
                    <Link to='/blogs' className='text-xl text-[#3D5FDD] font-bold'>View All</Link>
                    <img className='w-[25px] h-[15px]' src={Left} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 justify-items-center mt-16 mb-6 gap-6'>
                {
                    blogs.length > 0 && blogs.slice(0, 3).map((item, index) => (
                        <div className='hover:bg-zinc-200 p-2 rounded-md transition-all'>
                            <div className='w-full'>
                                <img className='w-full h-[200px] bg-center rounded-lg' src={item.image_url} alt="" />
                            </div>
                            <div className='text-[20px] font-bold mt-2 capitalize'>{item.name}</div>
                            <p className='text-sm text-[#606060] '>{moment(item.createdAt).format("MMMM D, YYYY")} by <span className='text-[#D0021B]'>{item.writer_name}</span></p>
                            <p className='text-[14px] text-[#606060] mt-2'>{item.short_description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blogs