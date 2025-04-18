import React from 'react';
import './Card.css';
import amongus from '../assets/amongus.webp';

const Card = (props) => {
  return (
    <div className="Card" style={{ backgroundColor: props.color }} >
      <img src={amongus} alt="Crewmate" className="card-img" />
      <h1 className="card-title">Name of Crewmate: {props.name}</h1>
      <h1 className="card-speed">Speed of Crewmate: {props.speed} mph</h1>
      <h1 className="card-color">Color of Crewmate: {props.color}</h1>
      <h1 className="card-created_at">Crewmate Created on: {props.created_at}</h1>
      <div className = "buttonsCont">
        <button className='card-button' onClick={props.onEdit}>Edit/View</button>
        <button className='card-button' onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;