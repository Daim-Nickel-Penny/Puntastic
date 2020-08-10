import React, {Component} from 'react';
import Header from './HeaderComponent';
import JokeCard from './JokeCard';
import Footer from './Footer';
import Emotion from './Emotion';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  
    render() {
   
    const HomePage = () => {
        return(
           <JokeCard/>
        );
      }
   



        return (
            <div >
                <Header/>
           
            <Switch>
                <Route path='/home' component={HomePage}/>
                <Route path='/emotion' component={Emotion}/>
                <Redirect to='/home'/>

            </Switch>
            <Footer/>
            </div>
        );
    }
}

export default Main;
