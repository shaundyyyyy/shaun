import React from 'react';
import './index.css'
document.body.style.backgroundColor = "#ffffcc";
const Home = () => {
  return (
    <div className='index' id ='index'>
     <style>background color: #ffffcc;</style>
        <img src={require('../assets/dequilla.jpg')} alt="self" width = "680" height = "620"  />
        <div style = {{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}className='thing'>
          <h3>hello! </h3>
          <h3>My name is </h3>
          <h1>Shaun Daniel Q, Dequilla</h1>
          <h2>click the links to learn more</h2>
        </div>
        </div>
  )
};

export default Home