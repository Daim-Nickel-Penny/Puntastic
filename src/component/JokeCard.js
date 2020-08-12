import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Jumbotron, ButtonToggle } from 'reactstrap';
import '../JokeCard.css';
import MemeGenerator from "./MemeGenerator";
import Emotion from './Emotion';
import ReactTooltip from "react-tooltip";
import Typewriter from 'typewriter-effect';
import Bubble from './Bubble';


class JokeCard extends Component{
    constructor(props){
      super(props);
      this.state={
        jokes:""
      }
    
    }

    
  
    async componentDidMount(){
      const url="https://icanhazdadjoke.com/";
      let result=null;
      try{
        result= await axios(url, {
          headers:{
            Accept : "application/json"
          }
        })}
        catch (e){
          console.log(e)
        }
        this.setState({jokes: result.data.joke})
      }
      
    
  
  
    render(){
      function refreshPage(){
        window.location.reload(false);
      }
  
    return (
      <div className="JokeCard">
       
        <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-auto">
                            <Typewriter className="typs"
                                  onInit={(typewriter) => {
                                    typewriter.typeString('Jokes Makes You Laugh')
                                      .callFunction(() => {
                                        console.log('String typed out!');
                                      })
                                      .pauseFor(1400)
                                      .deleteChars(5)
                                      .callFunction(() => {
                                        console.log('All strings were deleted');
                                      }).typeString('Feel Better').pauseFor(1400).deleteChars(11).typeString('Relaxed')
                                      .pauseFor(1400).deleteAll().typeString("Hit The new Joke Button Or Make The meme")
                                      .start();
                                  }}
/>
                                <p > {this.state.jokes}</p>
                                <ButtonToggle className="col-6 col-sm-2 btnref " data-tip data-for="registerTips" onClick={refreshPage} >New Joke</ButtonToggle>
                                <ReactTooltip id="registerTips" place="bottom" effect="float">
                                 Tap for a freshly brewed joke!
                                </ReactTooltip>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
           
                <Bubble/>
                <MemeGenerator/>
                
               <Emotion/>
                
        
                


      </div>
    );
  }
  }
  
  export default JokeCard;
  