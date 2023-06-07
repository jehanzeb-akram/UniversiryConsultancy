import React from 'react';
import './latestinformation.css';
export default function LatestInformation({ img, information }) {
  return (
    <div className="latestInformation-div">
      {console.log('entered in latest information')}
      <div className="user-info">
        <img src={img} alt="user"></img>
        <h3>{information.name}</h3>
      </div>
      <div className="info-type">
        <button>{information.type}</button>
      </div>
      <div className="info-time">
        <p>{information.time}</p>
      </div>
    </div>
  );
}
