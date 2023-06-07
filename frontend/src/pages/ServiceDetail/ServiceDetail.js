import React from 'react';
import Testimonial from '../../components/Testimonial/Testimonial.js';
import './serviceDetail.css';
import image1 from '../../assets/ServiceDetails/service-detail-1.png';
import image2 from '../../assets/ServiceDetails/service-detail-2.png';
import banner from '../../assets/ServiceDetails/service-detail-banner.png';
export default function ServiceDetail() {
  return (
    <div className="serviceDetailPage">
      <div className="serviceDetail-mainHeadingDiv">
        <div className="serviceDetail-mainHeadingDiv-content">
          <h1 className="serviceDetail-mainHeadingDiv-content-heading">
            Consultation 
          </h1>
          <p className="serviceDetail-mainHeadingDiv-content-subHeading">
            Home <i class="bx bx-chevron-right"></i> Our Service{' '}
            <i class="bx bx-chevron-right"></i>{' '}
            <span className="blue"> Consultation A</span>
          </p>
        </div>
        <div className="serviceDetail-mainHeadingDiv-image">
          <img src={banner} alt="service-img"></img>
        </div>
      </div>

      <section className="serviceDetail-section">
        <div className="serviceDetail-section-flex">
          <div className="serviceDetail-section-flex-img">
            <img src={image1} alt="service-img"></img>
          </div>
          <div className="serviceDetail-section-flex-content">
            <h4 className="serviceDetail-section-flex-content-subHeading">
              About
            </h4>
            <h2 className="serviceDetail-section-flex-content-heading">
              Lorem Ipsum Is Simple Dummy
            </h2>
            <p className="serviceDetail-section-flex-content-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br>
              <br></br>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
          </div>
        </div>
      </section>

      <section className="serviceDetail-section">
        <div className="serviceDetail-section-flex">
          <div className="serviceDetail-section-flex-bullets">
            <p className="serviceDetail-section-flex-bullet">
              <i class="bx bx-right-arrow-circle"></i> Lorem Ipsum is simply
              dummy text of the printing
            </p>
            <p className="serviceDetail-section-flex-bullet">
              <i class="bx bx-right-arrow-circle"></i> Lorem Ipsum is simply
              dummy text of the printing
            </p>
            <p className="serviceDetail-section-flex-bullet">
              <i class="bx bx-right-arrow-circle"></i> Lorem Ipsum is simply
              dummy text of the printing
            </p>
            <p className="serviceDetail-section-flex-bullet">
              <i class="bx bx-right-arrow-circle"></i> Lorem Ipsum is simply
              dummy text of the printing
            </p>
          </div>

          <div className="serviceDetail-section-flex-bullets">
            <p className="serviceDetail-section-flex-bullet">
              <i class="bx bx-right-arrow-circle"></i> Lorem Ipsum is simply
              dummy text of the printing
            </p>
            <p className="serviceDetail-section-flex-bullet">
              <i class="bx bx-right-arrow-circle"></i> Lorem Ipsum is simply
              dummy text of the printing
            </p>
            <p className="serviceDetail-section-flex-bullet">
              <i class="bx bx-right-arrow-circle"></i> Lorem Ipsum is simply
              dummy text of the printing
            </p>
            <p className="serviceDetail-section-flex-bullet">
              <i class="bx bx-right-arrow-circle"></i> Lorem Ipsum is simply
              dummy text of the printing
            </p>
          </div>
        </div>
      </section>

      <section className="serviceDetail-section">
        <div className="serviceDetail-section-flex">
          <div className="serviceDetail-section-flex-content">
            <h4 className="serviceDetail-section-flex-content-subHeading">
              About
            </h4>
            <h2 className="serviceDetail-section-flex-content-heading">
              Lorem Ipsum Is Simple Dummy
            </h2>
            <p className="serviceDetail-section-flex-content-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br>
              <br></br>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
            <button className="serviceDetail-section-flex-content-btn">
              Apply Online <i class="bx bx-right-arrow-circle"></i>
            </button>
          </div>
          <div className="serviceDetail-section-flex-img">
            <img src={image2} alt="service-img"></img>
          </div>
        </div>
      </section>

      <section className="serviceDetail-section-testimonials">
        <h4 className="serviceDetail-section-testimonials-subHeading">
          Testimonials
        </h4>
        <h1 className="serviceDetail-section-testimonials-heading">
          Read <span className="underline success">Testimonials</span>from our
          alumni
        </h1>
        <div className="serviceDetail-section-testimonials-flex">
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
        </div>
      </section>
    </div>
  );
}
