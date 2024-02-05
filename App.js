

import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar';
import './Navbar.css';
import myImage from './photos/Foodvilla.jpg';
import  Body  from './Body';
import Footer from './Footer';



const Title=()=>{
   return <img src={myImage} alt="temp" id='title'></img>
  }


  


function AppLayout() {
  return (
    <>
    <div className='header'>
   <a href='/'><Title/></a>  
    <Navbar/>
    </div>
      <Body/>
      <Footer/>

    </>
           
  );
}


ReactDOM.render(<AppLayout/>,document.getElementById('root'));

