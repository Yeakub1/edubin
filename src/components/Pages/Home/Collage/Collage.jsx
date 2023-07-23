import React, { useEffect, useState } from 'react';
import CollageData from './CollageData';

const Collage = () => {
 const [allData, setAllData] = useState([]);
 const [teamData, setTeamData] = useState([]);

    const handleSeeAll = () => {
      setTeamData(allData);
    };
    const handleSeeLess = () => {
      setTeamData(allData.slice(0, 3));
    };
    useEffect(() => {
      fetch("http://localhost:5000/collage")
        .then((res) => res.json())
        .then((data) => {
          setTeamData(data.slice(0, 3));
          setAllData(data);
        });
    }, []);
    return (
      <div className="max-w-7xl px-5 mx-auto">
        <h1 className="text-center font-bold md:text-5xl text-3xl mt-14">
          Collage information
        </h1>
        <div className="flex justify-center mt-4 mb-10">
          <hr className="w-[25%] mb-5 broder-[4px]" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {teamData.map((datas) => (
            <CollageData key={datas._id} datas={datas} />
          ))}
        </div>
        <div className={`flex justify-center mt-10`}>
          {teamData.length === 3 ? (
            <button
              onClick={handleSeeAll}
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              See all Team
            </button>
          ) : (
            <button
              onClick={handleSeeLess}
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              See Less
            </button>
          )}
        </div>
      </div>
    );
};

export default Collage;