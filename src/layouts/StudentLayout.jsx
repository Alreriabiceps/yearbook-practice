import React from 'react'
import UserSideMenu from '../features/users/components/UserSideMenu'
import { Outlet } from 'react-router'

const StudentLayout = () => {
  return (
    <div className="flex">
    {/* SideMenu */}
    <UserSideMenu />

    {/* Main content */}
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
  )
}

export default StudentLayout