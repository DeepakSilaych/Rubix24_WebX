import React from 'react'
import Navbar from '../component/navbar'
import Sidebar from '../component/sidebar'
import style from './style.module.css'
import Layout from '../component/layout'

function Dashboard() {
  return (
    <Layout>
      <div className={style.dashboard}>
        <div className={style.dashboardbody}>
          <div className={style.dashboardbodycontent}>
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard