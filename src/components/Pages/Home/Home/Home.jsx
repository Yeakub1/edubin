import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Collage from '../Collage/Collage';
import Research from '../Research/Research';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collage/>
            <Gallery />
            <Research />
            <UserReview/>
        </div>
    );
};

export default Home;