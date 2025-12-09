import React from 'react';
import logoimg from "..//assets/book-logo-removebg-preview.png"
import { Link, Outlet } from 'react-router';
const AuthLayout = () => {
    return (
        <div className='container mx-auto'>
             <div className='h-14 w-18 md:h-16 md:w-20 p-1'>
               <Link to='/'>
                <img src={logoimg} alt="" />
               </Link>
             </div>
             <div className='flex items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                {/* <div className='flex-1'>
                    <img src={Image} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default AuthLayout;