import React from 'react';
import Sidebar from '../components/Dashboard/Sidber/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className='container mx-auto'>

            <Sidebar></Sidebar>
            
            <div className='flex-1 p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;