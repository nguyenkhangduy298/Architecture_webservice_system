import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom';
import './static/style.css'
import fpImg from './img/forgotpassword.jpg';
import questionImg from './img/question.jpg';


export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                    <div className="container">
                        <div className="card login-card">
                            <div className="row no-gutters">
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <p className="fp-text">Forgot your password?</p>
                                        <p className="fp-small-text"> We understand, sometimes we are just that forgetful! Just type in your email and we will send you a request for the new password.</p>
                                        <form action="">
                                            <div className="form-group">
                                                <label for="email" className="sr-only">Email</label>
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Your email address"></input>
                                            </div>
                                            <input name="checkmail" id="checkmail" className="btn btn-block login-btn mb-4 hvr-grow" type="button" value="Send"></input>
                                        </form>
                                        <Link to="/"><a href="#" className="back-to-login-text">Back to login page</a></Link>
                                         
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={fpImg} alt="login" className="login-card-img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


