import React from 'react';
// import './App.css'
import CardExample1 from '../component/Cards/CardExample1';
import style from "./ott.module.css"
import Layout from '../component/layout';


function App() {
    return (
      <Layout color={"rgb(70,10,10)"}>     
        <div className={style.App}>
          <div class= {style.search__container}>
            <input className={style.search__input} type="text" placeholder="Search" /> 
          </div>
          <div class= {style.type}>Movies and Series</div>
          <CardExample1/>
      
        <div class= {style.type}>Music</div>
        <CardExample1/>
        <div class= {style.type}>Anime</div>
        <CardExample1/>
        <div class= {style.type}>Educational</div>
        <CardExample1/>
       </div>
    </Layout>
 
    );
  }

export default App;
