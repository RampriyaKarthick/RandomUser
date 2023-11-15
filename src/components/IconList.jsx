import React, { useState } from 'react';
import { BiSmile } from "react-icons/bi";
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import "../IconList.css"

function IconList({userData}) {
    const [currentTooltip, setCurrentTooltip] = useState('');
  

    const handleIconHover = (iconName) => {
      setCurrentTooltip(iconName);
    };
  
    const handleIconLeave = () => {
      setCurrentTooltip('');
    };
  
   
  
    const iconColor = userData.gender === 'male' ? 'blue' : 'pink';
   console.log('User Gender:', userData.gender);
  
  
    return (
      <div className="icon-list-container">
        <ul className="icon-list">
  
        <BiSmile
            fontSize="large"
            className="fa-icon"
            onMouseEnter={() => handleIconHover(  <>
          <div>My name is</div>
         <strong><div className="details">{userData.name}</div></strong> 
        </>)}
            onMouseLeave={handleIconLeave}
          />
  
        <FontAwesomeIcon
            icon={faBirthdayCake}
            className="fa-icon"
            fontSize="large"
            onMouseEnter={() => handleIconHover(<>
          <div>My age is</div>
         <strong><div className="details">{userData.age}</div></strong> 
        </>)}
            onMouseLeave={handleIconLeave}
            color="blue"
          />
  
          {userData.gender === 'male' ? (
            <FontAwesomeIcon
              icon={faMars}
              className="fa-icon"
              size="2x"
              color={iconColor}
              onMouseEnter={() => handleIconHover(<>
          <div>I am from</div>
         <strong><div className="details">MARS</div></strong> 
        </>)}
              onMouseLeave={handleIconLeave}
            />
          ) : (
            <FontAwesomeIcon
              icon={faVenus}
              className="fa-icon"
              size="2x"
              color={iconColor}
              onMouseEnter={() => handleIconHover(<>
          <div>I am from</div>
          <strong><div className="details">VENUS</div></strong>
        </>)}
              onMouseLeave={handleIconLeave}
            />
          )}
  
  
         
          <FaEnvelope
            fontSize="large"
            className="fa-icon"
            onMouseEnter={() => handleIconHover(<>
          <div>My email is</div>
          <strong><div className="details">{userData.email}</div></strong>
        </>)}
            onMouseLeave={handleIconLeave}
          />
          <FaPhone
            fontSize="large"
            className="fa-icon"
            onMouseEnter={() => handleIconHover(<>
          <div>My phone number is</div>
         <strong><div className="details">{userData.phone}</div></strong> 
        </>)}
            onMouseLeave={handleIconLeave}
          />
          <FaCalendarAlt
            fontSize="large"
            className="fa-icon"
            onMouseEnter={() => handleIconHover(<>
          <div>My birthday is</div>
          <strong><div className="details">{userData.dob}</div></strong>
        </>)}
            onMouseLeave={handleIconLeave}
          />
          <FaMapMarkerAlt
            fontSize="large"
            className="fa-icon"
            onMouseEnter={() => handleIconHover(<>
          <div>My address is</div>
         <strong><div className="details">{userData.location}</div></strong> 
        </>)}
            onMouseLeave={handleIconLeave}
          />
          <FaLock
            fontSize="large"
            className="fa-icon"
            onMouseEnter={() => handleIconHover(<>
          <div>My password is</div>
          <strong><div className="details">{userData.password}</div></strong>
        </>)}
            onMouseLeave={handleIconLeave}
          />
        </ul>
        {currentTooltip && (
          <div className="tooltip">
            {currentTooltip}
          </div>
        )}
      </div>
    );
  }
  

export default IconList