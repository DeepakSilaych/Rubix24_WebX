import React from 'react'
import style from './style.module.css'

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="logo" />
      </div>
      <div className={style.navbarmenu}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar