import React from 'react'
import ProfileCard from '../../../components/ProfileCard'

const StudentList = () => {
  return (
    <div className="p-10">
  <div 
  className="flex w-full flex-col lg:flex-row">
  <ProfileCard />
  <div className="divider lg:divider-horizontal"></div>
  <ProfileCard />
  <div className="divider lg:divider-horizontal"></div>
  <ProfileCard />
  <div className="divider lg:divider-horizontal"></div>
  <ProfileCard />
</div>
    </div>
  )
}

export default StudentList