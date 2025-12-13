import React from 'react';
import logoimg from "..//assets/book-logo-removebg-preview.png"
import { Link, Outlet } from 'react-router';
import authImg from "..//assets/library-9784151_1280.png"
const AuthLayout = () => {
    return (
        <div className='container mx-auto'>
             <div className='h-14 w-18 md:h-16 md:w-20 p-1'>
               <Link to='/'>
                <img src={logoimg} alt="" />
               </Link>
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2  justify-center items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 p-4'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;