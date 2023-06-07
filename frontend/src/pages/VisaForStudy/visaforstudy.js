import React from 'react';
import mainSection from '../../assets/VisaForStudy/mainSection.png';
import usa from '../../assets/VisaForStudy/usa.png';
import canada from '../../assets/VisaForStudy/canada.png';
import germany from '../../assets/VisaForStudy/germany.png';
import japan from '../../assets/VisaForStudy/japan.png';
import england from '../../assets/VisaForStudy/england.png';
import lastSection from '../../assets/VisaForStudy/lastSection.png';
import './visaforstudy.css';
import { Link } from 'react-router-dom';
export default function VisaForStudy() {
  return (
    <div className="visaForStudy">
      <div className="headingSection">
        <h1 className="mainHeading">
          <span className="underline">Visa For Study</span>
        </h1>
        <p className="subHeading">Home {'>'} Visa For Study </p>
      </div>
      <div className="mainSection">
        <img src={mainSection} alt="mainSection"></img>
        <div className="mainSection-content">
          <p className="mainSection-content-topHeading">About Visa</p>
          <h1>Your Comprehensive Resource for Studying Abroad</h1>
          <p className="desc">
            We understand that studying abroad can be an exciting and rewarding
            experience, but it can also be overwhelming when it comes to
            navigating the visa application process. Our Study Visa section is
            here to provide you with comprehensive information and guidance to
            make your visa application process as smooth as possible. We have
            compiled a wealth of information on visa requirements, application
            procedures, and immigration policies for students who are planning
            to study abroad. Our goal is to ensure that you have all the
            information you need to make informed decisions about your study
            abroad plans and to help you succeed in achieving your academic and
            career goals.
          </p>
        </div>
      </div>

      <div className="studyVisaSection">
        <h1 className="studyVisaSection-mainHeading">Study Visa</h1>
        <p className="studyVisaSection-subHeading">
          Check info about Study Visa in your destination country
        </p>
        <div className="studyVisaSection-btnContainer">
          <Link className="link" to="/usa">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={usa} alt="flag"></img>
              <span>USA Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/england">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={england} alt="flag"></img>
              <span>England Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/japan">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={japan} alt="flag"></img>
              <span>Japan Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/germany">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={germany} alt="flag"></img>
              <span>Germany Study Visa</span>
            </button>
          </Link>
          <Link className="link" to="/canada">
            <button className="studyVisaSection-btnContainer-btn">
              <img src={canada} alt="flag"></img>
              <span>Canada Study Visa</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="studyForVisa-lastSection">
        <div className="studyForVisa-lastSection-content">
          <p className="studyForVisa-lastSection-subHeading">About Visa</p>
          <h1 className="studyForVisa-lastSection-mainHeading">
            Steps to Follow Before Applying for a Study Visa
          </h1>
          <p className="studyForVisa-lastSection-desc">
            Studying abroad can be an enriching and life-changing experience.
            However, the visa application process can be complex and
            overwhelming. To help you prepare for your study abroad journey,
            we've outlined four essential steps you should follow before
            applying for a study visa
          </p>
          <div className="steps">
            <p className="step">
              <i class="bx bx-right-arrow-circle"></i> Research Your Destination
              Country's Visa Requirements
            </p>
            <p className="step">
              <i class="bx bx-right-arrow-circle"></i> Select a Recognized
              Institution
            </p>
            <p className="step">
              <i class="bx bx-right-arrow-circle"></i> Prepare Your
              Documentation
            </p>
            <p className="step">
              <i class="bx bx-right-arrow-circle"></i> Consult with Experts
            </p>
          </div>
          <Link className="link applyOnline-btn-container" to="">
            <button className="applyOnline-btn">
              Apply Online <i class="bx bx-right-arrow-circle"></i>
            </button>
          </Link>
        </div>
        <div className="lastSection-img">
          <img src={lastSection} alt="lastSection"></img>
        </div>
      </div>
    </div>
  );
}
