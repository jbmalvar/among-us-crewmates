import { useState, useRef, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Create.css';
import { supabase } from '../client.js';
import Card from '../components/Card'; // Import the Card component

function Update() {
  const [searchParams] = useSearchParams();
  const crewmateId = searchParams.get('id');

  const nameRef = useRef(null);
  const speedRef = useRef(null);
  const [color, setColor] = useState('');
  const [crewmateData, setCrewmateData] = useState(null); // State to store crewmate data
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select()
        .eq('id', crewmateId)
        .single();

      if (data) {
        nameRef.current.value = data.name;
        speedRef.current.value = data.speed;
        setColor(data.color);
        setCrewmateData(data); // Store fetched data in state
      }

      if (error) {
        console.error(error);
        alert('Error fetching crewmate data');
      }
    };

    if (crewmateId) {
      fetchCrewmate();
    }
  }, [crewmateId]);

  const updateCrewmate = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const speed = speedRef.current.value;

    if (!color) {
      alert('Please select a color!');
      return;
    }

    const { error } = await supabase
      .from('Crewmates')
      .update({ name, speed, color })
      .eq('id', crewmateId);

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      alert('Crewmate Updated!');
      navigate('/gallery');
    }
  };

  return (
    <>
      <div className="Create">
        <h1 className="createTitle">View/Edit</h1>
        {crewmateData && <h2 className="">{crewmateData.name}</h2>}
        {}
        {crewmateData && (
          <Card
            name={crewmateData.name}
            speed={crewmateData.speed}
            color={crewmateData.color}
            created_at={crewmateData.created_at}
          />
        )}
        {crewmateData && (
            <p>
              {crewmateData.speed < 25 && "Slow ahh crewmate"}
              {crewmateData.speed >= 25 && crewmateData.speed <= 100 && "He's moving"}
              {crewmateData.speed > 100 && ">:) Speed Demon"}
            </p>
          )}
        <div className="inputContainer">
          <span className="inputSpan">
            <label className="inputLabel">Crewmate Name:</label>
            <input type="text" placeholder="Enter Crewmate Name" className="inputField" ref={nameRef}></input>
          </span>
          <span className="inputSpan">
            <label className="inputLabel">Speed (mph):</label>
            <input type="text" placeholder="Enter Speed" className="inputField" ref={speedRef}></input>
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
                    checked={color === colorOption}
                    onChange={(e) => setColor(e.target.value)}
                  />{' '}
                  {colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
                </label>
              ))}
            </div>
          </span>
        </div>
        <div className='buttonContainer'> 
          <button className="createBut" onClick={() => navigate('/gallery')}>Back</button>
          <button className="createBut" onClick={updateCrewmate}>Update</button>
        </div>
      </div>
    </>
  );
}

export default Update;