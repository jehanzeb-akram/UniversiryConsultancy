import React from 'react';
import testimonialImg from '../../assets/Homepage/testimonial-img.png';
import './testimonial.css';
export default function Testimonial() {
  return (
    <div className="testimonial">
      <img className="testimonial-img" src={testimonialImg} alt="profile"></img>
      <h2 className="testimonial-name">Rudi Saleem</h2>
      <p className="testimonial-address">University of Alberta - Canada</p>
      <p className="testimonial-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type.
      </p>
      <h4 className="testimonial-date">23th May 2022</h4>
    </div>
  );
}
