"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { login } from '@/lib/features/authentication/authSlice';

function Login({handleClick}) {
    const dispatch = useAppDispatch();
    const authenticatedUser = useAppSelector((state: any)=>state.auth.user);

    const router=useRouter();

    // const [username, setUsername] = useState('');
    // const [userType, setUserType] = useState('');
    // const [password, setPassword] = useState('');
    // const [selectedRole, setSelectedRole]=useState('');

    const[user, setUser]=useState({
        username: '',
        password: '',
        role: ''
    });

    const handleChange=(e)=>{
        // e.preventDefault();
        setUser({
            ...user,
            [e.target.id]: e.target.value,
        })
        console.log(e.target.id);
    }

    // const handleRoleChange=(e)=>{
    //     e.preventDefault();
    //     setSelectedRole(e.target.value);
    // }

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
        const {username, password, role}=user;
        notify();
        dispatch(login({username, password, role}));
        setTimeout(() => {
            switch (user.role) {
                case 'user':
                    router.push('/dashboard');
                    break;
                case 'admin':
                    router.push('/admin-dashboard')
                    break;
                case 'application admin':
                    router.push( '/application-admin-dashboard' );
                    break;
                default:
                    alert( `Unknown user type ${user.role}` )
                    break;
            }
        }, 5000);
        console.log(authenticatedUser.password);
    }

    return (
        <>
            <div className='flex items-center justify-center w-full'>
                <div className={`mx-auto w-full max-w-lg text-[#1B1B1B] bg-slate-100 rounded-xl p-10 border border-white/10`}>
                    <div className="mx-auto text-5xl p-10 w-32 h-32">
                        {/* <span className="inline-block w-full max-w-[100px] p-10"> */}
                        <img src="" alt="SF" className='object-cover'/>
                            {/* <h1 className='text-5xl p-10 font-bold'>SF</h1> */}
                        {/* </span> */}
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                    <p className="mt-2 text-center text-base text-[#1B1B1B]">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            href="authentication" onClick={handleClick}
                            className="font-semibold text-primary text-blue-900 transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                    <form onSubmit={handleSubmit} className='mt-8'>
                        <div className='space-y-2'>
                            <label
                                htmlFor='username'
                                className="inline-block mt-2 pl-1 text-bf"
                            >Username</label>
                            <input
                                type='text' 
                                id='username'
                                value={user.username}
                                onChange={handleChange}
                                className={`px-3 py-2 rounded-lg outline-none duration-200 border text-[#1B1B1B] bg-slate-50 border-gray-200 w-full focus:text-gray-50 focus:bg-black`}
                                placeholder='Username' />
                        </div>

                        <div className='space-y-2'>
                            <label
                                htmlFor='password'
                                className="inline-block mt-2 pl-1 text-bf"
                            >Password</label>
                            <input
                                type='password'
                                id='password'
                                value={user.password}
                                onChange={handleChange}
                                className={`px-3 py-2 rounded-lg outline-none duration-200 border text-[#1B1B1B] bg-slate-50 border-gray-200 w-full focus:text-gray-50 focus:bg-black`}
                                placeholder='Password' />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="role" className='inline-block mt-2 pl-1 text-bf'>Select Role:</label>
                            <select id="role" value={user.role} onChange={handleChange} className='px-3 py-2 rounded-lg outline-none duration-200 border text-[#1B1B1B] bg-slate-50 border-gray-200 w-full focus:text-gray-50 focus:bg-black'>
                                <option value="">Select a role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                <option value="application admin">Application Admin</option>
                                {/* Add more options as needed */}
                            </select>
                            {/* Display selected role */}
                            {/* {selectedRole && <p>Selected Role: {selectedRole}</p>} */}
                        </div>

                        <div className='space-y-5 pt-4'>
                            <button
                            className={`w-full bg-slate-900 hover:bg-slate-950 text-slate-50 font-bold py-2 px-4 rounded-lg`}
                            >Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login