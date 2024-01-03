import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Collage from '../Collage/Collage';
import Research from '../Research/Research';
import UserReview from '../UserReview/UserReview';
import FreeCourse from '../FreeCourse/FreeCourse';
import Newsletter from '../Newsletter/Newsletter';
import Courses from '../Courses/Courses';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs/>
            <Collage />
            <Courses/>
            <Gallery />
            <Research />
            <FreeCourse />
            <ChooseUs/>
            <Newsletter/>
            <UserReview/>
        </div>
    );
};

export default Home;