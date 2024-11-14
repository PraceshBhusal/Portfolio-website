import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiGraduationCapLight } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import { GoMail } from "react-icons/go";





const Navigation = () => {
 
  return (
  <>
   <div className='Navigation-Main'>
   
    <div className='NM-Icon' >

      <Link to="/Home" >
      <IoHomeOutline    className='NM-Icon-home'/>
      </Link>

      <Link to='/Aboutme'>
    <CiUser  className='NM-Icon-home' />
  </Link>

  <Link to='/Resume'>
    <PiGraduationCapLight className='NM-Icon-home'/>
    </Link>

    <Link to='/Portfolio'>
    <IoBriefcaseOutline    className='NM-Icon-home'/>
    </Link>

    <Link to='/Blog'>
    < LuBook  className='NM-Icon-home'/>
    </Link>


    <Link to='/Contact'>
    <GoMail  className='NM-Icon-home'/>
    </Link>
        </div> 

   </div>
  </>
  )
}

export default Navigation