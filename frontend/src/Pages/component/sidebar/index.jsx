import React, { useState } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react'

function Sidebar({color}) {
  const [isHovered, setIsHovered] = useState(false);
  color = 'white'

  

  return (
    <>
      <div className={`${isHovered && `${style.hoveredbg}`} ${style.hoverbg}`} />
      <div 
        className={style.sidebar}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave ={() => setIsHovered(false)}
      >
        <div className={style.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="logo" />
        </div>
        <div className={style.sidebarMenu}>
          <ul>
            <li>
              <Link to="/dashboard" style={{color:color}}>Dashboard</Link>
            </li>
            <li>
              <Link to="/ott" style={{color:color}}>OTT</Link>
            </li>
            <li>
              <Link to="/family" style={{color:color}}>Family</Link>
            </li>
            <li>
              <Link to="/optimize" style={{color:color}}>Optimize</Link>
            </li>
          </ul>
        </div>
        <div className={style.profileBottom}>
          <Link to="/profile"> <CircleUserRound className={style.profileicon} style={{color:color}}/></Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
