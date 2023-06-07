import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar.js";
import LatestInformation2 from '../../components/LatestInformation/LatestInformation.js';
import './schedule.css';

export default function Schedule() {
  const LatestInformation2 = [
    {
      name: 'Name Text Here',
      type: 'New User',
      time: '20th April 2023, 08:00 am',
      consultant: 'ahmed',
      meet:'hhtp',
      action:'take'
    },
    {
      name: 'Name Text Here',
      type: 'New User',
      time: '20th April 2023, 09:00 am',
      consultant: 'ahmed',
      meet:'hhtp',
      action:'take'
    },
    {
      name: 'Name Text Here',
      type: 'Make Payment',
      time: '20th April 2023, 10:00 am',
      consultant: 'ahmed',
      meet:'hhtp',
      action:'take'
    },
   
  ];

  return (
    <div>
      <div>
      <Sidebar />
      </div>

    <section className='rightside'>
      <div className='topt'>
      <h1>Schedule</h1>
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
