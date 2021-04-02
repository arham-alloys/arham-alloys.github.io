import React from "react";

import { text } from "../text";
import { Button, Container, Col, Row } from "reactstrap";
import styled from "styled-components";
import heroImg from "../img/hero-img-2.png";
import aboutImg from "../img/about.png";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";

const Home = () => {
  return (
    <>
      <LandingHome>
        <Container fluid className="h-100 d-flex align-items-center">
          <Row className="w-100">
            <Col sm="12" lg={{ offset: 1, size: 5 }}>
              <h5 className="text-uppercase text-success font-weight-bold mb-1">
                Welcome
              </h5>
              <h1 className="text-dark display-3 font-weight-bold mb-0">
                We Deal with
              </h1>
              <h1
                className="text-dark display-3 font-weight-bold mb-0"
                style={{ marginTop: "-1.5rem" }}
              >
                <TextLoop
                  interval={2000}
                  children={["Non-Ferrous", "Aluminium", "Iron", "Copper"]}
                />
              </h1>
              <h1
                className="text-dark display-3 font-weight-bold mb-0"
                style={{ marginTop: "-1.5rem" }}
              >
                Scrap
              </h1>
              <p className="mt-3 pr-0 mb-5 pr-lg-5 text-info">
                We segregate the material at our state-of-the-art processing
                house situated at our newly built unit situated at Faridabad.
              </p>
              <div>
                <Link to="/contact">
                  <Button
                    className="px-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light"
                    size="lg"
                    style={{ fontSize: "15px" }}
                  >
                    Our Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    className="px-5 py-3 small ml-3 bg-gradient-secondary border-0 rounded text-uppercase font-weight-light"
                    size="lg"
                    style={{ fontSize: "15px" }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </LandingHome>
      <div style={{ background: "#f8fcff", padding: "100px 0" }}>
        <Container fluid>
          <Row>
            <Col
              className="d-flex justify-content-center flex-column"
              sm="12"
              lg={{ offset: 1, size: 5 }}
            >
              <h5 className="text-success font-weight-bold mb-3">
                {text.about.title}
              </h5>
              <h1 className="text-primary font-weight-bold mb-4">
                {text.about.head}
              </h1>
              <p className="text-secondary">{text.about.text1}</p>
              <p className="text-secondary">{text.about.text2}</p>
              <Link to="/about">
                <Button className="rounded-0 px-4" color="success" size="lg">
                  About Us
                </Button>
              </Link>
            </Col>
            <Col className="text-center mt-4 mt-lg-0" sm="12" lg="5">
              <AboutImg src={aboutImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ padding: "100px 0" }}>
        <Container fluid>
          <Row>
            <Col
              className="text-center"
              sm="12"
              md={{ offset: 2, size: 8 }}
              lg={{ offset: 3, size: 6 }}
            >
              <h5 className="text-success font-weight-bold mb-3">
                {text.event.title}
              </h5>
              <h1 className="text-primary font-weight-bold mb-4">
                {text.event.head}
              </h1>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <Link to="/events">
              <Button className="rounded-0 px-4" color="success" size="sm">
                View More +
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

const LandingHome = styled.div`
  height: 100vh;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const AboutImg = styled.img`
  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

export default Home;
