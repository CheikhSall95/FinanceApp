import { useState } from 'react';

import { Button,Navbar } from 'react-bootstrap';
import Navibar from './components/Navibar';
import './App.css';
import ReactDOM from 'react-dom/client'
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  useMatch
} from "react-router-dom"
import Home from './pages/Home';
import HowitWorks from './pages/Howitworks';
import AboutUs from './pages/Aboutus';
import LogInPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
const App = () => {

  return (

    <div>
      <Navibar></Navibar>
      <Routes>

        <Route path="/" element={< Home/>} />
        <Route path="/howitworks" element={< HowitWorks/>} />
        <Route path="/AboutUs" element={< AboutUs/>} />
        <Route path="/LogIn" element={< LogInPage/>} />
        <Route path="/Register" element={< RegisterPage/>} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>







     </div>

    
  );
}
export default App;
