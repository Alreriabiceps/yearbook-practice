import React from 'react';
import { Outlet } from 'react-router';
import SideMenu from '../components/SideMenu';

function DefaultLayout() {
  return (
    <div className="flex">
      {/* SideMenu */}
      <SideMenu />

      {/* Main content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;