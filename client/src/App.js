import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import AboutMe from './Components/AboutMe';

const  App = () =>{

  return (
  <>
  <Navbar/>
    <Switch>
      <Route exact path ='/' component={Home}/>
      <Route exact path ='/AboutMe' component ={AboutMe}/>

    </Switch>
  </>
  );
}

export default App;
