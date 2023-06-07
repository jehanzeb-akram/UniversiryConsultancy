import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import homee from '../../assets/Sidebar/homee.png';
import schedule from '../../assets/Sidebar/schedule.png';
import user from '../../assets/Sidebar/user.png';
import inbox from '../../assets/Sidebar/inbox.png';
import noti from '../../assets/Sidebar/noti.png';
import question from '../../assets/Login/question.png';
import { useState } from 'react';

export default function Sidebar() {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">LOGO</h3>
          <ul className="sidebarList">
            <Link to="/dashboard" className="link">
              <div className="fc">
                <img className="sideimg" src={homee}></img>
                <li className="sidebarListItem ">Home</li>
              </div>
            </Link>
            <Link to="/schedule" className="link">
              <div className="fc">
                <img className="sideimg" src={schedule}></img>
                <li className="sidebarListItem">Schedule</li>
              </div>
            </Link>

            <Link to="/user" className="link">
              <div className="fc">
                <img className="sideimg" src={user}></img>
                <li className="sidebarListItem">User</li>
              </div>
            </Link>
            <Link to="/inbox" className="link">
              <div className="fc">
                <img className="sideimg" src={inbox}></img>
                <li className="sidebarListItem">Inbox</li>
              </div>
            </Link>
            <Link to="/notification" className="link">
              <div className="fc">
                <img className="sideimg" src={noti}></img>
                <li className="sidebarListItem">Notification</li>
              </div>
            </Link>
            <button className="endbtn" onClick={handleLogout}>
              Log Out
            </button>
          </ul>
        </div>
      </div>
      {showLogout && (
        <div className="logout-div">
          <div className="logout-container">
            <h2 className="lo">Log Out</h2>
            <img className="question" src={question}></img>
            <p className="ptagg">Are you sure to Log out?</p>
          </div>

          <div className="logout-btn">
            <Link className="link" to="/">
              <button className="logout-btn1">Yes</button>
            </Link>
            <button className="logout-btn1" onClick={handleLogout}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
