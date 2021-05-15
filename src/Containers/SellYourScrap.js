import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import sellyourscrapImg from "../img/sellyourscrap.png";
import styled from "styled-components";
import heroImg2 from "../img/hero-img-3.png";
import pipe_yellow from "../img/scrap/pipe-yellow.png";
import bolt_red from "../img/scrap/bolt-red.png";
import pipe_red from "../img/scrap/pipe-red.png";
import nut1_red from "../img/scrap/nut1-red.png";
import bolt_yellow from "../img/scrap/bolt-yellow.png";

const SellYourScrap = () => {
  const [showTypeOthers, setShowTypeOthers] = useState(false);

  const changeType = (event) => {
    setShowTypeOthers(event.target.value === "Others");
  };

  const scrapTypeOptions = [
    "Stainless Steel",
    "Zinc",
    "Aluminium",
    "Brass",
    "Copper",
    "Titanium",
    "Others",
  ];
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
          Sell Your Scrap
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
                transform: "rotate(-90deg) translate(-42%, -153%)",
              }}
            >
              Sell Your Scrap
            </h5>
          </Col>
          <Col
            className="d-flex justify-content-center flex-column order-3 order-lg-2"
            sm="12"
            lg="6"
          >
            <h1 className="text-dark font-weight-bold mb-4 mt-3 mt-lg-0">
              Have Something For Us? Sell it Here!
            </h1>
            <form
              action="https://mailthis.to/ContacAASPL"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="form-group">
                <label htmlFor="name">
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
                <label htmlFor="email">
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
                  We'll contact you on this email for enquiry.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="contact">
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
                  We'll contact you on this number for enquiry.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="location">
                  Scrap Location<span className="text-danger">*</span>
                </label>
                <textarea
                  rows="3"
                  className="form-control"
                  id="location"
                  aria-describedby="locationHelp"
                  placeholder="Scrap Location"
                  name="location"
                  required
                />
                <small id="locationHelp" className="form-text text-muted">
                  Please enter location address from where scrap needs to be
                  picked.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="quantity">
                  Quantity<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  aria-describedby="quantityHelp"
                  placeholder="Quantity"
                  name="quantity"
                  required
                />
                <small id="quantityHelp" className="form-text text-muted">
                  Please enter quantity of scrap. Example: 1 Ton, 100 Kg etc...
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="type">
                  Scrap Type<span className="text-danger">*</span>
                </label>
                <select
                  className="form-control"
                  id="type"
                  required
                  aria-describedby="typeHelp"
                  name="scrapType"
                  defaultValue=""
                  onChange={changeType}
                >
                  <option value="" disabled hidden>
                    Select Type
                  </option>
                  {scrapTypeOptions.map((val, i) => (
                    <option value={val} key={i}>
                      {val}
                    </option>
                  ))}
                </select>
                {showTypeOthers && (
                  <div>
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="scrapTypeOthers"
                      aria-describedby="typeOthersHelp"
                      placeholder="Describe Other Type"
                      name="scrapTypeOthers"
                      required
                    />
                    <small id="typeOthersHelp" className="form-text text-muted">
                      Please enter description of of scrap type.
                    </small>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  rows="4"
                  className="form-control"
                  id="description"
                  aria-describedby="descriptionHelp"
                  placeholder="Description"
                  name="description"
                />
                <small id="descriptionHelp" className="form-text text-muted">
                  Please enter any further details or description if needed.
                </small>
              </div>

              <input
                type="hidden"
                name="_subject"
                value="Sell your scrap form submitted"
              ></input>
              <input type="hidden" name="_honeypot" value=""></input>
              <input
                type="hidden"
                name="_confirmation"
                value="We have got your response at Arham Alloy & Steel get in touch with you shortly!"
              ></input>
              <button type="submit" className="btn btn-info">
                Submit
              </button>
            </form>
          </Col>
          <Col
            className="text-center mt-4 mt-lg-0 order-1 order-lg-3"
            sm="12"
            lg="3"
          >
            <img className="img-fluid" src={sellyourscrapImg} alt="" />
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

export default SellYourScrap;
