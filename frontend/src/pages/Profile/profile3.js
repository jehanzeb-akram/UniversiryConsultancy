import raw from '../../assets/Profile/raw.png'
import logout from '../../assets/Profile/logout.png'
import profilephoto from'../../assets/Profile/profilephoto.png';
import edit from '../../assets/Profile/edit.png'
import usa from '../../assets/Profile/usa.png'
import germany from '../../assets/Profile/Flag2.png'
import england from '../../assets/Profile/england.png'
import canada from '../../assets/Profile/canada.png'
import japan from '../../assets/Profile/japan.png'
import invoice from'../../assets/Profile/invoice.png';
import info from '../../assets/Profile/info.png';
import upload from  '../../assets/Profile/upload.png';
import notyet from '../../assets/Profile/notyet.png'
import './profile.css'
import React, { useState } from "react";
export default function Profile3() {

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
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  }



 
    return(
        <div className='profilemain'>
            <div className="pic-div">
                <div className='profilepic'>
                  <img  src={profilephoto} alt=''></img>
                  <h3>Shahbaz Ahmed</h3>
                     <div className='namediv'>
                     
                      <p>ID: 12345678</p>
                    </div> 
                </div>
            <div className='logout-button'>
                 <button>
                Logout <img src={logout} alt=''></img>
                </button>
            </div>
            </div>

            <div>
                <div className='dataentry'>
                    <div className='twobuttons'>
                           <button className='commonbutton profilebutton'  >My Profile</button>
                           <button className='commonbutton formschedule'>My Form & Scehdule</button>
                    </div>
                    <div className='personaldata data1'>
                        <div className='inputs-right' style={{marginLeft:"20px"}}>
                        <div  style={{display:"flex", justifyContent:"space-between"}}>
                             <h2>Your Data Form</h2>
                                 <div className='edit'>
                                     <p>Edit</p>
                                     
                                     <button onClick={handleEditClick}><img src={edit} alt=''></img></button>
                                     
                                     
                                     
                                 </div>
                        
                        </div>
                        <div className='school'>
                        <button >School</button>
                        <button >University</button>
                        </div>
                        
                        
                        <br></br>
                          <div className='inputsdata'>
                            <div className='inputone'>  
                            <p>Name</p>
                             <input   disabled={isEditable ? false : true}   type="text" placeholder='Budi' />
                            </div>
                            <div className='inputone'>
                            <p>Email</p>
                             <input disabled={isEditable ? false : true} type="email" placeholder='budidoremi@gmail.com' />
                            </div>
                            
                          </div>
                          <div className='inputsdata'>
                            <div className='inputone'>
                                 <p>Date of Birth</p>
                                 <input  disabled={isEditable ? false : true} type="date" placeholder='15-03-2000'></input>
                            </div>
                              <div className='inputone'>
                                 <p>Nationality</p>
                                 <input disabled={isEditable ? false : true} type='text' placeholder='USA'/>
                              </div>
                             
                             </div>
                             <p>Gender</p>
                             <div className='checkboxes'> 
                             
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
                                   
                                 <div>
                                   <p>Your desired School</p>
                                     <input disabled={isEditable ? false : true}  type="text" placeholder="Type a tag and press Enter"/>
  
                                 </div>
                                 <div>
                                     <p for="skill">English Skill</p>
                                     <select disabled={isEditable ? false : true} className='selectskill' id="skill" name="skill">
                                     <option value="">--Please select your English skill--</option>
                                     <option value="Beginner">Beginner</option>
                                     <option value="Intermediate">Intermediate</option>
                                     <option value="Fluent">Fluent</option>
                                     </select>
                                 </div>
                                 <div>
                                    <p>Ordered Consultation Package</p>
                                    <select  disabled={isEditable ? false : true}className='selectskill' id="package" name="package">
                                     <option value="">--Please select your Ordered Consultation Pacakge--</option>
                                     <option value="ConsultationA">Consultation A</option>
                                     <option value="ConsultationB">Consultation B</option>
                                     <option value="ConsultationC">Consultation C</option>
                                     <option value="ConsultationD">Consultation D</option>
                                     <option value="ConsultationE">Consultation E</option>
                                     <option value="ConsultationF">Consultation F</option>
                                     </select>
                                 </div>
                           <div >
                            
                       
                        </div>
                        
                        </div>
                        
                    </div>

                    <div className='password data2'>
                        <div className='inputs-right' style={{marginLeft:"20px"}}>
                             <p>Information</p>
                             <div className='payment'>
                                <div style={{display:"flex"}}>
                                    <div className='invoicepic' style={{margin:"20px"}}>
                                    <img src={invoice} alt=""></img>
                                    </div>
                                    <div className='rightinvoice ' style={{marginTop:"28px"}}>
                                    <h2> Your Order For Counsseling A <br></br> With a Bill of <span className='applytext ' style={{textDecoration:"none"}}>2000$</span></h2>
                                    <p>Please Make Payment To  </p>
                                    <h3>123456 123 (Bank Of America) </h3>
                                     </div>
                                </div>
                                 
                                     <div className='info'>
                                       <img src={info} alt=""></img>
                                       <p>Please make a payment before the specified time ends or the order will be automatically canceled. <strong style={{color:"#FF6666"}}>23:50:30</strong></p>
                                      </div>
                                      
                               </div>
                        </div>
                        <div className='upload'>
                         <img src={upload} alt='upload'></img>
                         <p>Upload Proof of your Payment, <b>Drag and Drop your file or <span className='applytext'>browse </span> </b></p>
                        </div>
                                       <div className='cancel'>
                                           <button>
                                           Cancel Order
                                           </button>
                                       </div>
                                        
                        
                    </div>
                    <div className='password data2 counsel'>
                        <div style={{margin:"20px"}}>
                            <h2>Your Counseling Schedule</h2>
                             <p>Information</p>
                                 <div className='payment schedule' >
                                        <img src={notyet} alt='notyet'></img>
                                        <p>You haven't Registered Your Counseling Schedule Yet, <span className='applytext'>Apply Now!</span></p>
                                 </div>
                         </div>
                    
                    </div>
                     
                </div>
            </div>
        </div>
    )
}