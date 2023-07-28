import React, { useState, useEffect } from 'react';
import '../assets/home.css';
import '../assets/homepage.css';
import AliceCarousel from 'react-alice-carousel';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import DropdownForm from "./form";
import { useSelector } from 'react-redux';

import ProfileCreation from './profilcreation';

function Home() {
  const email = useSelector((state) => state.login.email);
   
    const username = email.substr(0, email.indexOf('@')); 
    const letter = username.substr(0, 1);
    const uppercaseLetter = letter.toUpperCase();
    const name = email.substr(1, email.indexOf('@')-1);

  return (
    <div >
  
    <header>
        <nav>
          <div className="logo">
            <img src="https://res.cloudinary.com/dlc4brfar/image/upload/v1689270759/360_F_135408020_ti4PPD53zwUrZ8KmXXdCgZjoZyAweLMO_dqzwhm.jpg" alt="Logo" />
            </div>
          
          <div className='move'>
          <ul>
            {/* <li><a href='/SideBar'><img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689141902/MATRIMONY_3_fmumzt_pmkyub.png"/></a></li> */}
            <li><a href="/profile">Profile</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/member">MemberShip</a></li>
            <li><a href="/feedback">feedback</a></li>
            <li><a href="/contact">Contact Us</a></li>
            {/* <li className='pic'><a href="/"><img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689145635/396b52e4-545f-41a6-b96d-9c62c6d5ce22_hbjscp.jpg"/></a></li> */}
            {/* <li className="login"><a href="/login">Login</a></li> */}
            {/* <li className="logout"><a href="/logout">Logout</a></li> */}
            {/* <li className="signup"><a href="/signup">Sign Up</a></li> */}
          </ul>
         </div> 
              {/* <div className='sidebar'>
            <Sidebar>
                <img src = "https://res.cloudinary.com/dunzdwo0h/image/upload/v1689141902/MATRIMONY_3_fmumzt_pmkyub.png" alt="logo"/>
                <p>Finding a life partner is a journey filled with hopes, dreams, and endless possibilities. Our matrimony page is dedicated 
                    to helping you discover that special someone who will walk beside you through the beautiful path of life.</p>
                <p>So, take the first step towards your happily ever after and join our matrimony page today. Let us help you embark on a
                     beautiful journey of love, companionship, and togetherness.</p>
                <ul className='about'>
                    <li>
                        <a href=''>
                            <i className = "phone"></i>
                            +91 88254 85854
                        </a>
                    </li>
                    <li>
                        <a href=''>
                            <i className='mail'></i>
                            kavinadityatr@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href = ''>
                            <i className='address'></i>
                            Cross cut road, Coimbatore
                        </a>
                    </li>
                </ul>
            </Sidebar>

          </div> */} 
          
        </nav>
    </header>
    {/* <div className='slider'>
        <AliceCarousel autoplay autoPlayInterval={"3000"}>
        <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689153387/R1_ktywxa.png"classname="slide"/>
        <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689153387/R3_jucxnt.jpg"classname="slide"/>
        <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689153388/R2_yescu2.png"classname="slide"/>
        <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1689153390/R4_dpdwci.png"classname="slide"/>
        </AliceCarousel>
    </div> */}
    <div className='match'>
        <h3></h3>
        <br/>
        <h3>Welcome {uppercaseLetter}{name}</h3>
        <h1>  SOUL  CONNECT
        <br/>
        <b></b> 
        </h1>
    </div>

    <DropdownForm/>

    {/* <div className='find'>
        <form>
            <div className="looking" placeholder='Looking for ??'>
                <select type="text" name="gender" value={this.state.fields.stream}>
                  <option value="Groom" >Groom</option>
                  <option value="Bride">Bride</option>
                </select>
            </div>
            <div className="age" placeholder='Age'>
                <select type="text" name="Age" value={this.state.fields.stream}>
                  <option value="One" >21 - 26</option>
                  <option value="Two">26 - 30</option>
                  <option value="Three">31 - 35</option>
                  <option value="Four">35 - 40</option>
                  <option value="Five">40+</option>
                </select>
            </div>
            <input type="text" placeholder="Location" />
            <Link to='/result'><button type="submit">Submit</button></Link>
        </form>
    </div> */}

<ProfileCreation/>
      <footer>
        <p>&copy; 2023 Matrimony. All rights reserved.</p>
      </footer>
      </div>
    
  );
}

export default Home;