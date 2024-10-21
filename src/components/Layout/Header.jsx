import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "../Button";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg fixed-top border-bottom">
          <div className="container align-items-center">
            <NavLink className="header-logo" to="">
              <img
                src="/assets/images/vcare trans 2.png"
                alt="header logo"
                className="img-fluid"
              />
            </NavLink>

            <div className="nav-links d-lg-flex d-none">
              <NavLink className="nav-link " to="">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link " to="/services">
                Services
              </NavLink>
              <NavLink className="nav-link " to="/benefits">
                Benefits
              </NavLink>
            </div>
            <div className=" d-lg-flex d-none">
              <Button text={"Contact us"} width={"150px"} backgroundColor={'#008080'} />
            </div>
            <div className="menu-icon d-lg-none d-flex" onClick={handleShow}>
              <iconify-icon icon="tabler:menu-3"></iconify-icon>
            </div>
          </div>
        </nav>
        <Offcanvas show={show} onHide={handleClose} className="d-lg-none">
          <Offcanvas.Header closeButton className="border-bottom">
            <Offcanvas.Title>
              <NavLink className="header-logo" to="">
                <img
                  src="/assets/images/vcare trans 2.png"
                  alt="header logo"
                  className="img-fluid"
                />
              </NavLink>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="nav-links d-lg-none mb-4 d-flex flex-column">
              <NavLink className="nav-link " to="" onClick={handleClose}>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about"  onClick={handleClose}>
                About
              </NavLink>
              <NavLink className="nav-link " to="/services"  onClick={handleClose}>
                Services
              </NavLink>
              <NavLink className="nav-link " to="/benefits"  onClick={handleClose}>
                Benefits
              </NavLink>
            </div>
            <div className="header-button d-lg-none d-block">
              <Button text={"Contact us"} width={"150px"} backgroundColor={'#008080'} />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Header;
