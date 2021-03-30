import React, {useEffect, useState, createContext, useReducer, ReactNode} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
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

interface IProps {
  children: ReactNode;
  // any other props that come into the component
}

const initialState: any = {
  userId: null
};

export const store = createContext(initialState);

const {Provider} = store;

const StateProvider = ({children}: IProps) => {

  const [state, dispatch] = useReducer((state: any, action: any) => {

    const currentState = {...state};

    switch (action.type) {
      case 'SET_USER_ID':
        console.log(action)
        currentState.userId = action.payload
        console.log(currentState)
        return currentState;
    }
  }, initialState);
  return <Provider value={{state, dispatch}}>{children}</Provider>
}

function App() {

  const [isSplash, setIsSplash] = useState<Boolean>(true);
  const [adminDrop, setAdminDrop] = useState<Boolean>(false);

  useEffect(():void => {
    let realBody: Element | null = document.getElementById("super-wrapper")
    if(realBody){
      realBody.addEventListener("click", (): void => {
        if(adminDrop === true)
        setAdminDrop(false)
      })
    };

    let navLinksDiv: Element | null = document.getElementById("nav-links")
    let navLinks: HTMLCollectionOf<Element> | undefined = navLinksDiv?.getElementsByClassName("navlink")

    if (navLinks) {
      console.log(navLinks)
      for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(this: Element):void {
          let current: HTMLCollectionOf<Element> = document.getElementsByClassName("nav-link-activated")
          if (current.length > 0) {
            current[0].className = current[0].className.replace("nav-link-activated", "")
          }
          this.className += " nav-link-activated"
          console.log(this.className)
        });
      }
    }
  });

  const toggleDropdown = ():void => {
    setAdminDrop(!adminDrop)
  }

  return (
    <StateProvider>
      <Router>
        <nav>
          <div id="nav-logo">
            <Link to="/"><p id="login-heading-nav">Barbell Club</p></Link>
          </div>
          <div id="nav-links">
            <Link className="navlink" to="/muscles">Muscles</Link>
            <Link className="navlink" to="/exercises">Exercises</Link>
            <Link className="navlink" to="/workouts">Workouts</Link>
            <Link className="navlink" to="/training-plans">Training Plan</Link>
          </div>
          <div id="nav-admin-link">
            <button onClick={toggleDropdown}>Administration</button>
          {adminDrop &&
            <div id="dropdown-menu">
              <Link to="/">Dashboard</Link>
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
    </StateProvider>
  );
}

export default App;
