import { useState } from 'react'
import './Home.css'
import Card from '../components/Card.jsx'

function Home() {

  return (
    <>
      <div className = "Home">
        <h1 className ="homeTitle">Welcome to the Crewmate Creator!</h1>
        <p className = "homeDesc">Here is where you can create your very own set of crewmates before sending off into space</p>
        <img src="https://static.wikia.nocookie.net/the-sidaba-bunch/images/0/03/AMONGUS2.png"></img>
        <img src="https://static.wikia.nocookie.net/among-us-wiki/images/7/77/UFO.png"></img>
      </div>
    </>
  )
}

export default Home
