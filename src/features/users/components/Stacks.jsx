import React from 'react'
import { useNavigate } from 'react-router'





const Stacks = () => {
    const navigate = useNavigate()

const handleInformationSystem = () => {
    navigate('/information-system')
}

const handleTourismManagement = () => {
    navigate('/tourism-management')
}

const handleMarineEngineering = () => {
    navigate('/marine-engineering')
}

const handleCriminology = () => {
    navigate('/criminology')
}


  return (
    <div className='flex items-center justify-center min-h-screen'>
    <div className="stack w-60 mr-25 ">
  <img
  onClick={handleInformationSystem}
  src="./profilewally.jpg" className="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="rounded-box" />
</div>

<div className="stack w-60 mr-25 ">
  <img
  onClick={handleTourismManagement}
  src="./profilewally.jpg" className="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="rounded-box" />
</div>

<div className="stack w-60 mr-25 ">
  <img
  onClick={handleCriminology}
  src="./profilewally.jpg" className="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="rounded-box" />
</div>

<div className="stack w-60 mr-25 ">
  <img
  onClick={handleMarineEngineering}
  src="./profilewally.jpg" />
  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="rounded-box" />
  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" className="rounded-box" />
</div>
</div>


  )
}

export default Stacks