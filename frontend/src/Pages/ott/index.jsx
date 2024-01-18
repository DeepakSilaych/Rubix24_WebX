import React, { useEffect } from 'react';
// import './App.css'
import CardExample1 from '../component/Cards/CardExample1';
import style from "./ott.module.css"
import Layout from '../component/layout';
import { Link } from 'react-router-dom';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/home/ott_list/')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  , [])

  return (
    <Layout color={"rgb(70,10,10)"}>     
      <div className={style.App}>
        <div class= {style.search__container}>
          <input className={style.search__input} type="text" placeholder="Search" /> 
        </div>
        <div class= {style.type}>Movies and Series</div>
        <CardExample1/>
    
      <div class= {style.type}>Music</div>
      <Link to='/ott/netflix'><CardExample1/></Link>
      <div class= {style.type}>Anime</div>
      <CardExample1/>
      <div class= {style.type}>Educational</div>
      <CardExample1/>
      </div>
  </Layout>
 
    );
  }

export default App;
