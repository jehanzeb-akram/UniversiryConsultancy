import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './dashboard.css';
import dashboardLogo1 from '../../assets/Dashboard/dashboardLogo1.png';
import dashboardLogo2 from '../../assets/Dashboard/dashboardLogo2.png';
import admin from '../../assets/Dashboard/admin.png';
import dashboardSchedule from '../../assets/Dashboard/dashboardSchedule.png';
import LatestInformation from '../../components/LatestInformation/LatestInformation';
export default function Dashboard() {
  const latestInformation = [
    {
      name: 'Name Text Here',
      type: 'New User',
      time: '20th April 2023, 08:00 am',
    },
    {
      name: 'Name Text Here',
      type: 'New User',
      time: '20th April 2023, 09:00 am',
    },
    {
      name: 'Name Text Here',
      type: 'Make Payment',
      time: '20th April 2023, 10:00 am',
    },
    {
      name: 'Name Text Here',
      type: 'Make Payment',
      time: '20th April 2023, 11:00 am',
    },
    {
      name: 'Name Text Here',
      type: 'Edit Profile',
      time: '20th April 2023, 12:00 pm',
    },
  ];
  return (
    <div className="dashboard-page">
      <div className="sideBar">
        <Sidebar></Sidebar>
      </div>
      <div className="dashboardPage">
        <div className="dashboard-page-content">
          <div className="dashboard-page-content-rightDiv">
            <div className="dashboard-page-content-rightDiv-headingDiv">
              <h1 className="page-heading">Dashboard</h1>
              <p>
                <i class="bx bx-calendar-alt"></i> Today Today Date
              </p>
            </div>

            <div className="dashboard-page-content-rightDiv-cardsDiv">
              <div className="dashboard-card blue-card">
                <div className="card-top">
                  <img src={dashboardLogo1} alt="logo"></img>
                  <div className="card-top-innerDiv">
                    <h3>All User</h3>
                    <p>Today Date</p>
                  </div>
                </div>
                <h1>200K</h1>
              </div>

              <div className="dashboard-card">
                <div className="card-top">
                  <img src={dashboardLogo2} alt="logo"></img>
                  <div className="card-top-innerDiv">
                    <h3>New User</h3>
                    <p>Today Month</p>
                  </div>
                </div>
                <h1>200</h1>
              </div>

              <div className="dashboard-card">
                <div className="card-top">
                  <img src={dashboardLogo2} alt="logo"></img>
                  <div className="card-top-innerDiv">
                    <h3>Consultation Schedules</h3>
                    <p>Today Month</p>
                  </div>
                </div>
                <h1>50</h1>
              </div>
            </div>

            <div className="latestInformation">
              <h1>Latest Information</h1>
              <div className="information-div">
                {latestInformation.map((info) => {
                  return (
                    <LatestInformation
                      img={dashboardSchedule}
                      information={info}
                    ></LatestInformation>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="dashboard-page-content-leftDiv">
            <p className="notification-icon">
              <i class="bx bxs-bell"></i>
            </p>

            <div className="admin-info">
              <img src={admin} alt="admin"></img>
              <h1>Rudi Saleem</h1>
              <p>
                <strong>Admin ID :</strong> 2032 0419 2381 5431
              </p>
            </div>

            <div className="calender"></div>

            <div className="schedules">
              <p className="schedules-heading">Schedule For Today</p>

              <div className="schedule">
                <div className="schedule-leftDiv">
                  <img src={dashboardSchedule} alt="man"></img>
                  <div className="schedule-leftDiv-innerDiv">
                    <h3>Name Text Here</h3>
                    <p>Consulting A</p>
                  </div>
                </div>
                <div className="schedule-rightDiv">
                  <p>09:00 am</p>
                </div>
              </div>

              <div className="schedule">
                <div className="schedule-leftDiv">
                  <img src={dashboardSchedule} alt="man"></img>
                  <div className="schedule-leftDiv-innerDiv">
                    <h3>Name Text Here</h3>
                    <p>Consulting A</p>
                  </div>
                </div>
                <div className="schedule-rightDiv">
                  <p>09:00 am</p>
                </div>
              </div>

              <div className="schedule">
                <div className="schedule-leftDiv">
                  <img src={dashboardSchedule} alt="man"></img>
                  <div className="schedule-leftDiv-innerDiv">
                    <h3>Name Text Here</h3>
                    <p>Consulting A</p>
                  </div>
                </div>
                <div className="schedule-rightDiv">
                  <p>09:00 am</p>
                </div>
              </div>

              <div className="schedule">
                <div className="schedule-leftDiv">
                  <img src={dashboardSchedule} alt="man"></img>
                  <div className="schedule-leftDiv-innerDiv">
                    <h3>Name Text Here</h3>
                    <p>Consulting A</p>
                  </div>
                </div>
                <div className="schedule-rightDiv">
                  <p>09:00 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
