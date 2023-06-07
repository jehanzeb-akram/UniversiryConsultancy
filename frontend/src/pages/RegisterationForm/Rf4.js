import React from "react";
import pic2 from '../../assets/Registrationform/pic2.png'
import Section1 from '../../assets/Registrationform/Section1.png'
import pic3 from '../../assets/Registrationform/pic3.png'
import pic4 from '../../assets/Registrationform/pic4.png'
import invoice from '../../assets/Registrationform/invoice.png'
import i from '../../assets/Registrationform/i.png'
import arr from '../../assets/Registrationform/arr.png'
import { useState } from "react";
import './rf.css';

export default function Rf3() {
    return(
    <div className="top">
        <h1>Registration Form</h1>
        <div className="page1image">
        <img  src={pic4} alt=''></img>
        </div>

        <div className="page1img">
        <img  src={Section1} alt=''></img>
        </div>

        <div className="formsection">
            <div className="fir">
                <h2><strong>Scheduling</strong></h2>
                <p>Schedule a Consultation with us</p>
            </div>

            <div className="mbr">
                <div className="lastinvoice">
                  <img  src={invoice} alt=''></img>
                </div>
                <div className="invoicetext">
                        <h1> Your Order For Counsseling A <br></br><span className="ll"> With a Bill of</span> <span className="col" >2000$</span></h1>
                        <p>Please Make Payment To  </p>
                        <h3>123456 123 (Bank Of America) </h3>
                </div>

                <div className="iii">
                <img  src={i} alt=''></img>
                <p>Make a payment before the specified time ends or the order will be automatically canceled.<span className="red"> 23  : 50 :30</span> </p>

                </div>
            </div>

            <div className="arr">
                <img src={arr} alt=''></img>
                <h3>Preview</h3>
            </div>

            <div className="db">
                <button>Done</button>
            </div>

        </div>    
    </div>
    )
}