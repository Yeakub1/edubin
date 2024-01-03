/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { FaUser } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
const FreeCourseCard = ({ item }) => {
  const { imgUrl, title, students, rating } = item;

  return (
    <div className="card glass">
      <div className=" mb-5">
        <img src={imgUrl} alt="" className="w-100 relative" />
        <button className="-mt-6 z-50 absolute bg-purple-800 text-white px-5 py-2 rounded-lg">
          Free
        </button>
      </div>

      <div className="p-3">
        <h6 className="text-lg font-bold">{title}</h6>

        <div className="flex items-center gap-5 mt-3">
          <span className="flex items-center gap-2">
            <FaUser /> {students}k
          </span>

          <span className="flex items-center gap-2">
            <IoStarSharp />
            {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
