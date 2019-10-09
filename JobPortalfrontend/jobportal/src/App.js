import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register.js'
import Company_reg from './components/Company_reg'
import Stud_homepage from './components/Stud_homepage'
import Stud_reg from './components/Stud_reg'
import Login from './components/Login'
import Profile from './components/Profile'
import Home from './components/Home'
import Nav from './components/Navigation'
import {BrowserRouter as Router} from 'react-router-dom'
const Route = require("react-router-dom").Route;
function App() {
  return (
    <div className="App">
        
    <Router>
      <Route path = '/Login' exact strict component = {Login} />
      
      <Route path = '/Stud_homepage' exact strict component = {Stud_homepage} />
      
      <Route path = '/Company' exact strict component = {Company_reg} />
      <Route path = '/register' exact strict component = {Register} />
      <Route path = '/studreg' exact strict component = {Stud_reg} />
      <Route path = '/Profile' exact strict component = {Profile} />
      <Route path = '/' exact strict component = {Home} />



    </Router>
    
  </div>
  );
}

export default App;
