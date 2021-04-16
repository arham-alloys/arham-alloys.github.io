import React from "react";
import {
  mdiArrowRight,
  mdiCardAccountPhoneOutline,
  mdiCards,
  mdiMapMarkerRadiusOutline,
  mdiTruck,
  mdiTruckCheck,
} from "@mdi/js";
import { Button, Container, Col, Row } from "reactstrap";
import styled from "styled-components";
import partner1 from "../img/partners/jsl.png";
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
    {
      head: "Hunt for Scrap!",
      icon: mdiTruck,
      text: "Scrap Arrives at the Facility",
    },
    {
      head: "Get. Set. Segregate!",
      icon: mdiCards,
      text: "Who Wants to Sort Out Scrap",
    },
    {
      head: "Sell Scrap!",
      icon: mdiTruckCheck,
      text: "Another Product Restarts its Lifecycle",
    },
  ];

  const ChooseData = [
    {
      head: "Years of Experience",
      count: 25,
      text:
        "With over 25 years of experience in the industry, we have a well established clientele who are also market leaders in recycling industry.",
    },
    {
      head: "Tons of Scrap Sorted",
      count: 15,
      counthelp: "k",
      text:
        "With tonnes of scrap to sort we need hundreds of hands on the table to sort it out and thousands of square feet in area to function",
    },
    {
      head: "Sq. Feet of Processing Area",
      count: 70,
      counthelp: "k",
      text: "We have over 70k Square Feet of Processing Area.",
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
                    interval={2500}
                    children={[
                      "Non-Ferrous",
                      "Aluminium",
                      "Stainless Steel",
                      "Copper",
                      "Tungsten",
                      "Nickel Alloys",
                      "Titanium",
                      "Nickel",
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
                  We Deal with
                </h1>
                <h1
                  className="text-dark font-weight-bold mb-0"
                  style={{ marginTop: "-0.5rem" }}
                >
                  <TextLoop
                    interval={2500}
                    children={[
                      "Non-Ferrous",
                      "Aluminium",
                      "Stainless Steel",
                      "Copper",
                      "Tungsten",
                      "Nickel Alloys",
                      "Titanium",
                      "Nickel",
                    ]}
                  />
                </h1>
                <h1
                  className="text-dark font-weight-bold mb-0"
                  style={{ marginTop: "-0.5rem" }}
                >
                  Scrap
                </h1>
              </div>
              <p className="mt-3 pr-0 mb-5 pr-lg-5 text-info">
                We segregate the material at our state-of-the-art processing
                house situated at our newly built facility at Faridabad.
              </p>
              <Row className="pl-3">
                <Link to="/contact">
                  <Button
                    className="col col-lg-auto px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light"
                    size="lg"
                    style={{ fontSize: "15px" }}
                  >
                    Sell Your Scrap
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
              SELL YOUR SCRAP
            </h5>
            <h3 className="text-dark font-weight-bold mb-3">
              This Couldn't be Farther From the Truth
            </h3>
            <p className="text-dark">
              The term <b>Scrap</b> is sometimes confused with waste, which
              couldn’t be farther from the truth. Unlike waste, scrap refers to
              the material, namely metal, that may have become old, rusty and
              perhaps even broken, but it can be recycled and re-purposed. This
              largely covers vehicle parts, building material, surplus parts
              leftover after manufacturing and consumption, etc.
            </p>
            <p className="text-dark">
              Needless to say, it fetches very high value and we'll make sure to
              get you that value.
            </p>
            <Link to="/contact" className="mt-auto mb-3">
              <Button
                className="col col-lg-auto px-lg-5 py-3 small bg-gradient-primary border-0 rounded text-uppercase font-weight-light"
                size="lg"
                style={{ fontSize: "15px" }}
              >
                Sell Your Scrap
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
                    <span className="text-success h3">+</span>
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
        <Row style={{ padding: "70px 0" }}>
          <Col
            lg="6"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="text-white px-5">
              <h2 className="font-weight-bold mb-3">Quality </h2>
              <img
                src={home_bars}
                style={{
                  position: "absolute",
                  left: 0,
                  top: -100,
                  width: "95%",
                  zIndex: -1,
                }}
                alt=""
              />
              <p className="mb-4 bg-md-dark">
                The word quality not only means fulfillment of commitment to us
                towards our clients, but also a parameter of excellence along
                with a medium of goodwill. Better quality always translates into
                better associations.
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
              Quality
            </h5>
            <h3 className="text-dark font-weight-bold mb-3">
              Excellence in Recycling
            </h3>
            <p className="text-dark">
              <b>Arham Alloy & Steel</b> is a professionally managed company
              with an extremely skilled and experienced team for who the word
              "quality" does not merely signify reliable, world-class products.
            </p>
            {/* {StatData.map((data) => (
              <div key={data.head}>
                <p className="text-secondary" style={{ marginBottom: "-15px" }}>
                  {data.head}
                </p>
                <ProgressBar
                  width="100%"
                  height="10px"
                  rect
                  fontColor="#8e979f"
                  percentage={`${data.count}`}
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
            ))} */}
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
        </Row>
      </Container>
      <Container>
        <h5 className="text-uppercase text-success text-center font-weight-bold mb-1 mt-0 mt-lg-5">
          Our Partners
        </h5>
        <h3 className="text-dark text-center font-weight-bold mb-1">
          Some of Our Clients
        </h3>
        <Row className="my-4 justify-content-center" style={{ opacity: "0.3" }}>
          <Col
            xs="6"
            lg="4"
            className="d-flex align-items-center justify-content-center "
          >
            <img src={partner1} alt="" className="img-fluid w-100 w-lg-50" />
          </Col>
        </Row>
      </Container>
      <Container>
        <FloatingScrap1
          src={pipe_yellow}
          className="d-none d-lg-block"
          height="40px"
          style={{ top: "350%", right: "4%" }}
          alt=""
        />
        <Row>
          <div className="my-4 d-flex align-items-center col-6 col-lg-auto">
            <Icon
              path={mdiCardAccountPhoneOutline}
              size={1.5}
              className="text-info"
            />
            <p className="mb-0 ml-3">info@arhamalloy.com</p>
          </div>
          <div className="my-2 my-lg-4 d-flex align-items-center col-6 col-lg-auto">
            <Icon
              path={mdiMapMarkerRadiusOutline}
              size={1.5}
              className="text-info"
            />
            <p className="mb-0 ml-3">
              159, Sohna Road, Sector-24, <br /> Faridabad, Haryana,
              India-121005
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
