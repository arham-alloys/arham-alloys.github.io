import React from "react";

import { Container, Row, Col } from "reactstrap";
import aboutImg from "../img/about.png";
import styled from "styled-components";
import heroImg2 from "../img/hero-img-3.png";
import pipe_yellow from "../img/scrap/pipe-yellow.png";
import bolt_red from "../img/scrap/bolt-red.png";
import pipe_red from "../img/scrap/pipe-red.png";
import nut1_red from "../img/scrap/nut1-red.png";
import bolt_yellow from "../img/scrap/bolt-yellow.png";

const About = () => {
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
          About Us
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
                transform: "rotate(-90deg) translate(-39%, -50%)",
              }}
            >
              About Us
            </h5>
          </Col>
          <Col
            className="d-flex justify-content-center flex-column order-3 order-lg-2"
            sm="12"
            lg="5"
          >
            <h1 className="text-dark font-weight-bold mb-4 mt-3 mt-lg-0">
              We Are On A Mission To Deliver Quality Products
            </h1>
            <p className="text-dark">
              Arham Alloy & Steel Pvt Ltd. is the brainchild of true steel
              industry disruptors who have worked tirelessly to make a revered
              name in the steel scrap trading. Running under the banner of Paras
              Metal Agency for decades it was rebranded as Arham Alloy & Steel
              Pvt Ltd. Founded in 2007, under the guidance of Mr. Abhay Jain,
              Atul Jain & Amit Jain, Arham Alloy & Steel Pvt Ltd. has made a
              name for itself in the list of top suppliers of non-ferrous scrap
              in India. We boast a wide portfolio of Non-Ferrous scrap like
              stainless steel, Aluminum, Copper, Tin, Brass, Zinc, etc and we
              are proud to be one of India’s most trusted importers of scraps
              such as Zurik, Zorba, Stainless Steel, Aluminum, etc.
            </p>
            <p className="text-dark">
              With decades of rich experience in the steel trading industry, The
              A-Team laid the foundation stone of Paras Steel Industries in
              2010. Their diverse experience in steel trading and manufacturing
              did the magic and in no time, we created our name among the top
              steel manufacturers in India. In the year 2017 have done a forward
              integration and have set up a state-of-the-art unit making all the
              processes from melting to bright finish in house and the recent
              commissioning of Annealing furnaces and numerous Centerless
              grinding tables.
            </p>
            <p className="text-dark">
              The quality standards of our products form the backbone of our
              reputation. In a highly competitive industry, we are a trusted
              name for our clients primarily owing to the trust we have garnered
              by delivering consistently high-quality results.
            </p>
            <p className="text-dark">
              All this success can be rightly attributed to our “Maximum
              Technological Leveraging Possible” moto which has enabled us to
              post growing figures year-on-year. With the Vision of adding value
              to our client base by providing them great quality at competitive
              prices, our foundation is laid upon strong values of transparency,
              partnership, ethics, and fair play. Our enduring relationships
              with our customers, associates, suppliers, and employees are a
              testimony to our growth since inception.
            </p>
          </Col>
          <Col
            className="text-center mt-4 mt-lg-0 d-flex justify-content-end order-1 order-lg-3"
            sm="12"
            lg="4"
          >
            <AboutImg src={aboutImg} alt="" />
          </Col>
        </Row>
      </Container>
    </LandingSection1>
  );
};

const AboutImg = styled.img`
  @media (max-width: 991.98px) {
    width: 100%;
  }
`;

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

export default About;
