import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    fname: yup.string().required("First name is required").matches(/^[aA-zZ\s]+$/, "Name must be only alphabets"),
    lname: yup.string().required("Last name is required").matches(/^[aA-zZ\s]+$/, "Last name must be only alphabets"),
    email: yup.string().email().required("Email is required"),
    phone: yup.string().required("Phone is required").matches(phoneRegExp, 'Phone number is not valid'),
    budget: yup.number().typeError('budget must be a number').positive().integer().required("Budget is required"),
    description: yup.string("Description is required").required(),
})

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        const payload = {
            fname: data.fname,
            lname: data.lname,
            phone: data.phone,
            email: data.email,
            budget: data.budget,
            description: data.description,
        }

        try {
            let response = await fetch("http://3.7.81.243:3253/api/contact/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            response = await response.json();
            // console.log("response", response);

            if (response.success) {
                window.location.href = "/";
                alert(response.message)
            } else {
                throw new Error("Error occurred");
            }

        } catch (error) {
            console.error("Error occurred:", error.message);
        }
    }
    return (
        <div id='contactus' className='mt-10 container'>
            <h2 class="drop-shadow-lg text-3xl font-bold mt-4 sm:text-5xl">Contact Us</h2>
            <div className='w-full h-full mt-10 mb-4 md:px-[20%]'>
                <p className='text-[18px] text-[#606060] mb-10'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                        <div>
                            <input type="text" className='w-full border border-b-color-rgb(0 0 0) outline-none p-2 placeholder:text-[#606060] placeholder:text-[14px] block bg-white' placeholder='Name' {...register("fname")} />
                            {errors.fname && <p style={{ color: "red" }}>{errors.fname.message}</p>}
                        </div>
                        <div>
                            <input type="text" className='w-full border border-b-color-rgb(0 0 0) outline-none p-2 placeholder:text-[#606060] placeholder:text-[14px] block bg-white' placeholder='Last Name' {...register("lname")} />
                            {errors.lname && <p style={{ color: "red" }}>{errors.lname.message}</p>}
                        </div>
                        <div>
                            <input type="email" className='w-full border border-b-color-rgb(0 0 0) outline-none p-2 placeholder:text-[#606060] placeholder:text-[14px] block bg-white' placeholder='Mail' {...register("email")} />
                            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                        </div>
                        <div>
                            <input type="text" className='w-full border border-b-color-rgb(0 0 0) outline-none p-2 placeholder:text-[#606060] placeholder:text-[14px] block bg-white' placeholder='Phone' {...register("phone")} />
                            {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
                        </div>
                        <div>
                            <input type="text" className='w-full border border-b-color-rgb(0 0 0) outline-none p-2 placeholder:text-[#606060] placeholder:text-[14px] block bg-white' placeholder='Budget' {...register("budget")} />
                            {errors.budget && <p style={{ color: "red" }}>{errors.budget.message}</p>}
                        </div>
                        <div>
                            <input type="text" className='w-full border border-b-color-rgb(0 0 0) outline-none p-2 placeholder:text-[#606060] placeholder:text-[14px] block bg-white' placeholder='Description' {...register("description")} />
                            {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
                        </div>
                    </div>
                    <div className='flex'>
                        <button type='submit' className='hover:bg-[#ff6600a8] text-xl rounded-full bg-[#FF6400] text-bold py-2 px-6 w-1/2 text-white text-bold mt-6 mx-auto'>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact