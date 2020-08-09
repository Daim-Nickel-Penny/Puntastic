import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

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
    return (
      <div className="JokeCard">
       <h3>Hello</h3>

     

        <div className="row justify-content-center">
          <div className=".col-12 ">
              <Card>
                <CardTitle>Joke</CardTitle>
                <CardText className=".col-12 .col-10 mt-4">  {this.state.jokes} </CardText>
                <Button className=".col-6 .col-sm-2">Go somewhere</Button>
            </Card>
          </div>
        </div>

      </div>
    );
  }
  }
  
  export default JokeCard;
  