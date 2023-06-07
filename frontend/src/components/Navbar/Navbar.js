import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import loginimg from '../../assets/Login/loginimg.png';
import close from '../../assets/Login/Close.png';
import email from '../../assets/Login/email.png';
import pass from '../../assets/Login/pass.png';
import user from '../../assets/Login/user.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Navbars() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailS, setEmailS] = useState('');
  const [phone, setPhone] = useState('0321-1234567');
  const [passwordS, setPasswordS] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/user/register', {
        firstName,
        lastName,
        email: emailS,
        phone,
        password: passwordS,
        isAdmin,
      });

      const { success, data, error } = response.data;

      if (success) {
        console.log('User Created!');
        console.log('User data:', data);
        setShowSignup(false);
        setShowLogin(true);
        // Do something with the data (e.g., display a success message)
      } else {
        console.log('Error:', error);
        // Handle the error (e.g., display an error message)
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/user/login', {
        email,
        password,
      });
      const { success, data, token, error } = response.data;

      if (success) {
        console.log('User found!');
        console.log('User data:', data);
        console.log('Token:', token);
        setShowLogin(false);
        // Do something with the data and token (e.g., store them in local storage, update state)
      } else {
        console.log('Error:', error);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleSignup = () => {
    setShowSignup(!showSignup);
  };

  if (showLogin) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  if (showSignup) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <div>
      <Navbar>
        <Container className="nav-container">
          <Navbar.Brand className="logo">Logo</Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link className="nav-link">
              <Link className="link" to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/service">
                Service
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/country">
                Country
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <Link className="link" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
            <Link className="link" to="/reg">
              <Button className="applyOnline">Apply Online</Button>
            </Link>
            <Button className="login" onClick={handleLogin}>
              <Link
                className="link"
                to="/home"
                style={{ textDecoration: 'none' }}
              >
                Login
              </Link>
            </Button>
            <p>Arb | Eng</p>
          </Nav>
        </Container>
      </Navbar>

      {showLogin && (
        <div className="login-div">
          <div className="login-container">
            <div className="leftimg">
              <img src={loginimg}></img>
              <div className="center">Welcome</div>
            </div>
            <div className="lf">
              <form>
                <img
                  className="closetag"
                  src={close}
                  onClick={handleLogin}
                ></img>

                <h1>Login</h1>

                <input
                  className="inpemail"
                  type="text"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="inpemail"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="fp">Forgot Password?</p>
                <button className="lobtn" onSubmit={submitLogin}>
                  Login
                </button>
                <p className="">
                  Don't have an account yet?{' '}
                  <span className="scolor" onClick={handleSignup}>
                    Sign Up
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {showSignup && (
        <div className="login-div">
          <div className="login-container">
            <div className="leftimg">
              <img src={loginimg}></img>
              <div className="center">Welcome</div>
            </div>
            <div className="lf">
              <form>
                <img
                  className="closetag"
                  src={close}
                  onClick={handleSignup}
                ></img>

                <h1>Sign Up</h1>
                <p className="pline">Create an Account</p>
                <input
                  className="inpemailsign"
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="inpemailsign"
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  className="inpemailsign"
                  type="text"
                  placeholder="Email Address"
                  onChange={(e) => setEmailS(e.target.value)}
                />
                <input
                  className="inpemailsign"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPasswordS(e.target.value)}
                />

                <button className="signbtn" onClick={handleRegister}>
                  Create Account
                </button>
                <p className="lline">
                  Already have an account?{' '}
                  <span className="scolor" onClick={handleLogin}>
                    Login
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}