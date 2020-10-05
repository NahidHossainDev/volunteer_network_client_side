import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Button } from "@material-ui/core";
import logo from '../images/logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { ContextElement } from '../../App';

const NavBar = () => {
  const [nav, setNav, userLoginInfo, setUserLoginInfo] = useContext(ContextElement);
  
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
     setNavBar(true)
    } else {
      setNavBar(false)
   }
  }
  window.addEventListener("scroll", changeBackground);


    const style = {
      appBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "20px 0",
      },
      appBar2: {
        backgroundColor: "#f0f6f8",
        padding: "20px 0",
      },
    };
    return (
      <div>
        <AppBar
          style={navBar ? style.appBar2 : style.appBar}
          className="container "
        >
          <Toolbar>
            <Container maxWidth="lg">
              <Link to="/home">
                <img src={logo} alt="" className="app-logo" />
              </Link>
              <nav className="navBar">
                <Link to="/home">Home</Link>
                <Link to="/donation">Donation</Link>
                <Link to="/myEvents">My Events</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/login">
                  {userLoginInfo.loginStatus ? (
                    userLoginInfo.name
                  ) : (
                    <Button variant="contained" color="primary" className="navBtn">
                      Register
                    </Button>
                  )}
                </Link>
                <Link to="/volunteer">
                  <Button variant="contained" className="navBtn">
                    Admin
                  </Button>
                </Link>
              </nav>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
    );
};

export default NavBar;