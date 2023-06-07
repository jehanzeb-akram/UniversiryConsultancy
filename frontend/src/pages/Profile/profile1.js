import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import raw from '../../assets/Profile/raw.png';
import logout from '../../assets/Profile/logout.png';
import './profile.css';

export default function Profile1() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Fetch user data using axios
    axios.get('/api/user') // Replace '/api/user' with the actual API endpoint
      .then(response => {
        const userData = response.data;
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setEmail(userData.email);
        setPhoneNumber(userData.phoneNumber);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSave = () => {
    // Handle save action using axios
    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber
    };

    axios.put('/api/user', userData) // Replace '/api/user' with the actual API endpoint
      .then(response => {
        console.log('User data saved successfully');
      })
      .catch(error => {
        console.error('Error saving user data:', error);
      });
  };

  const handleResetPassword = () => {
    // Handle reset password action using axios
    axios.post('/api/reset-password') // Replace '/api/reset-password' with the actual API endpoint
      .then(response => {
        console.log('Password reset successful');
      })
      .catch(error => {
        console.error('Error resetting password:', error);
      });
  };

  return (
    <div className='profilemain'>
      <div className="pic-div">
        <div className='profilepic'>
          <img src={raw} alt=''></img>
          <h3>Shahbaz Ahmed</h3>
          <div className='namediv'>
            <p>ID: 12345678</p>
          </div>
        </div>
        <div className='logout-button'>
          <button>
            Logout <img src={logout} alt='' />
          </button>
        </div>
      </div>

      <div>
        <div className='dataentry'>
          <div className='twobuttons'>
            <button className='commonbutton profilebutton'>My Profile</button>
            <button className='commonbutton formschedule'>
              <Link to='/profile2'>Form Schedule</Link>
            </button>
          </div>
          <div className='personaldata'>
            <div className='inputs-right' style={{ marginLeft: "20px" }}>
              <h2>Personal Data</h2>
              <br></br>
              <p>First Name</p>
              <input type="text" placeholder='Budi' value={firstName} onChange={e => setFirstName(e.target.value)} />
              <p>Last Name</p>
              <input type='text' placeholder='Doremi' value={lastName} onChange={e => setLastName(e.target.value)} />
              <p>Email</p>
              <input type="email" placeholder='budidoremi@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
              <p>Phone Number</p>
              <input type="text" placeholder='0821 2121 2121' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
              <div>
                <button className='commonbutton' onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>

          <div className='password'>
            <div className='inputs-right' style={{ marginLeft: "20px" }}>
              <h2>Password</h2>
              <p>Password</p>
              <input type='password' placeholder='**********'></input>
              <div>
                <button onClick={handleResetPassword}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
