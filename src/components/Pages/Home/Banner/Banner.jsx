import React from 'react';

const Banner = () => {
    return (
      <div className="min-h-screen banner">
        <div className="max-w-7xl mx-auto px-5 text-white text-center">
          <div className="pt-40">
            <div className="container">
              <p className="text text-3xl lg:text-5xl">Choose the right theme for education</p>
            </div>
            <p className="mt-10 text-xl">
              Donec vitae sapien ut libearo venenatis faucibus. Nullam quis
              ante. <br/> Etiam sit amet orci eget eros faucibus tincidunt Sed
              fringilla mauri amet nibh.
            </p>
            <div className="mt-10 flex items-center gap-5 justify-center">
              <button className="btn btn-warning bg-blue-950 border-none text-white">
                Read More
              </button>
              <button className="btn btn-warning bg-blue-950 border-none text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;