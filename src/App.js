import React, { Component } from 'react';
import './App.css';
import JokeCard from './component/JokeCard';
import Footer from './component/Footer';

class App extends Component{
  render(){
  return (
    <div className="App">
     <JokeCard/>
     <Footer/>
    </div>
  );
}
}

export default App;
