import React, { useState, useEffect, Component } from 'react'
import './static/style.css'
import signinImg from './img/signin.jpg'
import logo from './img/logo.svg'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        this.signInBtn = React.createRef();
    }

   
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
                                            <img src={logo} alt="logo" className="logo"></img>
                                        </div>
                                        <p className="login-card-description">Sign into your account</p>
            
                                        <form action="">
                                            <div className="form-group">
                                                <label for="email" className="sr-only">Email</label>
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Email address" ref={this.emailInput}></input>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label for="password" className="sr-only">Password</label>
                                                <input type="password" name="password" id="password" className="form-control" placeholder="Password"></input>
                                            </div>
                                            <input name="login" id="login" className="btn btn-block login-btn mb-4 hvr-grow" type="button" value="Login" ref={this.signInBtn}></input>
                                        </form>
                                        <a href="#" className="forgot-password-link">Forgot password?</a>
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
                                        <p className="login-card-footer-text">Don't have an account?&nbsp; <a href="#" className="register-text">Register here</a></p> 
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


