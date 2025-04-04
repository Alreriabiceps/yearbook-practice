import React from 'react'
import NavBar from '../features/users/components/NavBar'
import { Outlet } from 'react-router'

const StudentLayout = () => {
  return (
   <>
       <NavBar />
 

      <Outlet />
      </>
  )
}

export default StudentLayout