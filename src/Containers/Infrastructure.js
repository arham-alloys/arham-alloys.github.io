import React from "react";

import { Container, Row, Col } from "reactstrap";
import infra1 from "../img/infra/infra_1.jpg";
import infra2 from "../img/infra/infra_2.jpg";
import infra3 from "../img/infra/infra_3.jpg";
import infra4 from "../img/infra/infra_4.jpg";
import styled from "styled-components";
import heroImg2 from "../img/hero-img-3.png";
import pipe_yellow from "../img/scrap/pipe-yellow.png";
import bolt_red from "../img/scrap/bolt-red.png";
import pipe_red from "../img/scrap/pipe-red.png";
import nut1_red from "../img/scrap/nut1-red.png";
import bolt_yellow from "../img/scrap/bolt-yellow.png";

const Infrastructure = () => {
  return (
    <LandingSection1>
      <FloatingScrap1
        src={pipe_yellow}
        height="70px"
        className="d-none d-lg-block"
        style={{ top: "17%", left: "5%" }}
        alt=""
      />
      <FloatingScrap2
        className="d-none d-lg-block"
        src={bolt_red}
        height="20px"
        style={{ top: "40%", left: "15%" }}
        alt=""
      />
      <FloatingScrap2
        src={nut1_red}
        height="30px"
        style={{ top: "90%", right: "7%" }}
        alt=""
      />
      <FloatingScrap3
        src={bolt_yellow}
        height="20px"
        style={{ top: "20%", right: "5%" }}
        alt=""
      />
      <FloatingScrap3
        src={pipe_red}
        height="40px"
        className="d-none d-md-block"
        style={{ top: "100%", left: "8%" }}
        alt=""
      />
      <Container fluid>
        <h1
          className="text-gradient-primary text-center d-block d-lg-none font-weight-bold mb-0 mt-5 pt-3"
          style={{
            opacity: 1,
          }}
        >
          Infrastructure
        </h1>
        <Row>
          <Col
            className="d-none d-lg-block"
            sm="12"
            lg={{ offset: 1, size: 1 }}
            style={{ position: "relative" }}
          >
            <h5
              className="text-gradient-primary text-nowrap font-weight-bold mb-3 display-1"
              style={{
                opacity: 0.5,
                position: "absolute",
                top: "0",
                left: "-100%",
                transform: "rotate(-90deg) translate(-42%, -135%)",
              }}
            >
              Infrastructure
            </h5>
          </Col>
          <Col
            className="d-flex flex-column order-3 order-lg-2 pr-3 pr-lg-5"
            sm="12"
            lg="9"
          >
            <h1 className="text-dark font-weight-bold mb-0 mt-3 mt-lg-0">
              We Are A State-of-The-Art Processing House
            </h1>
            <p className="text-dark mb-4">
              Page is under construction! Here are some photos of our facility.
            </p>
            <Row>
              <Col sm="12" lg="6">
                <img className="img-fluid w-100" alt="" src={infra1} />
              </Col>
              <Col sm="12" lg="6" className="mt-4 pt-3 mt-lg-0 pt-lg-0">
                <img className="img-fluid w-100" alt="" src={infra2} />
              </Col>
              <Col sm="12" lg="6" className="mt-4 pt-3">
                <img className="img-fluid w-100" alt="" src={infra3} />
              </Col>
              <Col sm="12" lg="6" className="mt-4 pt-3">
                <img className="img-fluid w-100" alt="" src={infra4} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </LandingSection1>
  );
};

const LandingSection1 = styled.div`
  background-image: url(${heroImg2});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 140px 0 120px 0;
  @media (max-width: 991.98px) {
    padding: 0px 0 20px 0;
    background-size: unset;
    background-position: left;
  }
`;

const FloatingScrap1 = styled.img`
  @keyframes rotate1 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(25px, 25px) rotate(90deg);
    }
    50% {
      transform: translate(0px, 50px) rotate(180deg);
    }
    75% {
      transform: translate(-25px, 25px) rotate(270deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }

  position: absolute;
  z-index: 1;
  animation: rotate1 15s infinite;
  animation-timing-function: ease-in-out;
`;

const FloatingScrap2 = styled.img`
  @keyframes rotate2 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(35px, 35px) rotate(-90deg);
    }
    50% {
      transform: translate(0px, 70px) rotate(-180deg);
    }
    75% {
      transform: translate(-35px, 35px) rotate(-270deg);
    }
    100% {
      transform: translate(0, 0) rotate(-360deg);
    }
  }

  position: absolute;
  z-index: 1;
  animation: rotate2 15s infinite;
  animation-timing-function: ease-in-out;
`;

const FloatingScrap3 = styled.img`
  @keyframes rotate3 {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(-30px, 30px) rotate(90deg);
    }
    50% {
      transform: translate(0px, 60px) rotate(180deg);
    }
    75% {
      transform: translate(30px, 30px) rotate(270deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }

  position: absolute;
  z-index: 1;
  animation: rotate3 15s infinite;
  animation-timing-function: ease-in-out;
`;

export default Infrastructure;
