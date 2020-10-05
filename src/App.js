import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home';
import AdminPanel from './Component/AdminPanel/AdminPanel';
import Volunteer from './Component/AdminPanel/Volunteer';
import Event from './Component/AdminPanel/Event'
import VolunteerRegister from './Component/VolunteerRegisterForm/VolunteerRegister';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import MyEvents from './Component/MyEvents/MyEvents';
export const ContextElement = createContext()

function App() {

  const [nav, setNav] = useState(true);
  const [userLoginInfo, setUserLoginInfo] = useState({})
  const [formData, setFormData] = useState({});
  return (
    <Router>
      <ContextElement.Provider
        value={[nav, setNav, userLoginInfo, setUserLoginInfo, formData, setFormData]}
      >
        {nav ? <NavBar /> : <AdminPanel />}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <PrivateRoute path="/volunteerRegister">
            <VolunteerRegister />
          </PrivateRoute>
          <PrivateRoute path="/myEvents">
            <MyEvents />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ContextElement.Provider>
    </Router>
  );
}

export default App;
