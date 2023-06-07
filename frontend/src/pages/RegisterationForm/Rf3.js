import React from "react";
import pic2 from '../../assets/Registrationform/pic2.png'
import Section1 from '../../assets/Registrationform/Section1.png'
import pic3 from '../../assets/Registrationform/pic3.png'
import { useState } from "react";
import './rf.css';

export default function Rf3() {
    return(
    <div className="top">
        <h1>Registration Form</h1>
        <div className="page1image">
        <img  src={pic3} alt=''></img>
        </div>

        <div className="page1img">
        <img  src={Section1} alt=''></img>
        </div>

        <div className="formsection">
            <div className="fir">
                <h2><strong>Scheduling</strong></h2>
                <p>Schedule a Consultation with us</p>
            </div>

            

        </div>    
    </div>
    )
}