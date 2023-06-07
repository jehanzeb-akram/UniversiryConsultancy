import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.js';
import './inbox.css';
import personimg from '../../assets/Inbox/personimg.png';
import noti from '../../assets/Sidebar/noti.png';
import inboximg from '../../assets/Inbox/inboximg.png';
import msg from '../../assets/Inbox/msg.png';
import call from '../../assets/Inbox/call.png';
import { useState } from 'react';

export default function Inbox() {
  const [showmsg, setshowmsg] = useState(false);
  const [showcall, setshowcall] = useState(true);

  const showmsgbox = () => {
    setshowmsg(true);
    setshowcall(false);
  };

  const showcallbox = () => {
    setshowmsg(false);
    setshowcall(true);
  };

  return (
    <div className="inbox">
      <div>
        <Sidebar />
      </div>

      <section className="inboxside">
        <div className="inboxsearch">
          <input className="inboxs" type="text" placeholder="Search" />
        </div>
        <div className="ip">
          <p className="p">Inbox</p>
        </div>

        <hr className="verticalline"></hr>

        <div className="inboxperson">
          <img className="pimgg" src={personimg} alt=""></img>
          <p onClick={showmsgbox}>Budi Doremi</p>
          {/* <img className='notimg' src={noti}></img> */}
        </div>

        <div className="inboxperson">
          <img className="pimgg" src={personimg} alt=""></img>
          <p onClick={showmsgbox}>Budi Doremi</p>
          {/* <img className='notimg' src={noti}></img> */}
        </div>

        <div className="inboxperson">
          <img className="pimgg" src={personimg} alt=""></img>
          <p onClick={showmsgbox}>Budi Doremi</p>
          {/* <img className='notimg' src={noti}></img> */}
        </div>

        <div className="inboxperson">
          <img className="pimgg" src={personimg} alt=""></img>
          <p onClick={showmsgbox}>Budi Doremi</p>
          {/* <img className='notimg' src={noti}></img> */}
        </div>

        <div className="inboxperson">
          <img className="pimgg" src={personimg} alt=""></img>
          <p onClick={showmsgbox}>Budi Doremi</p>
          {/* <img className='notimg' src={noti}></img> */}
        </div>

        <div className="inboxperson">
          <img className="pimgg" src={personimg} alt=""></img>
          <p onClick={showmsgbox}>Budi Doremi</p>
          {/* <img className='notimg' src={noti}></img> */}
        </div>

        <div className="inboxperson">
          <img className="pimgg" src={personimg} alt=""></img>
          <p onClick={showmsgbox}>Budi Doremi</p>
        </div>
      </section>

      {showcall && (
        <section className="inboxchat">
          <div className="inboxchathead">
            <h2>User Message</h2>

            <hr className="lline"></hr>

            {<img className="inboximg" src={inboximg} alt=""></img>}
          </div>
        </section>
      )}

      {showmsg && (
        <section>
          <div className="topthings">
            <h2>Chat Atkif</h2>
            <button className="cbtn" onClick={showcallbox}>
              Close
            </button>
          </div>

          <div className="topthings">
            <img className="dimg" src={personimg}></img>
            <p>Name</p>
            <img className="cimg" src={msg}></img>
            <img className="bimg" src={call}></img>
          </div>

          <hr className="tl"></hr>

          <div className="forcmt">
            <input className="comm" type="text" placeholder="Comment" />
            <button className="lbtn">Send</button>
          </div>
        </section>
      )}
    </div>
  );
}
