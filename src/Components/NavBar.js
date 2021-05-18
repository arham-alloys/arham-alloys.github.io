import React, { useEffect, useState } from "react";
import { Collapse, Navbar, Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../img/logo-circle-text.png";
import styled from "styled-components";
import { mdiMenu, mdiClose } from "@mdi/js";
import { useLocation } from "react-router-dom";
import Icon from "@mdi/react";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset > 5);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position > 5);
  };

  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(location);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Navbar
        className={`${scrollPosition ? "shadow" : ""}  px-lg-5 py-0`}
        color="white"
        expand="lg"
        fixed="top"
        light
      >
        <Link to="/" className="py-3" replace>
          <img src={logo} alt="" height="50px" />
        </Link>
        <Button
          color="transparent"
          className="px-0 d-block d-lg-none"
          onClick={toggleNavbar}
        >
          <Icon
            path={collapsed ? mdiMenu : mdiClose}
            color="#3B2B98"
            size={1.5}
          />
        </Button>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto my-3 my-lg-0" navbar>
            {!(location.pathname === "/") && (
              <NavItem className="d-flex align-items-center pr-2 mr-3 py-1">
                <CustomNavLink to="/" className="text-info" replace>
                  Home
                </CustomNavLink>
              </NavItem>
            )}
            <NavItem className="d-flex align-items-center pr-2 mr-3 py-1">
              <CustomNavLink to="/about" className="text-info" replace>
                About
              </CustomNavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center pr-2 mr-3 py-1">
              <CustomNavLink
                to="/sell-your-scrap"
                className="text-info"
                replace
              >
                Sell Your Scrap
              </CustomNavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center pr-2 mr-2 py-1">
              <CustomNavLink to="/infrastructure" className="text-info" replace>
                Infrastructure
              </CustomNavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center pr-2 mr-2 py-1">
              <CustomNavLink to="/careers" className="text-info" replace>
                Careers
              </CustomNavLink>
            </NavItem>
            <NavItem className="mt-2 mt-lg-0 ml-lg-3">
              <Link to="/contact" replace>
                <Button className="px-4 bg-gradient-secondary border-0 rounded">
                  Contact Us
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

const CustomNavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export default NavBar;
