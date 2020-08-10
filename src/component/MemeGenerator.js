import React from "react";
import Input from './input';
import '../MemeGenerator.css';
import { Button, ButtonToggle } from "reactstrap";

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemesImg: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.chooseRandom = this.chooseRandom.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemesImg: memes
                })
            })
            
        }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target)
        console.log(this.state.allMemesImg)
    }

    chooseRandom(){
        let length = this.state.allMemesImg.length
        let arrayIndex = this.getRandomInt(length - 1)
        console.log("array length", length)
        console.log("Index", arrayIndex)
        this.setState({
            randomImage : this.state.allMemesImg[arrayIndex].url
        })
    }

    render(){
        return(
            <div>
                <div className="meme-form">
                    <input className="col-4 col-md-5"
                        name="topText"
                        placeholder= "Top text"
                        value={this.state.topText}
                        onChange= {this.handleChange}
                    />
                    <input className="col-4 col-md-5"
                        name="bottomText"
                        placeholder= "Bottom text"
                        value={this.state.bottomText}
                        onChange= {this.handleChange}
                    />
                    <ButtonToggle className="col-2 col-md-1 btnsub" onClick={this.chooseRandom} >New</ButtonToggle>
                </div>
                <div className="meme">
                    <img src={this.state.randomImage} fluid  alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}

export default MemeGenerator