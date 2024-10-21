import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const Footer = () => {
  return (
    <div className="bg-teal-800  text-white py-8">
      <div className="container mx-auto px-4">
        <Row gutter={[ 24, 24 ]}>
          {/* Logo Section */}
          <Col xs={24} lg={8} className="flex justify-center lg:justify-start">
            <NavLink className="header-logo" to="/">
              <img
                src="/assets/images/vcare trans 2.png"
                alt="footer logo"
                className="h-16"
              />
            </NavLink>
          </Col>

          {/* Services Section */}
          <Col xs={24} lg={8}>
            <Title level={4} className="!text-white mb-4">
              Our Services
            </Title>
            <div className="flex flex-col gap-2">
              <Link to="#" className="hover:underline text-teal-300">
                Medical Billing and Coding
              </Link>
              <Link to="#" className="hover:underline text-teal-300">
                Credentialing & Contracting
              </Link>
              <Link to="#" className="hover:underline text-teal-300">
                Out of Network Negotiations
              </Link>
              <Link to="#" className="hover:underline text-teal-300">
                Eligibility Verification
              </Link>
              <Link to="#" className="hover:underline text-teal-300">
                Patient Billing Services
              </Link>
            </div>

          </Col>

          {/* Contact Section */}
          <Col xs={24} lg={8}>
            <Title level={4} className="!text-white mb-4">
              Contact
            </Title>
            <div className="flex flex-col gap-2">
              <Text className="text-teal-300">+917 292 6275</Text>
              <Link className="hover:underline text-teal-300" to={"mailto:muzzafar110@gmail.com"}>
                muzzafar110@gmail.com
              </Link>
              <Text className="text-teal-300">
                VoiceCareHub LLC
                <br />784 Wyngate Drive West,
                <br /> Valley Stream,
                New York NY-11580
              </Text>
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-teal-700 mt-8 pt-4">
        <div className="text-center">
          <Text className="text-sm text-teal-300">
            © Copyright 2023 Voice Care – All Rights Reserved
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
