import React from 'react';
import logoimg from "..//assets/book-logo-removebg-preview.png"
import { Outlet } from 'react-router';
const AuthLayout = () => {
    return (
        <div className='container mx-auto'>
             <div>
                <img src={logoimg} alt="" />
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