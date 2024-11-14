import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
  <>
  <div className="Contact-Main">
 
    <h1 className='Contact-Main-h1' >Contact</h1>
    
    <form className='Contact-Main-Form' action="">

      <h3 style={{ fontSize:'1.8rem',
        marginLeft:'8vw',
      }} >How Can I <span  style={{
        color:' #04b4e0' 
      }}>Help You ?</span></h3>

      <div className="Contact-Main-FieldGroup" required>
        <input className='Con-input' placeholder='FullName' type="Full Name" />
        <input className='Con-input'placeholder='Email' type="Email" />
        <input className='Con-input' placeholder='Subject' type="Subject" />
     
     
      </div>
      <div className="Con-textarea">
        <textarea  style={{
          width:'14vw',height:'30vh', 
          fontSize:'1.2rem',
          marginLeft:'-16vw',
          border:'2px solid rgb(160,160,160)'
        }} name="" id="" placeholder='Message'></textarea>
      </div>

      <button className='Contact-Send-btn'>Send Message</button>

    </form>
  </div>
  </>
  )
}

export default Contact