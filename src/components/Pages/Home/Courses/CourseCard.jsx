/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { FaBookOpen, FaUserFriends } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";


const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating } = props.item;

  return (
    <div className="cart glass">
      <div className="rounded-lg">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="p-2 mb-4">
        <h6 className="text-lg font-semibold mb-4">{title}</h6>

        <div className="flex justify-between items-center">
          <p className="flex items-center gap-1">
            <FaBookOpen /> {lesson} Lessons
          </p>

          <p className="flex items-center gap-1">
            <FaUserFriends /> {students}K
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="flex items-center gap-1">
            <IoStarSharp />
            {rating}K
          </p>

          <p className="flex items-center gap-1">
            <a className="px-4 py-2 bg-blue-700 hover:bg-purple-800 text-white rounded-md cursor-pointer"> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
