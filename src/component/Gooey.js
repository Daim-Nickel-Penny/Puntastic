import React, { Component } from 'react';
import Draggable from 'react-draggable';
import $ from "jquery";
import '../Gooey.css';


class Gooey extends Component{
    
   
    
    render(){

            

        return(
            <section>
            <Draggable>
                <div className="gooey">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
                </Draggable>
            </section>


        );
    }
}

export default Gooey;