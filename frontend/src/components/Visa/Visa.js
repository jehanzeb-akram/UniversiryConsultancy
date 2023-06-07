import React from 'react';
import '../Article/article.css';
export default function Visa({ visaData, imageSource }) {
  return (
    <div className="articleData">
      <div className="para">
        <h1 className="paraHeading">About</h1>
        <p className="paraContent">{visaData.about.content}</p>
      </div>
      <div className="para">
        <h1 className="paraHeading">{visaData.firstHeading.heading}</h1>
        <p className="paraContent">{visaData.firstHeading.content}</p>
      </div>
      <div className="para">
        <h1 className="paraHeading">{visaData.secondHeading.heading}</h1>
        <p className="paraContent">{visaData.secondHeading.content}</p>
      </div>
      <img className="image" src={imageSource} alt="canada"></img>
      <div className="para">
        <h1 className="paraHeading">{visaData.thirdHeading.heading}</h1>
        <p className="paraContent">{visaData.thirdHeading.content}</p>
      </div>
      <div className="para">
        <h1 className="paraHeading">{visaData.fourthHeading.heading}</h1>
        <p className="paraContent">{visaData.fourthHeading.content}</p>
      </div>
    </div>
  );
}
