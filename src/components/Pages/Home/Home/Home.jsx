import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Collage from '../Collage/Collage';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collage/>
            <Gallery/>
        </div>
    );
};

export default Home;