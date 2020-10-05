import React, { useState, useContext } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from "../../firebase.config"
import "firebase/auth";
import "firebase/firestore";
import { Button } from '@material-ui/core';
import { ContextElement } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [nav, setNav,userLoginInfo, setUserLoginInfo] = useContext(ContextElement);
  setNav(true);
  
const history = useHistory();
const location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
 

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
 
    const googleLogIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
           const {displayName, email} = result.user;
              const signInInfo = {
                  name: displayName,
                  email: email,
                  loginStatus: true,
              }
            setUserLoginInfo(signInInfo);
             history.replace(from);
          })
            .catch(function (error) {
                console.log( error.message) 
          });
    }

    const signOut = () => {
        firebase
          .auth()
          .signOut()
          .then(function () {
              const signOutInfo = {
                name: "",
                email: "",
                loginStatus: false,
              }
              setUserLoginInfo(signOutInfo)
          })
          .catch(function (error) {
            // An error happened.
          });
    }

    return (
      <div className="loginForm">
        <div className="form">
          <h2>Log in</h2>
          {userLoginInfo.loginStatus ? <Button variant="contained" color="primary" onClick={signOut}>
            Log Out
          </Button>
            : <Button variant="contained" color="primary" onClick={googleLogIn}>
            Log in with Google
          </Button>}
        </div>
      </div>
    );
};

export default Login;