import  { useEffect, useState } from "react";
import ShowReview from "./ShowReview";

const UserReview = () => {
  const [review, setReview] = useState([]);
  const [teamData, setTeamData] = useState([]);

  const handleSeeAll = () => {
    setTeamData(review);
  };
  const handleSeeLess = () => {
    setTeamData(review.slice(0, 3));
  };

  useEffect(() => {
    fetch("https://edubin-server.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setTeamData(data.slice(0, 3));
        setReview(data);
      });
  }, []);

  return (
    <div className="max-w-7xl px-5 mx-auto my-20 ">
      <div className="">
        <h1 className="text-center font-bold md:text-4xl text-3xl mt-14 ">
          Students feedback
        </h1>
        <div className="flex justify-center mt-4 mb-10">
          <hr className="w-[25%] mb-5 broder-[4px]" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 justify-center">
        {teamData.map((reviews) => (
          <ShowReview key={reviews._id} reviews={reviews} />
        ))}
      </div>
      <div className={`flex justify-center mt-10`}>
        {teamData.length === 3 ? (
          <button
            onClick={handleSeeAll}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            See all Review
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

export default UserReview;
