import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className='min-h-[calc(100vh-384px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
