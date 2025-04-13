import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Gallery.css'

function Gallery() {
  const navigate = useNavigate();

  return (
    <>
      <div className = "Gallery">
        <h1>Gallery</h1>
        <h2>You haven't made anything yet</h2>
        <button className="createButton" onClick={() => navigate('/create')}> Create One Here! </button>
      </div>
    </>
  )
}

export default Gallery
