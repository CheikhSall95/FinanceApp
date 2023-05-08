import '../App.css';
import Navibar from '../components/Navibar';
import React, { useRef } from "react";


function Home() {
    return (
        <div>
       
     <div className='firstContainer'>
      <div className='titles'>
        <span className='title'>Manage Your Money Wisely</span>
        <span className='LittleTitle'> 
        Welcome to our budget management application! With our user-friendly interface,<br /> you can easily keep track of your finances and make informed decisions about your spending. </span>
      </div>
      <div className='mainImageCont'> <img className='mainImage' src={require('../assets/money.png')} />
      </div>
      </div>
      <div className= 'secondContainer'>
        <p className= 'secondText'>Our app allows you to set up a budget for various categories such as groceries, entertainment, rent, and more. <br />You can customize your budget based on your income and expenses,
           and our app will help you stay on track by <br />sending notifications when you're getting close to your budget limit.</p>
      </div>
      <div className= 'thirdContainer'>
        <div className='titles'>
          <span className='title'>Visualize your data</span>
          <span className='LittleTitle'> 
          We also provide visual representations of your spending habits, allowing you to easily<br /> see where your money is going and make adjustments as necessary. </span>
        </div>
        <div className='mainImageCont'> <img className='mainImage' src={require('../assets/graphique.png')} />
        </div>
      </div>
      <div className='fourthContainer'>
        <div className='signContainer'>
          <span className='title'>Sign Up Now!</span>
         <button className='signUp'>Sign Up</button>
        </div>
      </div>
   
        </div>
    )
  }
export default Home;