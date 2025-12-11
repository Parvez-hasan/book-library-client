import React from 'react';
import Banner from '../Banner/Banner';
import NewBook from '../NewBook/NewBook';
import Coverage from '../../Coverage/Coverage';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <Banner></Banner> 
           <NewBook></NewBook>

           {/* <div className='h-700px w-full'>
            <Coverage></Coverage>
           </div> */}

           <WhyChoose></WhyChoose>

        </div>
    );
};

export default Home;