import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom';
import './static/style.css'
import signinImg from './img/signin.jpg'
import logo from './img/logo.png'
import LoginForm from './forms/loginform.js'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                    <div className="container">
                        <div className="card login-card">
                            <div className="row no-gutters">
                                <div className="col-md-5">
                                    <img src={signinImg} alt="login" className="login-card-img"></img>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <div className="brand-wrapper">
                                            <img style={{display: 'inline-block'}} src={logo} alt="logo" className="logo"></img>
                                            <p>RMITify</p>
                                        </div>
                                        <p className="login-card-description">Sign into your account</p>
                                        <LoginForm/>
                                        
                                        <Link to='/forgotpassword'><a href="#" className="forgot-password-link">Forgot password?</a></Link>
                                        <p className="or-social-platforms"> Or use social platforms</p>
                                        <button className="btn btn-block mb-4 google-sign-in hvr-grow">
                                            <p className="btn darken-4 white black-text" href="#">
                                                <div className="left">
                                                    <img width="20px" alt="Google sign-in" 
                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                                </div>
                                                <p>Sign-in with Google</p>
                                            </p>
                                        </button>
                                        <p className="login-card-footer-text">Don't have an account?&nbsp; <Link to="/signup"><a href="#" className="register-text">Register here</a></Link></p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


