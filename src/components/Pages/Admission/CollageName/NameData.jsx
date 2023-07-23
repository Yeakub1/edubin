import React from 'react';

const NameData = ({ datas }) => {
    const { collegeName, admissionDates } = datas;
    return (
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{collegeName}</h2>
          <p>Admission: {admissionDates.fall}</p>
          <p>Admission: {admissionDates.spring}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    );
};

export default NameData;