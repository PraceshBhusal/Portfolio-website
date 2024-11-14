import React, { useState } from 'react';
import './Resume.css';



const Resume = () => {
  // Define Bachelor as an array of education details
  const Bachelor = [
    {
      College: 'Oxford College Of Engineering & Management Affiliate by Pokhara University (PU)',
        Faculty: 'Bachelor Of Compute Application (BCA)',
      Year: '2019-2024',
      Address:'Gaindakot , Nepal',
      Description:'Awarded full academic scholarship for BCA program'
    },
    {
      College: 'Nepal Mega College',
      Faculty: '+2, NEB,Management',
    Year: '2019-2024',
    Address:'Kathmandu , Nepal',
      Description:'Amazing jounery '
    }
    
  ];


  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 80 },
    { name: 'Figma', level: 70 },
    { name: 'React.js', level: 70 },
    { name: 'JavaScript', level: 65 },
    { name: 'Redux', level: 70 },

  ];

  const [skillLevels, setSkillLevels] = useState(skills);


  const handleSkillChange = (index, newLevel) => {
    const updatedSkills = [...skillLevels];
    updatedSkills[index].level = newLevel;
/*     setSkillLevels(updatedSkills); */

  };


  return (
    <>
      <div className="resume-Main">
      
      <h1
          style={{
            color: 'black',
            width: '18vw',
            marginLeft: '3vw',
            fontWeight: '500',
          }}
        >
          Resu<span style={{ color: '#04b4e0' }}>me</span>
        </h1>

        <div className="RM-EduDes">
          <p style={{marginLeft:'3vw',fontSize:'2rem', fontWeight:'600',marginTop:"-3vh",marginLeft:'4vw'}} > Education</p>
          <ul style={{
             marginTop:'-2vh',
            width:'48vw',marginLeft:'4vw'
          }}>
            {Bachelor.map((item, index) => (
              <li   style={{ marginTop:'4vh', 
              }} key={index}>
                
                <strong className='Strong-in-Resume'>College:</strong> {item.College}  <br />
              <strong className='Strong-in-Resume' >Faculty:</strong> {item.Faculty} <br />
              <strong className='Strong-in-Resume'>Address:</strong> {item.Address} <br />
                <strong className='Strong-in-Resume'>Year:</strong> {item.Year} <br />
                <li style={
                  {
                    marginLeft:'5vw'
                  }
                } >{item.Description}</li> 
              </li>

             
            ))}
          </ul>
          <div className="skills-in-resume">
                <h5 style={{
                  fontSize:'2rem',
                  marginLeft:'6vw',
                  fontWeight:'600',
                  marginTop:'0vh'
                }}>Skills</h5>
                
                </div>

                <div className="skills-section">
          {skillLevels.map((skill, index) => (
            <div key={index} className="skill-item">
              <label className="skill-label">
                {skill.name}: {skill.level}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={skill.level}
                className="slider"
                onChange={(e) => handleSkillChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>


        </div>
      </div>
    </>
  );
};

export default Resume;
