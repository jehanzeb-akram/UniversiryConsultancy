import React, { useState } from 'react';
import './mobileNav.css';
import { Link } from 'react-router-dom';
import serviceA from '../../assets/MobileNav/serviceA.png';
import serviceB from '../../assets/MobileNav/serviceB.png';
import serviceC from '../../assets/MobileNav/serviceC.png';
import visaforstudy from '../../assets/MobileNav/visaforstudy.png';
import destinationforstudy from '../../assets/MobileNav/destinationforstudy.png';
import loginimg from "../../assets/Login/loginimg.png";
import close from "../../assets/Login/Close.png";
export default function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleSignup = () => {
    setShowSignup(!showSignup);
  };

  if(showLogin) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  if(showSignup) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const handleShowCountry = () => {
    setShowCountry(!showCountry);
  };

  const handleShowService = () => {
    setShowService(!showService);
  };
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="mobileNav">
      <div className="main-bar">
        <h1 className="logo">Logo</h1>
        {showMenu ? (
          <i onClick={handleMenu} class="fa-solid fa-bars fa-rotate-90"></i>
        ) : (
          <i onClick={handleMenu} class="fa-solid fa-bars"></i>
        )}
      </div>
      {showMenu && (
        <div className="mobileNav-menu">
          <div className="menu-linkContainer">
            <Link className="menu-link" to="/">
              Home
            </Link>
          </div>
          <div className="menu-linkContainer">
            <Link className="menu-link" to="/about">
              About Us
            </Link>
          </div>
          <div className="menu-linkContainer">
            <Link className="menu-link" to="/service">
              Service
            </Link>{' '}
            {showService ? (
              <i onClick={handleShowService} class="bx bxs-chevron-down"></i>
            ) : (
              <i onClick={handleShowService} class="bx bx-chevron-up"></i>
            )}
          </div>
          {showService && (
            <div>
              <div className="menu-services">
                <div className="menu-service service-grey">
                  <h3>We have 3 Services</h3>
                  <p>
                    Read in advance about the function of each service that will
                    help you achieve your goals
                  </p>
                  <Link to="/service" className="readMore">
                    <span>Read more</span>
                    <span>
                      <i class="bx bx-right-arrow-circle"></i>
                    </span>
                  </Link>
                </div>
                <div className="menu-service">
                  <img src={serviceA} alt="service"></img>
                  <p className="menu-service-p">#1 Service</p>
                  <h3 className="menu-service-h3">Consulting A</h3>
                  <Link to="/service/details" className="readMore">
                    <span>Read more</span>
                    <span>
                      <i class="bx bx-right-arrow-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="menu-services">
                <div className="menu-service">
                  <img src={serviceB} alt="service"></img>
                  <p className="menu-service-p">#2 Service</p>
                  <h3 className="menu-service-h3">Consulting B</h3>
                  <Link to="/service/details" className="readMore">
                    <span>Read more</span>
                    <span>
                      <i class="bx bx-right-arrow-circle"></i>
                    </span>
                  </Link>
                </div>
                <div className="menu-service">
                  <img src={serviceC} alt="service"></img>
                  <p className="menu-service-p">#3 Service</p>
                  <h3 className="menu-service-h3">Consulting </h3>
                  <Link to="/service/details" className="readMore">
                    <span>Read more</span>
                    <span>
                      <i class="bx bx-right-arrow-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="menu-linkContainer">
            <Link className="menu-link" to="/country">
              Country
            </Link>{' '}
            {showCountry ? (
              <i onClick={handleShowCountry} class="bx bxs-chevron-down"></i>
            ) : (
              <i onClick={handleShowCountry} class="bx bx-chevron-up"></i>
            )}
          </div>
          {showLogin && (
        <div className="login-div">
          <div className="login-container">
            <div className='leftimg'>
              
              <img  src={loginimg}></img>
              <div className='center'>Welcome</div>
             
              
            </div>
            <div className="lf">
              <form>
                <img className='closetag' src={close} onClick={handleLogin}/>

              <h1>Login</h1>
              
              <input className='inpemail' type="text" placeholder="Email Address" />
              <input className='inpemail' type="password" placeholder="Password" />
              <p className='fp'>Forgot Password?</p>
              <button className='lobtn'>Login</button>
              <p className=''>Don't have an account yet? <span  className='scolor' onClick={handleSignup}>Sign Up</span></p>
              </form>

              </div>
          </div>
          
        </div>
      )}

{showSignup && (
        <div className="login-div">
          <div className="login-container">
            <div className='leftimg'>
              
              <img  src={loginimg}></img>
              <div className='center'>Welcome</div>
              
            </div>
            <div className="lf">
              <form>
                <img className='closetag' src={close} onClick={handleSignup}></img>

              <h1>Sign Up</h1>
              <p className='pline'>Create an Account</p>
              <input className='inpemailsign' type="text" placeholder="First Name" />
              <input className='inpemailsign' type="text" placeholder="Last Name" />
              <input className='inpemailsign' type="text" placeholder="Email Address" />
              <input className='inpemailsign' type="password" placeholder="Password" />
              
              <button className='signbtn'>Create Account</button>
              <p className='lline'>Already have an account? <span  className='scolor' onClick={handleLogin}>Login</span></p>
              </form>

              </div>
          </div>
          
        </div>
      )}
    

          {showCountry && (
            <div className="menu-services">
              <div className="menu-service">
                <img src={visaforstudy} alt="country"></img>
                <p className="menu-service-p">About</p>
                <h3 className="menu-service-h3">Visa For Study</h3>
                <Link to="" className="readMore">
                  <span>Read more</span>
                  <span>
                    <i class="bx bx-right-arrow-circle"></i>
                  </span>
                </Link>
              </div>
              <div className="menu-service">
                <img src={destinationforstudy} alt="country"></img>
                <p className="menu-service-p">About</p>
                <h3 className="destination-h3">Destination For Study</h3>
                <Link to="" className="readMore">
                  <span>Read more</span>
                  <span>
                    <i class="bx bx-right-arrow-circle"></i>
                  </span>
                </Link>
              </div>
            </div>
          )}

          <div className="menu-linkContainer">
            <Link className="menu-link" to="/blog">
              Blog
            </Link>
          </div>
          <div className="menu-linkContainer">
            <Link className="menu-link" to="/contact">
              Contact Us
            </Link>
          </div>

          <div className="mobile-navBtn applyOnlineContainer">
            <Link className="btnLink" to='/reg'>
              <button className="mobileBtn applyBtn">Apply Online</button>
            </Link>
          </div>

          <div className="mobile-navBtn loginContainer">
            <Link className="btnLink">
              <button className="mobileBtn loginBtn">Login</button>
            </Link>
          </div>

          <div className="mobileNav-text">
            <p className="mobileNav-text-p">
              <span className="mobileNav-darkBlue">Eng</span> | Arb
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
