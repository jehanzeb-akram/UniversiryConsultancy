import vector from "../../assets/Homepage/Contact/Group.png";
import Group from "../../assets/About/group.png";
import tick from "../../assets/About/tick.png";
import go from "../../assets/About/go.png";
import globe from "../../assets/About/globe.png";
import elearning from "../../assets/About/elearning.png";
import student from "../../assets/About/student.png";
import support from "../../assets/About/support.png";
import img1 from "../../assets/About/img.png";
import "./About.css";
import Testimonial from "../../components/Testimonial/Testimonial";
import person1 from "../../assets/About/person1.png";
import person3 from "../../assets/About/person3.png";
import person5 from "../../assets/About/person5.png"
export default function About() {
  return (
    <div>
      <div className="contact">
        <div className="us">
          <img src={vector}></img>
          <h1>
            <spna className="underlined">
              <span className="under">About Us</span>
            </spna>
          </h1>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <div>
        <div className="about">
          <div className="about-left">
            <img src={Group} alt="GroupPic"></img>
          </div>
          <div className="about-right">
            <h4>About Us</h4>
            <h2>Lorem Ipsum is Simple Dummy</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br>
              <br></br>It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>
            <div className="logout-button ">
              <button>
                Apply Online <img src={go} alt=""></img>
              </button>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="mobileinfo">
          <div className="data-info">
            <div className="info-img">
              <img src={student} alt=""></img>
            </div>
            <div className="datas">
              <h2>1000+</h2>
              <p>More Then Students</p>
            </div>
          </div>
          <div className="data-info">
            <div>
              
            </div>
            <div className="info-img">
              <img src={support} alt=""></img>
            </div>
            <div className="datas">
              <h2>100</h2>
              <p>Total Consultants</p>
            </div>
          </div>
          </div>
          <div className="mobileinfo">
          <div className="data-info">
            <div className="info-img">
              <img src={elearning} alt=""></img>
            </div>
            <div className="datas">
              <h2>100</h2>
              <p>Total Courses</p>
            </div>
          </div>
          <div className="data-info">
            <div className="info-img">
              <img src={globe} alt=""></img>
            </div>
            <div className="datas">
              <h2>100</h2>
              <p>Countries</p>
            </div>
          </div>
          </div>
          
        </div>

        <div className="chooseus">
          <div className="left-choose">
            <img src={img1} alt=""></img>
          </div>
          <div className="right-choose">
            <h4>About Us</h4>
            <h2>Why Choose Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <div className="tick">
              <div>
                <img src={tick} alt="tick" />
              </div>

              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="tick">
              <div>
                <img src={tick} alt="tick" />
              </div>

              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="tick">
              <div>
                <img src={tick} alt="tick" />
              </div>

              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="tick">
              <div>
                <img src={tick} alt="tick" />
              </div>

              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>

     
        <section className="section section4 greatteam">
        <h3>About Us</h3>
        <h1>
          <span className="underline success">Great Team</span>Behind This
          Company
        </h1>
        <div className="teams">

        
       <div className="team">
       <p>Your Name</p>
        <img src={person1} alt="person1" />
        
       </div>
       <div className="team">
        <img src={person1} alt="person1" />
       </div>
       <div className="team">
        <img src={person3} alt="person1" />
       </div>
       <div className="team">
        <img src={person5} alt="person1" />
       </div>
       <div className="team">
        <img src={person5} alt="person1" />
       </div>
       <br></br>
       </div>
       
      </section>
        <section className="section section7" style={{marginLeft:"110px"}} > 
        <h4 className="section-subheading">Testimonials</h4>
        <h1 className="section-heading">
          Read <span className="underline success">Testimonials</span>from our
          alumni
        </h1>
        <div className="testimonials">
          <Testimonial ></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
          <Testimonial></Testimonial>
        </div>
      </section>
     
      </div>
    </div>
  );
}
