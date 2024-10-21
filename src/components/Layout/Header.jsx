import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, Button, Typography } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Header = () => {
  const [ show, setShow ] = useState( false );
  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  return (
    <header className="header bg-white shadow-md  w-full z-50">
      <nav className="navbar container mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink className="header-logo ms-4" to="/">
          <img
            src="/assets/images/vcare trans 2.png"
            alt="header logo"
            className="h-10"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="nav-links hidden lg:flex space-x-20">
          <NavLink className="nav-link text-teal-800 hover:text-teal-600 font-semibold" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link text-teal-800 hover:text-teal-600 font-semibold" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link text-teal-800 hover:text-teal-600 font-semibold" to="/services">
            Services
          </NavLink>
          <NavLink className="nav-link text-teal-800 hover:text-teal-600 font-semibold" to="/benefits">
            Benefits
          </NavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <Button
            type="primary"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold border-none rounded-lg"
            style={{
              width: '150px',
            }}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon lg:hidden flex items-center">
          <MenuOutlined className="text-teal-800 text-2xl" onClick={handleShow} />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <NavLink className="header-logo" to="/" onClick={handleClose}>
            <img
              src="/assets/images/vcare trans 2.png"
              alt="header logo"
              className="h-8"
            />
          </NavLink>
        }
        placement="left"
        onClose={handleClose}
        open={show}
        closeIcon={<CloseOutlined className="text-teal-800 text-xl" />}
        className="lg:hidden"
      >
        <div className="nav-links flex flex-col space-y-6 mt-4">
          <NavLink className="nav-link text-teal-800 hover:text-teal-600 text-lg" to="/" onClick={handleClose}>
            Home
          </NavLink>
          <NavLink className="nav-link text-teal-800 hover:text-teal-600 text-lg" to="/about" onClick={handleClose}>
            About
          </NavLink>
          <NavLink className="nav-link text-teal-800 hover:text-teal-600 text-lg" to="/services" onClick={handleClose}>
            Services
          </NavLink>
          <NavLink className="nav-link text-teal-800 hover:text-teal-600 text-lg" to="/benefits" onClick={handleClose}>
            Benefits
          </NavLink>
        </div>

        <div className="header-button mt-6">
          <Button
            type="primary"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold w-full rounded-lg"
            onClick={handleClose}
          >
            Contact Us
          </Button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
