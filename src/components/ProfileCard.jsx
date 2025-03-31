import React from 'react'

const ProfileCard = () => {
  return (
    <div>
        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img src='/profile.jpg'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Russelle Roxas</h2>
    <p>College of Information System</p>
    <p>Batch 2021-2025</p>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProfileCard