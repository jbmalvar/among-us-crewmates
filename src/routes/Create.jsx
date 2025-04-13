import { useState } from 'react'
import './Create.css'

function Create() {

  return (
    <>
      <div className = "Create">
        <h1 className = "createTitle">Create a New Crewmate</h1>
        <img src="https://static.wikia.nocookie.net/the-sidaba-bunch/images/0/03/AMONGUS2.png"></img>
        <div className='inputContainer'>
          <span className ="inputSpan">
            <label className="inputLabel">Crewmate Name:</label>
            <input type="text" placeholder="Enter Crewmate Name" className="inputField"></input>
          </span>
          <span className ="inputSpan">
            <label className="inputLabel">Crewmate Name:</label>
            <input type="text" placeholder="Enter Crewmate Name" className="inputField"></input>
          </span>
          <span className="inputRadio">
            <label className="inputLabel">Color:</label>
            <div className="radioOptions">
              <label>
                <input type="radio" name="role" value="red" className="inputField" /> Red
              </label>
              <label>
                <input type="radio" name="role" value="green" className="inputField" /> Green
              </label>
              <label>
                <input type="radio" name="role" value="blue" className="inputField" /> Blue
              </label>
              <label>
                <input type="radio" name="role" value="purple" className="inputField" /> Purple
              </label>
              <label>
                <input type="radio" name="role" value="yellow" className="inputField" /> Yellow
              </label>
              <label>
                <input type="radio" name="role" value="orange" className="inputField" /> Orange
              </label>
              <label>
                <input type="radio" name="role" value="pink" className="inputField" /> Pink
              </label>
              <label>
                <input type="radio" name="role" value="rainbow" className="inputField" /> Rainbow
              </label>
            </div>
          </span>
        </div>
        <button>Create</button>
      </div>
    </>
  )
}

export default Create
