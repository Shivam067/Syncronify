"use client"

import React from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const notify = () => {
        return toast.success("Login successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        notify();
    }

    return (
        <>
            <div className='flex items-center justify-center w-full'>
                <div className={`mx-auto w-full max-w-lg bg-[#1B1B1B] text-slate-100 rounded-xl p-10 border border-white/10`}>
                    <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <h1>LOGO</h1>
                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                    <p className="mt-2 text-center text-base text-slate-100/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            href=""
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit} className='mt-8'>
                        <div className='space-y-2'>
                            <label
                                htmlFor='username'
                                className="inline-block mt-2 pl-1"
                            >Username</label>
                            <input
                                type='text' 
                                id='username'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={`px-3 py-2 rounded-lg outline-none duration-200 border bg-[#1B1B1B] text-slate-50 border-gray-200 w-full focus:bg-gray-50 focus:text-black`}
                                placeholder='Username' />
                        </div>

                        <div className='space-y-2'>
                            <label
                                htmlFor='password'
                                className="inline-block mt-2 pl-1"
                            >Password</label>
                            <input
                                type='password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`px-3 py-2 rounded-lg outline-none duration-200 border bg-[#1B1B1B] text-slate-50 border-gray-200 w-full focus:bg-gray-50 focus:text-black`}
                                placeholder='Password' />
                        </div>

                        <div className='space-y-5 pt-4'>
                            <button
                            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                            >SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login