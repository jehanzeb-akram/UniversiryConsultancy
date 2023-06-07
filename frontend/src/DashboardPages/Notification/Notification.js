import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar.js";
import LatestInformation2 from '../../components/LatestInformation/LatestInformation.js';
import './notification.css';

export default function Notification() {
  return (
    <div>
      <div>
      <Sidebar />
      </div>

    <section className='rightside'>
      <div className='topt'>
      <h1>Notification</h1>
      </div>

      <div className='bbtnn'>
        <button className='btn1'>Today</button>
        <button className='btn1'>This Month</button>
        <button className='btn1'>Finished</button>

      </div>

      <div className='componentt'>
    

      </div>
    </section>

   </div>
  );
}

 