import React from 'react';
import './blog.css';
import img1 from '../../assets/BlogPage/group-men-suits-hold-out-their-hands-unity 1.png';
import img2 from '../../assets/BlogPage/group-men-suits-hold-out-their-hands-unity 2.png';
import calicon from '../../assets/BlogPage/cal-icon.png';
import arrow from '../../assets/BlogPage/arrow.png';

export default function Blog(){
    return(
        <div class='main-container'>
            <section class='first-container'>
                <h1><span class='underlined'>Blogs</span></h1>
            </section>
            <section class='second-container'>
             
            </section>
            <section class='third-container'>
                <div class='card'>
                    <div>
                        <input class='search' type='text' placeholder='Search'></input>
                        <button class='search-button'>Search</button>
                    </div>
                    <div class='category-container'>
                        <h3>Categories</h3>
                        <ul class='category-list'>
                            <li>Category A <div>20</div></li>
                            <li>Category B <div>20</div></li>
                            <li>Category C <div>20</div></li>
                            <li>Category D <div>20</div></li>
                            <li>Category E <div>20</div></li>
                        </ul>
                    </div>
                    <div class='recent-blog'>
                        <h3>Recent Blogs</h3>
                        <div>
                            <img id='img1'src={img1} alt='img1'></img>
                            <div class='recent-items'>
                                <p class='category-name'>Category B</p>                   
                                <h3>Lorem Ipsum is simply dummy text printing</h3>
                                <div>
                                    <img src={calicon} alt='calicon'></img>
                                    <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                                </div> 
                            </div>                     
                        </div>
                        <div>
                            <img id='img1' src={img1} alt='img1'></img>
                            <div class='recent-items'>
                                <p class='category-name'>Category B</p>                   
                                <h3>Lorem Ipsum is simply dummy text printing</h3>
                                <div>
                                    <img src={calicon} alt='calicon'></img>
                                    <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                                </div> 
                            </div>              
                        </div>
                        <div>
                            <img id='img1' src={img1} alt='img1'></img>
                            <div class='recent-items'>
                                <p class='category-name'>Category B</p>                   
                                <h3>Lorem Ipsum is simply dummy text printing</h3>
                                <div>
                                    <img src={calicon} alt='calicon'></img>
                                    <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                                </div> 
                            </div>   
                        </div>
                        <div>
                            <img id='img1' src={img1} alt='img1'></img>
                            <div class='recent-items'>
                                <p class='category-name'>Category B</p>                   
                                <h3>Lorem Ipsum is simply dummy text printing</h3>
                                <div>
                                    <img src={calicon} alt='calicon'></img>
                                    <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>
                <div class='blog-list'>
                    <div class='blog-item'>
                        <p class='blog-category-1'><span>Category A</span></p>
                        <img src={img2}></img>
                        <div class='n1'>
                            <img src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                    <div class='blog-item'>
                        <p class='blog-category-1'>Category A</p>
                        <img src={img2}></img>
                        <div>
                            <img src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                    <div class='blog-item'>
                        <p class='blog-category-1'>Category A</p>
                        <img src={img2}></img>
                        <div>
                            <img src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                    <div class='blog-item'>
                        <p class='blog-category-1'>Category A</p>
                        <img src={img2}></img>
                        <div>
                            <img src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                    <div class='blog-item'>
                        <p class='blog-category-1'>Category A</p>
                        <img src={img2}></img>
                        <div>
                            <img src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                    <div class='blog-item'>
                        <p class='blog-category-1'>Category A</p>
                        <img src={img2}></img>
                        <div>
                            <img src={calicon} alt='calicon'></img>
                            <p>19th Jan 2022 - 12 Noon To 4 Pm</p>
                        </div>
                        <h3>Lorem Ipsum is simply dummy text printing</h3>
                        <div class='read-more'>
                            <p>Read More</p>
                            <img src={arrow}></img>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}