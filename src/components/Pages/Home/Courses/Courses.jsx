/* eslint-disable react/jsx-key */

import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../../../assets/images/images/web-design.png";
import courseImg2 from "../../../../assets/images/images/graphics-design.png";
import courseImg3 from "../../../../assets/images/images/ui-ux.png";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Complete UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <div className="max-w-7xl my-20 px-5 mx-auto">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="">
              <h2 className="text-2xl font-bold">Our Popular Courses</h2>
              <p>
                Certainly! When creating short descriptions for college courses,
                its essential to provide a concise overview of the key aspects
                of each course. Heres an example template that you can use or
                modify based on the specific courses at your college:
              </p>
            </div>
          </Col>
          <div className="grid md:grid-cols-3 gap-5">
            {coursesData.map((item) => (
              <CourseCard key={item.id} item={item} />
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
