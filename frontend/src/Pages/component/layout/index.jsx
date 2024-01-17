import React from 'react'
import Sidebar from '../sidebar'
import style from './style.module.css'

function Layout ({children}) {
  style.layout = {}
  return (
    <div className={style.layout}>
      <Sidebar/>
      <div className={style.layoutbody}>
        {children}
      </div>
    </div>
  )
}

export default Layout