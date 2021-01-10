import React, { Component } from 'react'
import './static/style.css'
import signinImg from './img/signin.jpg'
import logo from './img/logo.png'
import LoginForm from './forms/loginform.js'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(localStorage.getItem("isLoggedIn"))
        if (localStorage.getItem("isLoggedIn") === "true") {
            return <Redirect to={{
                pathname: "/homepage",
                state: { email: localStorage.getItem("userEmail")}
            }} />
        } 
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
                                        
                                        <a href="/forgotpassword" className="forgot-password-link">Forgot password?</a>
                                        <p className="or-social-platforms"> Or use social platforms</p>
                                        <button className="btn btn-block mb-4 google-sign-in hvr-grow">
                                            <div className="left">
                                                <img width="20px" alt="Google sign-in" 
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                            </div>
                                            <p className="btn darken-4 white black-text" > Sign-in with Google</p>
                                        </button>
                                        <p className="login-card-footer-text">Don't have an account?&nbsp; <a href="/signup" className="register-text">Register here</a></p>
                                        
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


