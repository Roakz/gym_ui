import React from 'react';
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
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
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
