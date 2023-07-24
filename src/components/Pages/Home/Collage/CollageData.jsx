import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const CollageData = ({ datas }) => {
  const {
    _id,
    collegeName,
    collegeImage,
    admissionDates,
  } = datas;
  console.log(_id);
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <LazyLoad offset={300}>
            <img
              src={collegeImage}
              className="h-48 rounded-md w-full scale-75 hover:scale-90 ease-in duration-500"
              draggable={false}
            />
          </LazyLoad>
        </figure>
        <div className="px-5 text-center">
          <h2 className="font-bold text-xl">{collegeName}</h2>
          <p className=" mt-3">
            <span className="font-bold">Admission:</span> fall{" "}
            {admissionDates.fall}
          </p>
          <p className=" "> spring {admissionDates.spring}</p>
          <div className="flex justify-center">
            <Link to={`/details/${_id}`}>
              <button className="px-4 mt-2 mb-4 py-2 bg-blue-950 border-0 flex items-center gap-3 rounded-lg text-white hover:bg-warning hover:text-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CollageData;