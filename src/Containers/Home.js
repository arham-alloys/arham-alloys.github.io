import React from "react";
import {
  mdiArrowRight,
  mdiCardAccountPhoneOutline,
  mdiCards,
  mdiMapMarkerRadiusOutline,
  mdiRecycle,
  mdiTruck,
} from "@mdi/js";
import { Button, Container, Col, Row } from "reactstrap";
import styled from "styled-components";
import heroImg from "../img/hero-img-2.png";
import heroImg2 from "../img/hero-img-3.png";
import home_bars from "../img/home-bars.png";
import pipe_yellow from "../img/scrap/pipe-yellow.png";
import pipe_red from "../img/scrap/pipe-red.png";
import nut1_red from "../img/scrap/nut1-red.png";
import nut2_yellow from "../img/scrap/nut2-yellow.png";
import nut2_red from "../img/scrap/nut2-red.png";
import bolt_yellow from "../img/scrap/bolt-yellow.png";
import bolt_red from "../img/scrap/bolt-red.png";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import DataCard from "../Components/DataCard";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Icon from "@mdi/react";
import ProgressBar from "react-animated-progress-bar";

const Home = () => {
  const Section1CardsData = [
    { head: "Get Scrap!", icon: mdiTruck, text: "We Search and Collect Scrap" },
    {
      head: "Segregate Scrap!",
      icon: mdiCards,
      text: "We Segregate Scrap Inhouse",
    },
    {
      head: "Recycle Scrap!",
      icon: mdiRecycle,
      text: "We Recycle and Ship the Scrap",
    },
  ];

  const ChooseData = [
    {
      head: "Years of Experience",
      count: 25,
      text:
        "We have more than 25 successful years of experience in the industry.",
    },
    {
      head: "Tons of Production",
      count: 20,
      counthelp: "k",
      text: "We have an annual production rate of over 20k tons.",
    },
    {
      head: "Tons of Melt Size",
      count: 3.9,
      text: "We have over 3.9 tons of melt size.",
      decimals: 1,
    },
  ];

  const StatData = [
    {
      head: "Stat 1",
      count: 80,
    },
    {
      head: "Stat 2",
      count: 90,
    },
    {
      head: "Stat 3",
      count: 75,
    },
  ];

  return (
    <>
      <FloatingScrap1
        src={pipe_yellow}
        height="70px"
        className="d-none d-lg-block"
        style={{ top: "14%", left: "3%" }}
        alt=""
      />
      <FloatingScrap2
        className="d-none d-lg-block"
        src={bolt_red}
        height="20px"
        style={{ top: "35%", left: "7%" }}
        alt=""
      />
      <FloatingScrap2
        src={nut1_red}
        height="30px"
        style={{ top: "90%", left: "53%" }}
        alt=""
      />
      <FloatingScrap3
        src={bolt_yellow}
        height="20px"
        style={{ top: "80%", left: "60%" }}
        alt=""
      />
      <FloatingScrap3
        src={pipe_red}
        height="40px"
        className="d-none d-md-block"
        style={{ top: "87%", left: "20%" }}
        alt=""
      />
      <LandingHome>
        <Container fluid className="h-100 d-flex align-items-center">
          <Row className="w-100 mx-auto bg-md-translucent rounded py-4">
            <Col sm="12" lg={{ offset: 1, size: 5 }}>
              <h5 className="text-uppercase text-success font-weight-bold mb-1">
                Welcome
              </h5>
              <div className="d-none d-lg-block">
                <h1 className="text-dark display-3 font-weight-bold mb-0">
                  We Deal with
                </h1>
                <h1
                  className="text-dark display-3 font-weight-bold mb-0"
                  style={{ marginTop: "-1.5rem" }}
                >
                  <TextLoop
                    interval={2000}
                    children={[
                      "Non-Ferrous",
                      "Aluminium",
                      "Stainless Steel",
                      "Copper",
                    ]}
                  />
                </h1>
                <h1
                  className="text-dark display-3 font-weight-bold mb-0"
                  style={{ marginTop: "-1.5rem" }}
                >
                  Scrap
                </h1>
              </div>
              <div className="d-block d-lg-none">
                <h1 className="text-dark font-weight-bold mb-0">
                  We Deal with Non-Ferrous Scrap
                </h1>
              </div>
              <p className="mt-3 pr-0 mb-5 pr-lg-5 text-info">
                We segregate the material at our state-of-the-art processing
                house situated at our newly built unit situated at Faridabad.
              </p>
              <Row className="pl-3">
                <Link to="/contact">
                  <Button
                    className="col col-lg-auto px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light"
                    size="lg"
                    style={{ fontSize: "15px" }}
                  >
                    Our Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    className="col col-lg-auto px-lg-5 py-3 small ml-3 bg-gradient-secondary border-0 rounded text-uppercase font-weight-light"
                    size="lg"
                    style={{ fontSize: "15px" }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </LandingHome>
      <LandingSection1>
        <FloatingScrap1
          src={pipe_yellow}
          height="40px"
          style={{ top: "120%", left: "10%" }}
          alt=""
        />
        <FloatingScrap2
          src={bolt_red}
          height="20px"
          style={{ top: "115%", right: "9%" }}
          alt=""
        />
        <FloatingScrap3
          src={nut2_yellow}
          height="30px"
          className="d-none d-md-block"
          style={{ top: "190%", left: "40%" }}
          alt=""
        />
        <Container fluid>
          <h5 className="text-uppercase text-success text-center font-weight-bold mb-1">
            What we do
          </h5>
          <h1 className="text-dark text-center font-weight-bold mb-1">
            Segregate Material At <br className="d-none d-lg-block" />{" "}
            State-of-The-Art Processing House
          </h1>
          <Row className="d-flex align-items-center justify-content-center pt-3 px-3 data-card-container">
            {Section1CardsData.map((data, index) => (
              <DataCard data={data} key={data.head} index={index} />
            ))}
          </Row>
        </Container>
      </LandingSection1>
      <Container>
        <FloatingScrap2
          src={nut1_red}
          height="30px"
          style={{ top: "250%", right: "10%" }}
          alt=""
        />
        <FloatingScrap3
          src={bolt_yellow}
          className="d-none d-lg-block"
          height="20px"
          style={{ top: "220%", right: "7%" }}
          alt=""
        />
        <FloatingScrap3
          src={pipe_red}
          height="40px"
          className="d-none d-md-block"
          style={{ top: "220%", left: "7%" }}
          alt=""
        />
        <FloatingScrap1
          src={pipe_yellow}
          height="40px"
          style={{ top: "250%", left: "40%" }}
          alt=""
        />
        <Row style={{ padding: "50px 0 60px 0" }}>
          <Col lg="6" className="d-flex flex-column">
            <h5 className="text-uppercase text-success font-weight-bold mb-1">
              Why Choose Us
            </h5>
            <h3 className="text-dark font-weight-bold mb-3">
              Facilities for Manufacturing, Testing & Quality Control
            </h3>
            <p className="text-dark">
              We at <b>Paras Steel Industries</b> are committed to set
              benchmarks in the field of innovation and technology with
              delivering quality products to our clients. The focus of client
              requirements has been our success mantra. With decades of rich
              experience in the steel trading industry, The A-Team of Paras
              Steel Industries laid the foundation stone of Paras Steel
              Industries in 2010.
            </p>
            <Link to="/contact" className="mt-auto mb-3">
              <Button
                className="col col-lg-auto px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light"
                size="lg"
                style={{ fontSize: "15px" }}
              >
                More About Us
              </Button>
            </Link>
          </Col>
          <Col lg="6">
            {ChooseData.map((data) => (
              <Row className="my-3" data={data} key={data.head}>
                <div className="col-4 col-lg-3">
                  <div className="d-flex justify-content-lg-end">
                    <h1 className="font-weight-bold display-4 text-dark mb-0">
                      <CountUp
                        start={0}
                        end={data.count}
                        decimals={data.decimals}
                        suffix={data.counthelp}
                        redraw={true}
                      >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>{" "}
                    <span className="text-success">+</span>
                  </div>
                  <p
                    className="mb-0 text-uppercase text-secondary small text-left text-lg-right"
                    style={{ letterSpacing: "1px" }}
                  >
                    {data.head}
                  </p>
                </div>
                <div className="d-flex align-items-center border-left py-3 ml-0 ml-lg-3 col-8">
                  <p className="mb-0 pl-3 text-dark">{data.text}</p>
                </div>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
      <Container>
        <FloatingScrap3
          src={nut2_red}
          height="30px"
          className="d-none d-md-block"
          style={{ top: "270%", left: "7%" }}
          alt=""
        />
        <FloatingScrap2
          src={bolt_yellow}
          height="20px"
          className="d-none d-lg-block"
          style={{ top: "290%", right: "5%" }}
          alt=""
        />
        <FloatingScrap3
          src={bolt_red}
          height="20px"
          style={{ top: "320%", right: "25%" }}
          alt=""
        />
        <FloatingScrap3
          src={pipe_red}
          height="40px"
          className="d-none d-md-block"
          style={{ top: "320%", left: "10%" }}
          alt=""
        />
        <QualityRow style={{ padding: "50px 0" }}>
          <Col
            lg="6"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="text-white px-5">
              <h2 className="font-weight-bold mb-3">
                Grade, Quality & Infrastructure
              </h2>
              <p className="mb-4">
                We are consistent in meeting and exceeding the most exacting
                standards of manufacturing through our strict Quality Control
                processes.
              </p>
              <Link
                to="/infrastructure"
                className="mt-auto mb-3 text-white text-uppercase small d-flex"
                style={{ letterSpacing: "1px" }}
              >
                Our Infrastructure{" "}
                <Icon path={mdiArrowRight} className="ml-2" size={0.8} />
              </Link>
            </div>
          </Col>
          <Col lg="6" className="d-flex flex-column mt-5 mt-lg-0">
            <h5 className="text-uppercase text-success font-weight-bold mb-1 mt-3 mt-lg-0">
              Quality & Grade
            </h5>
            <h3 className="text-dark font-weight-bold mb-3">
              Excellence in Recycling
            </h3>
            <p className="text-dark">
              <b>Arham Alloy</b> is a professionally managed company with an
              extremely skilled and experienced team for who the word "quality"
              does not merely signify reliable, world-class products.
            </p>
            {StatData.map((data) => (
              <div key={data.head}>
                <p className="text-secondary" style={{ marginBottom: "-15px" }}>
                  {data.head}
                </p>
                <ProgressBar
                  width="100%"
                  height="10px"
                  rect
                  fontColor="#8e979f"
                  percentage={data.count}
                  rectBorderRadius="30px"
                  trackPathColor="#8e979f"
                  defColor={{
                    fair: "#52DB28",
                    good: "#52DB28",
                    excellent: "#52DB28",
                    poor: "#52DB28",
                  }}
                />
              </div>
            ))}
            <Link to="/contact" className="mt-4 mb-3">
              <Button
                className="col col-lg-auto px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light"
                size="lg"
                style={{ fontSize: "15px" }}
              >
                Know More
              </Button>
            </Link>
          </Col>
        </QualityRow>
      </Container>
      <Container>
        <Row>
          <div className="my-4 d-flex align-items-center col-6 col-lg-auto">
            <Icon
              path={mdiCardAccountPhoneOutline}
              size={1.5}
              className="text-info"
            />
            <p className="mb-0 ml-3">
              +91 8745009643 <br /> email@gmail.com
            </p>
          </div>
          <div className="my-2 my-lg-4 d-flex align-items-center col-6 col-lg-auto">
            <Icon
              path={mdiMapMarkerRadiusOutline}
              size={1.5}
              className="text-info"
            />
            <p className="mb-0 ml-3">
              Some cool address here, <br /> New Delhi - 110085
            </p>
          </div>
          <Col sm="12" lg="" className="my-4">
            <div className="input-group d-flex align-items-center input-group-lg">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
              />
              <Link to="/contact">
                <Button
                  className="px-lg-5 py-3 small bg-gradient-secondary border-0 text-uppercase font-weight-light"
                  size="lg"
                  style={{ fontSize: "15px" }}
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const LandingHome = styled.div`
  height: 100vh;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  @media (max-width: 991.98px) {
    background-position: right;
  }
`;

const QualityRow = styled(Row)`
  background-image: url(${home_bars});
  background-repeat: no-repeat;
  background-position: center left;
  background-size: 48%;
  @media (max-width: 991.98px) {
    background-size: contain;
    background-position: top center;
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
  z-index: 0;
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
  z-index: 0;
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
  z-index: 0;
  animation: rotate3 15s infinite;
  animation-timing-function: ease-in-out;
`;

export default Home;
