import React from 'react';
import Banner from '../Banner/Banner';
import NewBook from '../NewBook/NewBook';
import Coverage from '../../Coverage/Coverage';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <Banner></Banner> 
           <NewBook></NewBook>
           {/* <Coverage></Coverage> */}
        </div>
    );
};

export default Home;