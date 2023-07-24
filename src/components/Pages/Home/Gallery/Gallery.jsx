const images = [
  "https://i.ibb.co/PGd3fYf/graduation-concept-with-students-holding-blank-certificate-template.jpg",
  //...
  "https://i.ibb.co/88wCBY6/group-friends-graduation.jpg",
  "https://i.ibb.co/mS0M0sf/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma.jpg",
  "https://i.ibb.co/Nmtx0Qf/group-students-taking-photos.jpg",
  "https://i.ibb.co/sPB5jvQ/graduation-concept-with-girls-taking-selfie.jpg",
  "https://i.ibb.co/87MLNPZ/happy-friends-gratuating.jpg",
  "https://i.ibb.co/RzjDRLW/different-nationalities-university-graduates.jpg",
];

import React from "react";
import LazyLoad from "react-lazy-load";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto">
      <h1 className="text-center font-bold md:text-4xl text-3xl mt-14">
        Graduate's Group Picture
      </h1>
      <div className="flex justify-center mt-4 mb-10">
        <hr className="w-[25%] mb-5 broder-[4px]" />
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((image, i) => (
            <LazyLoad offset={300}>
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            </LazyLoad>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
