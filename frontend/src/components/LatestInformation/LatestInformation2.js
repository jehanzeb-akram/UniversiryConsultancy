import React from 'react';
import './latestinformation.css';
export default function LatestInformation({ information }) {
  return (
    <div className="latestInformation-div">
      {console.log('entered in latest information')}
      <div className="user-info">
       
        <h3>{information.name}</h3>
      </div>
      <div className="info-type">
        <button>{information.type}</button>
      </div>
      <div className="info-time">
        <p>{information.time}</p>
      </div>
      <div className="info-consultant">
        <p>{information.consultant}</p>
      </div>
      <div className="info-meet">
        <p>{information.meet}</p>
      </div>

      <div className="info-action">
        <p>{information.action}</p>
      </div>
    </div>
  );
}