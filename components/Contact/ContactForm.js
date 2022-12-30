import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <p className='text-[#bbbbbb] text-md sm:text-xl font-bold'>CONTACT US</p>
                <h2 className='text-2xl font-bold sm:text-4xl sm:mt-2 md:mt-4'>GET IN TOUCH</h2>
                <article className='mt-1 sm:mt-4 md:mt-8 text-justify'>
                    Odio eu viverra tincidunt tristique ullamcorper blandit dipiscing nunc risus integer at elementum cursus. Lorem justo a felis elit amet.
                </article>
                <form onSubmit={handleSubmit(onSubmit)} className='p-5 bg-red-500'>
                    <input className='focus:outline-0 p-5 w-full mb-1' {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} placeholder='Your Name'/>
                    {errors.name?.type === 'required' && <p>You should must write name.</p>}
                    <input className='focus:outline-0 p-5 w-full my-1' {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} placeholder='example@gmail.com' />
                    {errors.email?.type === 'required' && <p>You should must write email.</p>}
                    {errors.email?.type === 'pattern' && <p>Your email is invalid.</p>}
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
                    {errors?.number?.message && <p>{errors?.number?.message}</p>}
                    <textarea className='focus:outline-0 p-5 w-full min-h-[150px] mt-1'
                        {...register("message", {
                            required: {
                                value: true,
                                message: 'You should write your text or message.'
                            },
                            minLength: {
                                value: 10,
                                message: 'Your text length will be minium 10.' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                        placeholder='Write Your Message'
                    />
                    {errors?.message?.message && <p>{errors?.message?.message}</p>}
                    <input type="submit" />
                </form>
            </div>
        </section>
    );
};

export default ContactForm;