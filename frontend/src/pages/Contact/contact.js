import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";
import img1 from "../../assets/Homepage/Contact/Group1.png";
import vector from "../../assets/Homepage/Contact/Group.png";
import location from "../../assets/Homepage/Contact/location.png";
import phone from "../../assets/Homepage/Contact/phone.png";
import mail from "../../assets/Homepage/Contact/mail.png";

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all the required fields.");
    } else {
      console.log("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
      navigate("/thankyou");
    }
  };

  return (
    <div className="uss">
      <div className="contact">
        <div className="us">
          <img src={vector}></img>
          <h1>
            <span className="underlined">
              <span className="under">Contact Us</span>
            </span>
          </h1>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <div className="mainpage">
        <div className="left-div">
          <div>
            {" "}
            <img src={img1} alt=""></img>
          </div>
          <div className="contacts">
            <div className="details">
              {" "}
              <img src={location}></img>
              <p>
                <strong>Address: </strong>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
            <div className="details">
              <img src={phone}></img>
              <p>(01) 0101-0101</p>
            </div>
            <div className="details">
              <img src={mail}></img>
              <p>info@youremail.org</p>
            </div>
          </div>
        </div>

        <div className="right-div">
          <div className="inputhead">
            {" "}
            <h1> Lorem Ipsum is simply dummy text</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
            <br /> been the industry's standard dummy text
          </p>
          <div className="inputs-right">
            <p>
              Name<span className="imp">*</span>
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>
              Email<span className="imp">*</span>
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p>
            Message<span className="imp">*</span>
          </p>
          <div className="largearea">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="contact-button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}