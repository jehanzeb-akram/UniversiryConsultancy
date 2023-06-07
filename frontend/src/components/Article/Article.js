import React from 'react';
import './article.css';
export default function Article({ articleData, imageSource }) {
  return (
    <div className="articleData">
      <div className="para">
        <h1 className="paraHeading">About</h1>
        <p className="paraContent">{articleData.about}</p>
      </div>
      <div className="para">
        <h1 className="paraHeading">Academic Excellence</h1>
        <p className="paraContent">{articleData.academicExcellence}</p>
      </div>
      <div className="para">
        <h1 className="paraHeading">MultiCultural Environment</h1>
        <p className="paraContent">{articleData.multiCulturalEnvironment}</p>
      </div>
      <img className="image" src={imageSource} alt="canada"></img>
      <div className="para">
        <h1 className="paraHeading">Affordable Education</h1>
        <p className="paraContent">{articleData.affordableEducation}</p>
      </div>
      <div className="para">
        <h1 className="paraHeading">Employment</h1>
        <p className="paraContent">{articleData.employment}</p>
      </div>
      <div className="para">
        <h1 className="paraHeading">Quality Of Life</h1>
        <p className="paraContent">{articleData.qualityOfLife}</p>
      </div>
      <div className="para">
        <h1 className="paraHeading">Conclusion</h1>
        <p className="paraContent">{articleData.conclusion}</p>
      </div>
    </div>
  );
}
