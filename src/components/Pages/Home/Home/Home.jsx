import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Collage from '../Collage/Collage';
import Research from '../Research/Research';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collage/>
            <Gallery />
            <Research/>
        </div>
    );
};

export default Home;