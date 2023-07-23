import React from 'react';

const Research = () => {
    return (
      <div className="max-w-7xl mx-auto px-5 mt-20 mb-10">
        <div className="">
          <h1 className="text-center font-bold md:text-5xl text-3xl mt-14">
            Research History
          </h1>
          <div className="flex justify-center mt-4 mb-10">
            <hr className="w-[25%] mb-5 broder-[4px]" />
          </div>
        </div>
        <div className="grid md:grid-cols-3">
          <div className="card w-96 glass">
            <figure>
              <img
                className="h-60 w-full"
                src="https://innovate.ieee.org/wp-content/uploads/2018/08/IEEE-Social-Media-A-4-768x402.png"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <p>
                New eBook from Now Publishers Explores Tech in Medical Research
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://innovate.ieee.org/new-ebook-from-now-publishers-explores-tech-in-medical-research/"
                  target="_blank"
                >
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
                    Click Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img
                className="h-60 w-full"
                src="https://innovate.ieee.org/wp-content/uploads/2023/06/iStock-1222706809.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <p>
                Researchers Apply Machine Learning Model to Task and Motion
                Planning for Robots
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://innovate.ieee.org/innovation-spotlight/task-and-motion-planning-for-robots/"
                  target="_blank"
                >
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
                    Click Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <img
                className="h-60 w-full"
                src="https://innovate.ieee.org/wp-content/uploads/import/spotlight/shutterstock_355193942-1024x683.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <p>
                Get Up to Speed on 5G Research for Mobile World Congress 2018
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://innovate.ieee.org/innovation-spotlight/5g-mobile-world-congress-5g-devices-5g-networks/"
                  target="_blank"
                >
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
                    Click Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Research;