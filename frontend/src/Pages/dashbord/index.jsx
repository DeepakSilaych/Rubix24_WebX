import React, { useState, useEffect } from 'react';
import Layout from '../component/layout';
import Dashboardcard from './dashboardcard';
import style from './style.module.css';
import BarChart from './chart';
import axios from 'axios';
import { useAuth } from '../../AuthContext'; 

function Dashboard() {
  const { accessToken, refreshToken, login, logout } = useAuth();

  const [showAlla, setShowAlla] = useState(false);
  const [showAllb, setShowAllb] = useState(false);


  const visibleData = showAlla ? data : data.slice(0, 5);
  const visibleDatab = showAllb ? data : data.slice(0, 5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/home/current_subscriptions/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          try {
            const refreshResponse = await axios.post('http://127.0.0.1:8000/api/auth/refresh/', {
              refresh: refreshToken,
            });
            localStorage.setItem('accessToken', refreshResponse.data.access);
            localStorage.setItem('refreshToken', refreshResponse.data.refresh);
          } catch (refreshError) {
            console.log(refreshError);
          }
        }
        console.log(error);
      }
    };
  
    fetchData();
  }, [accessToken, refreshToken]);
  



  return (
    <Layout color={"rgb(16, 57, 18)"}>
      <div className={style.dashboard}>
        <div className={style.dashboard_chart}>
          <BarChart />
        </div>
        <div className={style.dashboard_otts}>
          <h2>Current Subscriptions</h2>
          <button onClick={() => setShowAlla(!showAlla)} className={style.viewbutton}>
            {showAlla ? 'Show Less' : 'View All'}
          </button>
          <div className={style.dashboard_otts_list}>
            {visibleData.map((item, index) => (
              <Dashboardcard  
                key={index}
                title={item.title}
                price={item.price}
                startingDate={item.startingDate}
                endingDate={item.endingDate}
                completion={item.completion}
                daysLeft={item.daysLeft}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className={style.dashboard_otts}>
          <h2>Previous Subscriptions</h2>
          <button onClick={() => setShowAllb(!showAllb)} className={style.viewbutton}>
            {showAllb ? 'Show Less' : 'View All'}
          </button>
          <div className={style.dashboard_otts_list}>
            {visibleDatab.map((item, index) => (
              <Dashboardcard
                key={index}
                title={item.title}
                price={item.price}
                startingDate={item.startingDate}
                endingDate={item.endingDate}
                completion={item.completion}
                daysLeft={item.daysLeft}
                image={item.image}
              />
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;




const data = [
  {
    title: "Netflix",
    price: "49.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "49.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
  {
    title: "Netflix",
    price: "49.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "49.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
  {
    title: "Netflix",
    price: "49.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  },
  {
    title: "Spotify",
    price: "49.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "90%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png"
  },
  {
    title: "Netflix",
    price: "49.000",
    startingDate: "20-10-2020",
    endingDate: "20-11-2020",
    completion: "50%",
    daysLeft: "10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
  }
];