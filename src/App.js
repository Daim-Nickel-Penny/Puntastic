import React, { Component } from 'react';
import JokeCard from './component/JokeCard';
import Footer from './component/Footer';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter} from 'react-router-dom';

import './App.css';


class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
     <JokeCard/>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
