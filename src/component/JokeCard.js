import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Jumbotron } from 'reactstrap';

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
                                <h1>JOKE</h1>
                                <p> {this.state.jokes}</p>
                                <Button className=".col-6 .col-sm-2 " onClick={refreshPage} >New Joke</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>


      </div>
    );
  }
  }
  
  export default JokeCard;
  