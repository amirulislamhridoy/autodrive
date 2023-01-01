import React from 'react';
import { useForm } from "react-hook-form";
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <section className='max-w-7xl mx-2 xl:mx-auto'>
            <p className='text-[#bbbbbb] text-md sm:text-xl font-bold mt-10'>CONTACT US</p>
            <h2 className='text-2xl font-bold sm:text-4xl sm:mt-2 md:mt-4'>GET IN TOUCH</h2>
            <article className='mt-1 sm:mt-2 text-justify'>
                Odio eu viverra tincidunt tristique ullamcorper blandit dipiscing nunc risus integer at elementum cursus. Lorem justo a felis elit amet.
            </article>
            <div className='sm:flex gap-x-12 my-4'>
                <form className='p-4 sm:p-7 bg-[#0a1931] mt-5 sm:w-7/12 xl:w-6/12' onSubmit={handleSubmit(onSubmit)}>
                    <input className='focus:outline-0 p-5 w-full mb-1' {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} placeholder='Your Name' />
                    {errors.name?.type === 'required' && <p style={{ color: '#da635d' }}>You should must write name.</p>}
                    <input className='focus:outline-0 p-5 w-full my-1' {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} placeholder='example@gmail.com' />
                    {errors.email?.type === 'required' && <p style={{ color: '#da635d' }}>You should must write email.</p>}
                    {errors.email?.type === 'pattern' && <p style={{ color: '#da635d' }}>Your email is invalid.</p>}
                    <input className='focus:outline-0 p-5 w-full my-1' type="number" {...register("number", {
                        required: {
                            value: true,
                            message: 'You should must write phone number.'
                        },
                        minLength: {
                            value: 4,
                            message: 'Your number will be minium 4 digit.' // JS only: <p>error message</p> TS only support string
                        }
                    })} placeholder='0155555555' />
                    {errors?.number?.message && <p style={{ color: '#da635d' }}>{errors?.number?.message}</p>}
                    <textarea className='focus:outline-0 p-5 w-full min-h-[120px] mt-1'
                        {...register("message", {
                            required: {
                                value: true,
                                message: 'You should write text or message.'
                            },
                            minLength: {
                                value: 10,
                                message: 'Your text length will be minium 10.' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                        placeholder='Write Your Message'
                    />
                    {errors?.message?.message && <p style={{ color: '#da635d' }}>{errors?.message?.message}</p>}
                    <input className='bg-[#ffc947] py-3 px-8 font-bold mt-2' type="submit" value='SEND MESSAGE' />
                </form>
                <div className='sm:w-4/12 xl:w-6/12 flex flex-col gap-y-4 xl:gap-y-10 items-center justify-center mt-5 sm:mt-0'>
                    <div className='flex flex-col items-center justify-center w-full py-3' style={{ backgroundColor: '#f4f6fa' }}>
                        <i className="text-xl md:text-2xl rounded-full py-4 px-5 bg-[#f6e8de] fa-solid fa-location-pin"></i>
                        <h4 className='md:text-xl font-bold mt-3'>ADDRESS</h4>
                        <p className='mt-2'>Mohakhali Bazar, Dhaka 1212</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full py-3' style={{ backgroundColor: '#f4f6fa' }}>
                        <i className="text-xl md:text-2xl rounded-full py-4 px-4 bg-[#f6e8de]  fa-solid fa-envelope"></i>
                        <h4 className='md:text-xl font-bold mt-3'>EMAIL</h4>
                        <p className='mt-2'>example@gamil.com</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full py-3' style={{ backgroundColor: '#f4f6fa' }}>
                        <i className="text-xl md:text-2xl rounded-full py-4 px-4 bg-[#f6e8de]  fa-solid fa-phone"></i>
                        <h4 className='md:text-xl font-bold mt-3'>PHONE</h4>
                        <p className='mt-2'>(02) 323 23444</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;