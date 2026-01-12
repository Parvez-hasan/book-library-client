import React from 'react';
import Banner from '../Banner/Banner';
import NewBook from '../NewBook/NewBook';
import Coverage from '../../Coverage/Coverage';
import WhyChoose from '../WhyChoose/WhyChoose';
import Features from '../Features/Features';
import Testimonial from '../Testimonial/Testimonial';
import Stats from '../Stats/Stats';
import CallToAction from '../CallToAction/CallToAction';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <Banner></Banner> 
           <NewBook></NewBook>

           <WhyChoose></WhyChoose>

           {/* 1 animated section */}
           <Features></Features>

           <Testimonial></Testimonial>

           <Stats></Stats>
          

           <div className='h-700px w-full'>
            <Coverage></Coverage>
           </div>

            <CallToAction></CallToAction>

        </div>
    );
};

export default Home;