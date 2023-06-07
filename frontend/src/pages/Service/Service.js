import React from 'react';
import './service.css';
import serviceA from '../../assets/ServicePage/service-A.png';
import serviceB from '../../assets/ServicePage/service-B.png';
import serviceC from '../../assets/ServicePage/service-C.png';
import { Link } from 'react-router-dom';
import ServiceDetail from '../ServiceDetail/ServiceDetail.js';
export default function Service() {
  return (
    <div>
      <h1 className="service-mainHeading">Our Service</h1>
      <p className="service-subHeading">
        Home <i class="bx bx-chevron-right"></i>
        <span className="blue">Our Service</span>
      </p>

      <section className="service-section">
        <div className="service-section-img">
          <img src={serviceA} alt="service-img"></img>
        </div>
        <div className="service-section-content">
          <h1 className="service-section-content-heading">Consulting A</h1>
          <p className="service-section-content-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br></br>
            <br></br> It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
          <Link className="service-link" to="/service/details">
            <button className="service-section-content-btn">
              <span>Read More</span>
              <span>
                <i class=" bx bx-right-arrow-circle"></i>
              </span>
            </button>
          </Link>
        </div>
      </section>

      <section className="service-section second-service">
        <div className="service-section-content">
          <h1 className="service-section-content-heading">Consulting B</h1>
          <p className="service-section-content-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br></br>
            <br></br> It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
          <Link className="service-link" to="/service/details">
            <button className="service-section-content-btn">
              Read More
              <span>
                <i class="bx bx-right-arrow-circle"></i>
              </span>
            </button>
          </Link>
        </div>
        <div className="service-section-img">
          <img src={serviceB} alt="service-img"></img>
        </div>
      </section>

      <section className="service-section">
        <div className="service-section-img">
          <img src={serviceC} alt="service-img"></img>
        </div>
        <div className="service-section-content">
          <h1 className="service-section-content-heading">Consulting C</h1>
          <p className="service-section-content-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br></br>
            <br></br> It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
          <Link className="service-link" to="/service/details">
            <button className="service-section-content-btn">
              Read More
              <span>
                <i class="bx bx-right-arrow-circle"></i>
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
