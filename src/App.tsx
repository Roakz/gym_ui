import React, { useState } from 'react';
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
          <Link to="">Aministration</Link>
        </div>
      </nav>
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
    </Router>
  );
}

export default App;
