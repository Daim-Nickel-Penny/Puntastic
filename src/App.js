import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import Main from './component/MainComponent';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import './App.css';



class App extends Component{
  render(){

  return (
    <BrowserRouter>
    <div className="App">
      <Main/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
