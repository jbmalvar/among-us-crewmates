import { useState, useRef } from 'react'
import './Create.css'
import { supabase } from '../client.js'

function Create() {
  event.preventDefault()

  const nameRef = useRef(null)
  const speedRef = useRef(null)
  const [color, setColor] = useState('')

  const createCrewmate = async (event) => {
    event.preventDefault()
    const name = nameRef.current.value
    const speed = speedRef.current.value

    if (!color) {
      alert('Please select a color!');
      return;
    }

    const { data, error } = await supabase
      .from('Crewmates')
      .insert([{ name: name, speed: speed, color: color }])
      .select()

    if (error) {
      console.error(error);
      alert(error.message)
    } else {
      alert('Crewmate Created!')
      nameRef.current.value = '';
      speedRef.current.value = '';
      setColor('');
    }
  }

  return (
    <>
      <div className = "Create">
        <h1 className = "createTitle">Create a New Crewmate</h1>
        <img src="https://static.wikia.nocookie.net/the-sidaba-bunch/images/0/03/AMONGUS2.png"></img>
        <div className='inputContainer'>
          <span className ="inputSpan">
            <label className="inputLabel">Crewmate Name:</label>
            <input type="text" placeholder="Enter Crewmate Name" className="inputField" ref={nameRef}></input>
          </span>
          <span className ="inputSpan">
            <label className="inputLabel">Speed (mph):</label>
            <input type="text" placeholder="Enter Crewmate Name" className="inputField" ref={speedRef}></input>
          </span>
          <span className="inputRadio">
            <label className="inputLabel">Color:</label>
            <div className="radioOptions">
              {['red', 'green', 'blue', 'purple', 'yellow', 'orange', 'pink', 'rainbow'].map((colorOption) => (
                <label key={colorOption}>
                  <input
                    type="radio"
                    name="color"
                    value={colorOption}
                    className="inputField"
                    onChange={(e) => setColor(e.target.value)}
                  />{' '}
                  {colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
                </label>
              ))}
            </div>
          </span>
        </div>
        <button className = "createBut" onClick={createCrewmate}>Create</button>
      </div>
    </>
  )
}

export default Create
