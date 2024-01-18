import React, { useState } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react'

function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

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
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/ott">OTT</Link>
            </li>
            <li>
              <Link to="/family">Family</Link>
            </li>
            <li>
              <Link to="/optimize">Optimize</Link>
            </li>
          </ul>
        </div>
        <div className={style.profileBottom}>
          <Link to="/profile"> <CircleUserRound className={style.profileicon}/></Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
