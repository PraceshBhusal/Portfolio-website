import React from 'react'
import User from '../assets/Media/Profile.jpg'
import '../Profile/Profile.css';
import Link from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";






const Profile = () => {
    return (
      <>
        <div className="Profile-PP">
          < img src={User} className='User-PP'  />
          
          <div className='User-ID'>
            <h1 className='User-Name'>Pracesh Bhusal</h1>
            <h3 className='User-title'>Web Designer</h3>
          </div>
          
          <div className='User-Social-Media'>
          <FaFacebookF className='social-icon'  />
          <FaLinkedinIn className='social-icon' />
          <FaYoutube className='social-icon' />

           </div>
          
          <button className='User-CVbtn'>Download CV</button>

      
          
          <h6 className='User-Copyright'>© 2020 All rights reserved.</h6>
        </div>
      </>
    );
  }

  export default Profile;