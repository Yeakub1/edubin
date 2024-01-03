import CollageName from '../CollageName/CollageName';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet-async';

const Admission = () => {
    return (
      <div>
        <Helmet>
          <title>Edubin | Admission</title>
        </Helmet>
        <CollageName />
        <Review />
      </div>
    );
};

export default Admission;