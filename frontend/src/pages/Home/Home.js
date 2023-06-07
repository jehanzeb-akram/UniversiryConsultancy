import React from 'react';
import imageLeft from '../../assets/Homepage/imageLeft.png';
import imageRight from '../../assets/Homepage/imageRight.png';
import applyOnlineIcon from '../../assets/Homepage/applyOnlineIcon.png';
import discoverMoreIcon from '../../assets/Homepage/discoverMoreIcon.png';
import card1 from '../../assets/Homepage/oneStopStudySol-Icon.png';
import card2 from '../../assets/Homepage/oneToOne-Icon.png';
import card3 from '../../assets/Homepage/endToendIcon.png';
import aboutImage from '../../assets/Homepage/aboutImage.png';
import usa from '../../assets/Homepage/usa.png';
import canada from '../../assets/Homepage/canada.png';
import germany from '../../assets/Homepage/germany.png';
import japan from '../../assets/Homepage/japan.png';
import england from '../../assets/Homepage/england.png';
import section61 from '../../assets/Homepage/section6-1.png';
import section62 from '../../assets/Homepage/section6-2.png';
import section63 from '../../assets/Homepage/section6-3.png';
import section64 from '../../assets/Homepage/section6-4.png';
import section65 from '../../assets/Homepage/section6-5.png';
import groupmen from '../../assets/Homepage/groupmen.png'
import calicon from '../../assets/BlogPage/cal-icon.png'
import arrow from '../../assets/BlogPage/arrow.png'
import { Link } from 'react-router-dom';
import './home.css';
import Testimonial from '../../components/Testimonial/Testimonial';
export default function Home() {
  return (
    <div>
      <section className="section section1">
        <div className="image-left">
          <img src={imageLeft} alt="leftImage"></img>
        </div>
        <div className="content">
          <h4>SPECIAL OFFER FIRST CUSTOMER</h4>
          <h1>
            Your <span className="underline success">success</span> journey
            start with us!
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <div className="sec1-btns">
            <Link className="link" to="/reg">
              <button className="apply-online-btn">
                Apply Online<img src={applyOnlineIcon} alt="icon"></img>
              </button>
            </Link>
            <Link className="link" to="/country">
              <button className="discover-more-btn">
                <img src={discoverMoreIcon} alt="icon"></img>Discover More
              </button>
            </Link>
          </div>
        </div>
        <div className="image-right">
          <img src={imageRight} alt="rightImage"></img>
        </div>
      </section>

      <section className="section section2">
        <h4>About Us</h4>
        <h1>
          Lorem ispum is simple <span className="underline">dummy</span> text
        </h1>

        <div className="about-cards">
          <div className="about-card">
            <img src={card1} alt="card1"></img>
            <h3>One Stop Study Solution</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>
            <p className="learnMore">
              Learn More <i class="bx bx-right-arrow-circle"></i>{' '}
            </p>
          </div>
          <div className="about-card">
            <img src={card2} alt="card2"></img>
            <h3>One To One Discussion</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>
            <p className="learnMore">
              Learn More <i class="bx bx-right-arrow-circle"></i>{' '}
            </p>
          </div>
          <div className="about-card">
            <img src={card3} alt="card3"></img>
            <h3>End To End Support</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>
            <p className="learnMore">
              Learn More <i class="bx bx-right-arrow-circle"></i>
            </p>
          </div>
        </div>
      </section>
      <section className="section section3">
        <div>
          <h3>About Us</h3>
          <h1>
            Moving beyond product innovation to gain a competitive{' '}
            <span className="underline">advantage</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <Link className="link" to="/reg">
            <button>Apply Online</button>
          </Link>
        </div>
        <div className="happy">
          <img src={aboutImage} alt=""></img>
        </div>
      </section>

      <section className="section section4">
        <h3>Country</h3>
        <h1>
          Top <span className="underline success">Destinations</span>For Study
          With Us
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className="flag-cards">
          <div className='flagmobile'>

          
          <Link className='link' to='/usa'>
          <div className="flag-card">
            <img src={usa} alt="flag"></img>
            <h2>USA</h2>
          </div>
          </Link>
          <Link className='link' to='/germany'>
          <div className="flag-card">
            <img src={germany} alt="flag"></img>
            <h2>Germany</h2>
          </div>
          </Link>
          <Link className='link' to='/japan'>
          <div className="flag-card">
            <img src={japan} alt="flag"></img>
            <h2>Japan</h2>
          </div>
          </Link>
          </div>
          <div className='flagmobile'>

            <Link className='link' to='/canada'></Link>
          <div className="flag-card">
            <img src={canada} alt="flag"></img>
            <h2>Canada</h2>
          </div>
          <Link className='link' to='/england'>
          <div className="flag-card">
            <img src={england} alt="flag"></img>
            <h2>England</h2>
          </div>
          </Link>
          </div>
        </div>
        <Link className='link' to='./reg'><button className="applyOnlineBtn">Apply Online</button></Link>
      </section>

      <section className="section section5">
        <h3>Service</h3>
        <div className="firstDiv">
          <h1>Our Service</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <h2>Counseling A</h2>
            <p className="subText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's .
            </p>
            <div className="points">
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
            </div>
            <div className="pricing">
              <h2>$100</h2>
              <Link className="link" to="/reg">
                <button>Apply Now!</button>
              </Link>
            </div>
          </div>

          <div className="service-card">
            <h2>Counseling B</h2>
            <p className="subText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's .
            </p>
            <div className="points">
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
            </div>
            <div className="pricing">
              <h2>$200</h2>
              <Link className="link" to="/reg">
                <button>Apply Now!</button>
              </Link>
            </div>
          </div>

          <div className="service-card">
            <h2>Counseling C</h2>
            <p className="subText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's .
            </p>
            <div className="points">
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
              <p>
                <span>
                  <i class="bx bx-right-arrow-circle"></i>
                </span>{' '}
                Lorem Ipsum is simply
              </p>
            </div>
            <div className="pricing">
              <h2>$300</h2>
              <Link className="link" to="/reg">
                <button>Apply Now!</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section6">
        <h3>Step</h3>
        <h1>Steps to Get your Destination</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className="step-cards">
          <div className='mediaimg'>

          
          <div className="step-card">
            <img src={section61} alt="img"></img>
            <h2>Select Consultation Package</h2>
          </div>
          <div className="step-card">
            <img src={section62} alt="img"></img>
            <h2>Fill in the form completely</h2>
          </div>
          <div className="step-card">
            <img src={section63} alt="img"></img>
            <h2>Make Payment</h2>
          </div>
          </div>
          <div className='mediaimg'>

          
          <div className="step-card">
            <img src={section64} alt="img"></img>
            <h2>Start Consulting With Experts</h2>
          </div>
          <div className="step-card">
            <img src={section65} alt="img"></img>
            <h2>We Will Register You To Your University</h2>
          </div>
          </div>
        </div>
      </section>
     

      <section className="section section7">
        <h4 className="section-subheading">Testimonials</h4>
        <h1 className="section-heading">
          Read <span className="underline success">Testimonials</span>from our
          alumni
        </h1>
        <div className="testimonials">
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
        </div>
      </section>
      
    </div>
  );
}
