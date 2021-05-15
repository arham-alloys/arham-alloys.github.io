import React from "react";

import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import heroImg2 from "../img/hero-img-3.png";
import pipe_yellow from "../img/scrap/pipe-yellow.png";
import bolt_red from "../img/scrap/bolt-red.png";
import pipe_red from "../img/scrap/pipe-red.png";
import nut1_red from "../img/scrap/nut1-red.png";
import bolt_yellow from "../img/scrap/bolt-yellow.png";
import Icon from "@mdi/react";
import { mdiCardAccountPhoneOutline, mdiMapMarkerRadiusOutline } from "@mdi/js";
import { Button } from "reactstrap";

const Contact = () => {
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
          Contact Us
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
                transform: "rotate(-90deg) translate(-40%, -82%)",
              }}
            >
              Contact Us
            </h5>
          </Col>
          <Col
            className="d-flex justify-content-center flex-column order-3 order-lg-2 pr-0 pr-lg-5"
            sm="12"
            lg="9"
          >
            <h1 className="text-dark font-weight-bold mb-4 mt-3 mt-lg-0">
              Get in Touch With Us Or Visit Our Facility
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14045.42356975292!2d77.3020823!3d28.348088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7242671613101be7!2sArham%20Alloy%20and%20Steel!5e0!3m2!1sen!2sin!4v1620976895102!5m2!1sen!2sin"
              width="100%"
              height="500px"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              allowFullScreen=""
              loading="lazy"
              title="Arham Alloy and Steel"
            ></iframe>
          </Col>
        </Row>
        <Container className="mt-4">
          <Row>
            <div className="my-4 d-flex align-items-center col-6 col-lg-auto">
              <Icon
                path={mdiCardAccountPhoneOutline}
                size={1.5}
                className="text-info"
              />
              <p className="mb-0 ml-3 text-dark">
                <a className="text-dark" href="mailto:info@arhamalloy.com">
                  contact@arhamalloy.com
                </a>
              </p>
            </div>
            <div className="my-2 my-lg-4 d-flex align-items-center col-6 col-lg-auto">
              <Icon
                path={mdiMapMarkerRadiusOutline}
                size={1.5}
                className="text-info"
              />
              <p className="mb-0 ml-3">
                <a
                  className="text-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/maps/QpCxvBwsErqtS21P9"
                >
                  159, Sohna Road, Sector-24, <br /> Faridabad, Haryana,
                  India-121005
                </a>
              </p>
            </div>
            <Col sm="12" lg="" className="my-4">
              <form
                action="https://mailthis.to/ContacAASPL"
                method="POST"
                className="input-group d-flex align-items-center input-group-lg"
              >
                <input
                  type="email"
                  name="_replyto"
                  className="form-control"
                  placeholder="Your Email Address"
                  required
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="Contact form submitted"
                ></input>
                <input type="hidden" name="_honeypot" value=""></input>
                <input
                  type="hidden"
                  name="_confirmation"
                  value="Thanks for contacting Arham Alloy & Steel we'll get in touch with you shortly!"
                ></input>
                <Button
                  className="px-lg-5 py-3 small bg-gradient-secondary border-0 text-uppercase font-weight-light"
                  size="lg"
                  style={{ fontSize: "15px" }}
                  value="send"
                >
                  Get In Touch
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </LandingSection1>
  );
};

const LandingSection1 = styled.div`
  background-image: url(${heroImg2});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 140px 0 0 0;
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

export default Contact;
