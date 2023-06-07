import React from 'react';
import './footer.css';
import twitter from '../../assets/Footer/twitter.png';
import instagram from '../../assets/Footer/insta.png';
import facebook from '../../assets/Footer/fb.png';
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2>Our Contact</h2>
        <p>
          Address: Lorem pipsum is simply sum dummy text of the printing and
          typesetting industry
        </p>
        <p>(01) 0101-0101-1010</p>
        <p>info@gmail.com</p>
        <div className="social">
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <div className='threecontents'> 

      
      <div className="footer-content pages">
        <h2>Pages</h2>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
      <div className="footer-content pages">
        <h2>Service</h2>
        <ul>
          <li>
            <a>Service A</a>
          </li>
          <li>
            <a>Service B</a>
          </li>
          <li>
            <a>Service C</a>
          </li>
          <li>
            <a>Service D</a>
          </li>
          <li>
            <a>Service E</a>
          </li>
        </ul>
      </div>
      <div className="footer-content pages">
        <h2>Country</h2>

        <ul>
          <li>
            <a>Destination</a>
          </li>
          <li>
            <a>Visa Student</a>
          </li>
        </ul>
      </div>
      </div>
      <div className="footer-content">
        <h2>Don't Miss Out!</h2>
        <p>
          Lorem pipsum is simply sum dummy text of the printing and typesetting
          industry
        </p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
