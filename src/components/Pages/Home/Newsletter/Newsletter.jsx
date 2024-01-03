
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <div className="max-w-7xl px-5 mx-auto my-20">
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
   </div>
  );
};

export default Newsletter;
