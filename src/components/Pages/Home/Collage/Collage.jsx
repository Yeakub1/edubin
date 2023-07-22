import React, { useEffect, useState } from 'react';
import CollageData from './CollageData';

const Collage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/collage")
          .then((res) => res.json())
          .then((data) => setData(data));
    },[])
    return (
      <div className="max-w-7xl px-5 mx-auto">
            <div className="grid md:grid-cols-3 gap-8 justify-center">
                
          {data.map((datas) => (
            <CollageData key={datas._id} datas={datas} />
          ))}
        </div>
      </div>
    );
};

export default Collage;