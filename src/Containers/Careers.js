import React from "react";

import { Container, Row, Col } from "reactstrap";
import careerImg from "../img/career.png";
import styled from "styled-components";
import heroImg2 from "../img/hero-img-3.png";
import pipe_yellow from "../img/scrap/pipe-yellow.png";
import bolt_red from "../img/scrap/bolt-red.png";
import pipe_red from "../img/scrap/pipe-red.png";
import nut1_red from "../img/scrap/nut1-red.png";
import bolt_yellow from "../img/scrap/bolt-yellow.png";

const Careers = () => {
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
          Careers
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
                transform: "rotate(-90deg) translate(-37%, -18%)",
              }}
            >
              Careers
            </h5>
          </Col>
          <Col
            className="d-flex justify-content-center flex-column order-3 order-lg-2"
            sm="12"
            lg="6"
          >
            <h1 className="text-dark font-weight-bold mb-4 mt-3 mt-lg-0">
              Find Your Opportunity With Us
            </h1>
            <form
              action="https://mailthis.to/WorkAASPL"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="form-group">
                <label for="name">
                  Full Name<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Full Name"
                  name="name"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Please enter your full legal name here.
                </small>
              </div>
              <div className="form-group">
                <label for="email">
                  Email Address<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                  required
                  name="_replyto"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll contact you on this email for further notice.
                </small>
              </div>
              <div className="form-group">
                <label for="contact">
                  Contact Number<span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  aria-describedby="contactHelp"
                  placeholder="Contact Number"
                  required
                  name="contact"
                />
                <small id="contactHelp" className="form-text text-muted">
                  We'll contact you on this number for further notice.
                </small>
              </div>
              <div className="form-group">
                <label for="designation">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  aria-describedby="designationHelp"
                  placeholder="Designation"
                  name="designation"
                />
                <small id="designationHelp" className="form-text text-muted">
                  Please enter any official title you may hold.
                </small>
              </div>
              <div className="form-group">
                <label for="linkedin">LinkedIn Profile</label>
                <input
                  type="text"
                  className="form-control"
                  id="linkedin"
                  aria-describedby="linkedinHelp"
                  placeholder="LinkedIn Profile"
                  name="linkedin"
                />
                <small id="linkedinHelp" className="form-text text-muted">
                  Please enter link to your LinkedIn profile.
                </small>
              </div>
              <label>
                Upload CV/Resume<span className="text-danger">*</span>
              </label>
              <input
                type="file"
                className="form-control-file"
                id="resume"
                name="file"
                required
                accept="application/pdf"
              />
              <small id="designationHelp" className="form-text text-muted">
                Please upload your latest resume/cv in pdf format.
              </small>
              <input
                type="hidden"
                name="_subject"
                value="Careers form submitted"
              ></input>
              <input type="hidden" name="_honeypot" value=""></input>
              <input
                type="hidden"
                name="_confirmation"
                value="We'll find best opportunity for you at Arham Alloy & Steel get in touch with you shortly!"
              ></input>
              <button type="submit" className="btn btn-info mt-3">
                Submit
              </button>
            </form>
          </Col>
          <Col
            className="text-center mt-4 mt-lg-0 order-1 order-lg-3"
            sm="12"
            lg="3"
          >
            <img className="img-fluid" src={careerImg} alt="" />
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

export default Careers;
