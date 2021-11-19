/*
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Greeting name="James"/>
    </div>
  );
}

export default App;
*/ 
//Old Code

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import Amplify from "aws-amplify";
//import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <Authenticator usernameAttributes='email'/>
      </header>
    </div>
    
  );
}

export default withAuthenticator(App);