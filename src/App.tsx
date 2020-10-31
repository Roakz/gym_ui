import React, { useEffect, useState } from 'react';
import './App.css';

import Splash from './pages/Splash';
import Muscles from './pages/Muscles';
import Exercises from './pages/Exercises';
import Media from './pages/Media';
import Trainees from './pages/Trainees';
import TrainingPlans from './pages/TrainingPlans';
import Users from './pages/Users';
import Workouts from './pages/Workouts';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

function App() {

  const [isSplash, setIsSplash] = React.useState<Boolean>(true)
  const [adminDrop, setAdminDrop] = React.useState<Boolean>(false)

  useEffect(():void => {
    let realBody = document.getElementById("super-wrapper")
    if(realBody){
      realBody.addEventListener("click", (): void => {
        if(adminDrop === true)
        setAdminDrop(false)
      })
    }
  })

  const toggleDropdown = ():void => {
    setAdminDrop(!adminDrop)

  }

  return (
    <Router>
      <nav>
        <div id="nav-logo">
          <p id="login-heading-nav">Barbell Club</p>
        </div>
        <div id="nav-links">
          <Link to="/muscles">Muscles</Link>
          <Link to="/exercises">Exercises</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/training-plans">Training Plan</Link>
        </div>
        <div id="nav-admin-link">
          <button onClick={toggleDropdown}>Aministration</button>
        {adminDrop &&
          <div id="dropdown-menu">
            <Link to="/trainees">Trainees</Link>
            <Link to="/users">Users</Link>
            <Link to="media">Media</Link>
          </div>
        }
        </div>
      </nav>
      <div id="super-wrapper">
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/muscles" component={Muscles}/>
        <Route exact path="/exercises" component={Exercises}/>
        <Route exact path="/workouts" component={Workouts}/>
        <Route exact path="/training-plans" component={TrainingPlans}/>
        <Route exact path="/trainees" component={Trainees}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/media" component={Media}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
