import React from "react";
import pic2 from '../../assets/Registrationform/pic2.png'
import Section1 from '../../assets/Registrationform/Section1.png'
import usa from '../../assets/Profile/usa.png'
import germany from '../../assets/Profile/Flag2.png'
import england from '../../assets/Profile/england.png'
import canada from '../../assets/Profile/canada.png'
import japan from '../../assets/Profile/japan.png'
import pic3 from '../../assets/Registrationform/pic3.png'
import { useState } from "react";
import './rf.css';
import { Link } from "react-router-dom";



export default function Rf2() {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [dob, setdob] = useState("")
  const [Nationality , setnationality] = useState("")
  const [lasteducation , setlasteducation] = useState("")
  const [yearofgraduation , setyearofgraduation] = useState("")
  const [fieldofstudy , setfieldofstudy] = useState("")
  const [englishskill, setenglishskill] = useState("")
  const [gender,setgender]= useState("")
  const [desireduniversity , setuniversity] =useState("")
  const [desiredmajor , setmajor] = useState("")
  const [desireddegree , setdegree] = useState("")

  const [consultationpackage , setconsultationpackage ] = useState("")


    const [selected, setSelected] = useState(null);

    function handleCheckboxChange(event) {
      setSelected(event.target.value);
    }
    const [selectedImages, setSelectedImages] = useState([]);

  function toggleSelected(event) {
    const selectedImage = event.target.src;
    if (selectedImages.includes(selectedImage)) {
      setSelectedImages(selectedImages.filter(img => img !== selectedImage));
    } else {
      setSelectedImages([...selectedImages, selectedImage]);
    }
  }
  const [isEditable, setIsEditable] = useState(true);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  }
    
  return (
    <div className="top">
        <h1>Registration Form</h1>
        <div className="page1image">
        <img  src={pic2} alt=''></img>
        </div>

        <div className="page1img">
        <img  src={Section1} alt=''></img>
        </div>

        <div className="formsection">
            <div className="fir">
                <h2><strong>Personal Data Form</strong></h2>
                <p>What State are you planning to apply for ?</p>
            </div>
            <div className="TB">
              <Link className="link" to='/reg'><button >School</button></Link> 
                <button >University</button>
                <hr style={{marginTop:"30px"}}></hr>
             </div>   
            
            

            <div className="inputf">
                <div className="nameinput">
                <p>First Name<span className='imp'>*</span></p>
                <input className="i"   disabled={isEditable ? false : true}   type="text" onChange = {(event) => {setname(event.target.value)}} />
                </div>
                <div className="nameinput">
                <p>Email<span className='imp'>*</span></p>
                <input className="i" disabled={isEditable ? false : true} type="email" onChange = {(event) => {setemail(event.target.value)}} />
                </div>
            </div>

            <div className="inputf">
                <div className="nameinput">
                <p>Date of Birth<span className='imp'>*</span></p>
                <input className="i" type="date" id="dob"  disabled={isEditable ? false : true}  onChange = {(event) => {setdob(event.target.value)}}  />
                </div>
                <div className="emailinput">
                <p>Nationality<span className='imp'>*</span></p>
                <select className="nation" disabled={isEditable ? false : true} onChange = {(event) => {setnationality(event.target.value)}} >
                    <option value="">Select Nationality</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="australia">Australia</option>
                    <option value="india">India</option>
                </select>
                </div>
                      
            </div>

            <div className="inputf">
            <div className="emailinput">
                <p>Last Education<span className='imp'>*</span></p>
                <select className="nation" disabled={isEditable ? false : true} onChange = {(event) => {setlasteducation(event.target.value)}} >
                    <option value="">Select Education</option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
                    <option value="option5">option5</option>
                </select>
                </div>
                <div className="emailinput">
                <p>Year of Graduation<span className='imp'>*</span></p>
                <select className="nation" disabled={isEditable ? false : true} onChange = {(event) => {setyearofgraduation(event.target.value)}} >
                    <option value="">Select Year of Graduation</option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
                    <option value="option5">option5</option>
                </select>
                </div>
                      
            </div>

            <div className="inputf">
            <div className="emailinput">
                <p>Field of Study<span className='imp'>*</span></p>
                <select className="nation" disabled={isEditable ? false : true} onChange = {(event) => {setfieldofstudy(event.target.value)}} >
                    <option value="">Select Field of study</option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
                    <option value="option5">option5</option>
                </select>
                </div>
                <div className="emailinput">
                <p>English Skill<span className='imp'>*</span></p>
                <select className="nation" disabled={isEditable ? false : true} onChange = {(event) => {setenglishskill(event.target.value)}} >
                    <option value="">Select English Skill</option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="option3">option3</option>
                    <option value="option4">option4</option>
                    <option value="option5">option5</option>
                </select>
                </div>
                      
            </div>

           
        <p>Gender</p>
                             <div className='gender'> 
                             
                                    <div style={{display:"flex",gap:"10px"}}>
                                      <input disabled={isEditable ? false : true} type="checkbox" value="option1" checked={selected === "option1"} onChange={handleCheckboxChange} /> 
                                      <p>Male</p>  
                                    </div>  
                                      <div style={{display:"flex" ,gap:"10px"}}>
                                      <input disabled={isEditable ? false : true} type="checkbox" value="option2" checked={selected === "option2"}  onChange={handleCheckboxChange} />
                                      <p> Female </p>
                                      </div>
                                       
                                      
                              </div>
                              <p>Select prefered study destination</p>
                              <div className='countrypics'>
        
                                 <img disabled={isEditable ? false : true} src={usa} alt="Image 1" className={selectedImages.includes("image1.jpg") ? "selected" : ""} onClick={toggleSelected} />
                                 <img disabled={isEditable ? false : true} src={germany} alt="Image 2" className={selectedImages.includes("image2.jpg") ? "selected" : ""} onClick={toggleSelected} />   
                                 <img disabled={isEditable ? false : true} src={england} alt="Image 3" className={selectedImages.includes("image3.jpg") ? "selected" : ""} onClick={toggleSelected} />
                                 <img disabled={isEditable ? false : true} src={japan} alt="Image 4" className={selectedImages.includes("image4.jpg") ? "selected" : ""} onClick={toggleSelected} />
                                 <img disabled={isEditable ? false : true} src={canada} alt="Image 5" className={selectedImages.includes("image5.jpg") ? "selected" : ""} onClick={toggleSelected} />
                              </div>
                              <div className=" desire">
                                   <p>Your desired University</p>
                                     <input disabled={isEditable ? false : true}  type="text" placeholder="Type a tag and press Enter" onChange = {(event) => {setuniversity(event.target.value)}}/>
  
                                 </div>
                                 <div  >
                                     <p for="skill">Your Desired Major</p>
                                     <select  disabled={isEditable ? false : true} className='selectskill' style={{width:"300px"}} id="skill" name="skill" onChange = {(event) => {setmajor(event.target.value)}}>
                                     <option value=""></option>
                                     <option value="">option1</option>
                                     <option value="">option2</option>
                                     <option value="">option3</option>
                                     </select>
                                 </div>
                                 <div  >
                                     <p for="skill">Desired Degree</p>
                                     <select  disabled={isEditable ? false : true} className='selectskill' style={{width:"300px"}} id="skill" name="skill" onChange = {(event) => {setdegree(event.target.value)}}>
                                     <option value=""></option>
                                     <option value="">option1</option>
                                     <option value="">option2</option>
                                     <option value="">option3</option>
                                     </select>
                                 </div>
                                 <div>
                                    <p>Ordered Consultation Package</p>
                                    <select  disabled={isEditable ? false : true} className='selectskill' style={{width:"300px"}} id="package" name="package" onChange = {(event) => {setconsultationpackage(event.target.value)}}>
                                     <option value="">--Please select your Ordered Consultation Pacakge--</option>
                                     <option value="ConsultationA">Consultation A</option>
                                     <option value="ConsultationB">Consultation B</option>
                                     <option value="ConsultationC">Consultation C</option>
                                     <option value="ConsultationD">Consultation D</option>
                                     <option value="ConsultationE">Consultation E</option>
                                     <option value="ConsultationF">Consultation F</option>
                                     </select>
                                 </div>

                                  <div className="savebt">
                                   
                                  <button>Save & Next</button>
                                  </div>
                                  

                                  

        </div>
        
      </div>
);}