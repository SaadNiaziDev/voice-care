import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="container">
          <div className="footer-top">
            <div className="row  justify-content-center ">
              <div className="col-lg-4  order-lg-none order-3 col-6">
                <div className="footer-logo-circle">
                  <NavLink className="header-logo" to="">
                    <img
                      src="/assets/images/vcare trans 2.png"
                      alt="header logo"
                      className="img-fluid"
                    />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-4 mb-lg-0 mb-4 col-6">
                <h2 className="mb-4 fs-20 fw-800 text-white">Our Services</h2>
                <div className="footer-links d-flex flex-column gap-2">
                  <Link>Medical Billing and Coding</Link>
                  <Link>Credentialing & Contracting</Link>
                  <Link>Out of Network Negotiations</Link>
                  <Link>Eligibility Verification</Link>
                  <Link>Patient billing services</Link>
                </div>
              </div>
              <div className="col-lg-4 mb-lg-0 mb-4 col-6">
                <h2 className="mb-4 fs-20 fw-800 text-white">Contact</h2>
                <div className="footer-links d-flex flex-column gap-2">
                  <h3 className="mb-0  text-white">00000000000</h3>
                  <Link
                    className="mb-0   text-white"
                    to={"mailto:voicecare@business.com"}
                  >
                    voicecare@business.com
                  </Link>
                  <h3 className="mb-0  text-white">
                    2nd Floor, Al Noor Tower, 17-J3 Johar,
                    <br /> J 3 Block Block J 3 Phase 2 Town,
                    <br /> Lahore, Punjab 54000
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b "></div>
        <div className="credit py-2">
          <h3 className="mb-0 fs-14 text-white text-center">
            © Copyright 2023 Voice care Medical Billing – All Rights Reserved
          </h3>
          <h4 className="mb-0 fs-14 text-white text-center">
            © Copyright 2023 Voice care Medical <br /> Billing – All Rights
            Reserved
          </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
