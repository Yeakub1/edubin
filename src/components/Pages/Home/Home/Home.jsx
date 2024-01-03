import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Collage from '../Collage/Collage';
import Research from '../Research/Research';
import UserReview from '../UserReview/UserReview';
import FreeCourse from '../FreeCourse/FreeCourse';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner />
            <Collage/>
            <Gallery />
            <Research />
            <FreeCourse />
            <Newsletter/>
            <UserReview/>
        </div>
    );
};

export default Home;