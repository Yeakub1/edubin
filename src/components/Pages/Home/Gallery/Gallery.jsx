const images = [
  "https://i.ibb.co/PGd3fYf/graduation-concept-with-students-holding-blank-certificate-template.jpg",
  //...
  "https://i.ibb.co/88wCBY6/group-friends-graduation.jpg",
  "https://i.ibb.co/mS0M0sf/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma.jpg",
  "https://i.ibb.co/Nmtx0Qf/group-students-taking-photos.jpg",
  "https://i.ibb.co/K9KvYYZ/depositphotos-8963157-Graduation-group.webp",
  "https://i.ibb.co/87MLNPZ/happy-friends-gratuating.jpg",
  "https://i.ibb.co/XCwZBkw/360-F-338752127-Ke-LWD80r6a6t-Nug-Fm-Vrvcma5z-N5jd-QBn.jpg",
];

import React from "react";
import Masonry from "react-responsive-masonry";

const Gallery = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto">
      <h1 className="text-center font-bold md:text-4xl text-3xl mt-14">
        Graduate's Group Picture
      </h1>
      <div className="flex justify-center mt-4 mb-10">
        <hr className="w-[25%] mb-5 broder-[4px]" />
      </div>
      <Masonry columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "inline-block" }}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
