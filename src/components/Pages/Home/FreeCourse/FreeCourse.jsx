import { Container, Row } from "reactstrap";
import courseImg01 from "../../../../assets/images/images/web-development.png";
import courseImg02 from "../../../../assets/images/images/kids-learning.png";
import courseImg03 from "../../../../assets/images/images/seo.png";
import courseImg04 from "../../../../assets/images/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto my-20">
      <Container>
        <div className="">
          <h1 className="text-center font-bold md:text-4xl text-3xl mt-14 ">
            Our Free Courses
          </h1>
          <div className="flex justify-center mt-4 mb-10">
            <hr className="w-[25%] mb-5 broder-[4px]" />
          </div>
        </div>
        <Row>
          <div className="grid md:grid-cols-4 gap-5">
            {freeCourseData.map((item) => (
              <FreeCourseCard key={item.id} item={item} />
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FreeCourse;
