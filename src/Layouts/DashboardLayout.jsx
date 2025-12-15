import React, { useState } from 'react';
import Sidebar from '../components/Dashboard/Sidber/Sidebar';
import { Outlet } from 'react-router';
import Topbar from '../components/Dashboard/Topbar/Topbar';

const DashboardLayout = () => {

     const [open, setOpen] = useState(false);

    return (
        <div className='container mx-auto min-h-screen bg-gray-100'>
         
         <Topbar toggle={() => {setOpen(!open)}}></Topbar>

         <div className='flex'>
           
            <Sidebar open={open}></Sidebar>
            
            <main className='flex-1 p-4'>
                <Outlet></Outlet>
            </main>
           
         </div>
           
        </div>
    );
};

export default DashboardLayout;