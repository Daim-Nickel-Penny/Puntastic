import React from 'react';
import '../Footer.css';
import {Switch, Route, Redirect,Link} from 'react-router-dom';


function Footer(){
    return(
       
       <div className="container">
   
        <div className="row justify-content-center">
         
        <div className="col-12 offset-1 col-md-8">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google btnf" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook btnf " href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin btnf" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter btnf" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google btnf" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon btnf" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>

        </div>

       </div>
    );

}

export default Footer;