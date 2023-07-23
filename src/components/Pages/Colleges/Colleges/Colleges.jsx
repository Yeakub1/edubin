import React, { useEffect, useState } from 'react';
import CollageData from '../../Home/Collage/CollageData';

const Colleges = () => {
    const [Collage, setCollage] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:5000/collage")
        .then((res) => res.json())
        .then((data) => setCollage(data));
    }, []);
    return (
      <div className="max-w-7xl mx-auto px-5 pt-24 mb-20">
        <div className="grid md:grid-cols-3 gap-8 justify-center ">
          {Collage.map((datas) => (
            <CollageData key={datas._id} datas={datas} />
          ))}
        </div>
      </div>
    );
};

export default Colleges;