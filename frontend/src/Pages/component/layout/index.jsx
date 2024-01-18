import React from 'react'
import Sidebar from '../sidebar'
import style from './style.module.css'
import Footer from '../footer'

function Layout ({children, color}) {
  return (
    <div className={`${style.layout} walahhh`} style={{background:`linear-gradient(to right, rgba(0,0,0,1) 10%, ${color} 100%)`}}>
      <Sidebar/>
      <div className={style.layoutbody}>
        {children}
        <Footer/> 
      </div>
    </div>
  )
}

export default Layout