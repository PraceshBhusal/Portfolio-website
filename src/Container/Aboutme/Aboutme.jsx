import React from 'react';
import './Aboutme.css';

const Aboutme = () => {
  // Define aboutmeinfo as an object
  const aboutmeinfo = {
    Age: 22,
    Residence: 'Nepal',
    Address: 'Bharatpur-25, Shukranagar',
    Email: 'bhusallaxman2002@gmail.com',
    Phone: '+9779862448283',
  };

  return (
    <>
      <div className="About-Me-Main">
        <h1
          style={{
            color: 'black',
            width: '18vw',
            marginLeft: '3vw',
            fontWeight: '500',
          }}
        >
          About <span style={{ color: '#04b4e0' }}>Me</span>
        </h1>

        <div className="About-Me-Main-info">
          <div className="About-Me-Abtme">
            <p style={{fontSize:'1rem' }}> 
            A passionate and detail-oriented frontend developer from Chitwan, 
            Nepal, with a solid foundation in HTML, CSS, JavaScript, and React.js. 
            I have hands-on experience designing intuitive user interfaces using Figma
             and working collaboratively through GitHub. With a focus on building responsive 
             and interactive web applications, I've developed various projects, including weather
              apps, to-do lists, and gallery systems. In addition, I have professional experience at 
              CloudFactory as a Data Specialist and as a Frontend Developer intern at Depicter.in, where 
              I contributed to the development of 'Scanifie.' My academic achievements include a full scholarship
               for excellence in the BCA program from Pokhara University.
            </p>
          </div>

        
          <div className="About-Me-Detail">
            <ul>
              {Object.entries(aboutmeinfo).map(([key, value], index) => ( 
                /* Object.entries(aboutmeinfo) converts the object
               into an array of key-value pairs like this */
                <li  style={{
                  marginTop:'4vh'
                }} key={index}>
                  <strong style={{
                    color:" #04b4e0",
                    fontWeight:'500',
                    fontSize:'1.1rem' ,
                  }} >{key}  :</strong> {value}  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
