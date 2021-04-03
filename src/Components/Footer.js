import React from "react";
import logo from "../img/logo-circle-text.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "reactstrap";

const Footer = () => {
  return (
    <Container className="mt-3">
      <hr className="mb-4" />
      <Row className="text-secondary pt-3">
        <Col sm="12" lg="3">
          <Link to="/">
            <img height="40px" src={logo} alt="" />
          </Link>
          <p className="mb-0 mt-3 text-secondary small">
            Arham Alloy & Steel is the brainchild of true steel industry leaders
            who have worked tirelessly to make a revered name in steel scrap
            trading. Running under the banner of Paras Metal Agency for decades
            it was rebranded as Arham Alloy & Steel Pvt Ltd.
          </p>
        </Col>
        <Col sm="12" lg="3">
          <h5 className="text-dark font-weight-bold mb-1 mt-2 mt-lg-0">
            Products
          </h5>
          <ListGroup className="no-list">
            <li>
              <Link to="#" className="text-secondary">
                Stainless Steel Round Bars
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                Stainless Steel Flat Bars
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                Stainless Steel XYZ
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                Stainless Steel More
              </Link>
            </li>
          </ListGroup>
        </Col>
        <Col sm="12" lg="3">
          <h5 className="text-dark font-weight-bold mb-1 mt-2 mt-lg-0">
            Contact
          </h5>
          <ListGroup className="no-list">
            <li>
              <b>Registered Address:</b> 9375/8, First Floor, Sadar Thana Road,
              Multani Dhanda, Paharganj, New Delhi, India-110055
            </li>
            <li>
              <b>Work Address:</b> Plot No.159, Sohna Road, Sector-24,
              Faridabad, Haryana, India-121005
            </li>
            <li>
              <b>Phone:</b> +91 9650 485 980
            </li>
            <li>
              <b>Email:</b> info@arhamalloy.com
            </li>
          </ListGroup>
        </Col>
        <Col sm="12" lg="3">
          <h5 className="text-dark font-weight-bold mb-1 mt-2 mt-lg-0">
            Quick Links
          </h5>
          <ListGroup className="no-list">
            <li>
              <Link to="#" className="text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                Products
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                Quality & Grade
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                Careers
              </Link>
            </li>
            <li>
              <Link to="#" className="text-secondary">
                Contact
              </Link>
            </li>
          </ListGroup>
        </Col>
      </Row>
      <Row className="pb-3 text-secondary mt-4">
        <Col>
          <p className="mb-0 small">
            Copyright © 2021 Arham Alloy Industries | All rights reserved | Made
            with{" "}
            <span role="img" aria-labelledby="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a
              className="text-dark"
              href="https://avisionx.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Avi Garg
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
