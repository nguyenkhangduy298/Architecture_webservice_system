import React, { useState, useEffect, Component } from 'react'
import './static/style.css'
import signinImg from './img/signin.png'
import signupImg from './img/signup.png'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.signInBtn = React.createRef();
        this.signUpBtn = React.createRef();
        this.container = React.createRef();
        this.handleSigninClick = this.handleSigninClick.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
    }

    handleSignupClick = () => {
        const container = this.container.current;
        container.classNameList.add("sign-up-mode");
        console.log("Signin clicked");
    }

    handleSigninClick = () => {
        const container = this.container.current;
        container.classNameList.remove("sign-up-mode");
        console.log("Signup clicked");
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
                                            <img src="" alt="logo" className="logo"></img>
                                        </div>
                                        <p className="login-card-description">Sign into your account</p>
                                        <form action="">
                                            <div className="form-group">
                                                <label for="email" className="sr-only">Email</label>
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Email address"></input>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label for="password" className="sr-only">Password</label>
                                                <input type="password" name="password" id="password" className="form-control" placeholder="************"></input>
                                            </div>
                                            <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login"></input>
                                        </form>
                                        <a href="#" className="forgot-password-link">Forgot password?</a>
                                        <p className="login-card-footer-text">Don't have an account? <a href="#" className="text-reset">Register here</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        /* //     <div ref={this.container} classNameName="container">
        //         <div classNameName="forms-container">
        //             <div classNameName= "signin-signup-fp">
        //                 <form action="" classNameName="sign-in-form">
        //                     <h2 classNameName="title">Sign In</h2>
        //                     <div classNameName="input-field">
        //                         <i classNameName="fas fa-user"></i>
        //                         <input type="text" placeholder="Username"></input>
        //                     </div>
        //                     <div classNameName="input-field">
        //                         <i classNameName="fas fa-lock"></i>
        //                         <input type="password" placeholder="Password"></input>
        //                     </div>
        //                     <input type="submit" value="Login" classNameName="btn solid"></input>
        //                     <p classNameName="social-text"> Or Sign in with social platforms</p>
                        

        //                 </form>

        //                 <form action="" classNameName="sign-up-form">
        //                     <h2 classNameName="title">Sign Up</h2>
        //                     <div classNameName="input-field">
        //                         <i classNameName="fas fa-user"></i>
        //                         <input type="text" placeholder="Username"></input>
        //                     </div>
        //                     <div classNameName="input-field">
        //                         <i classNameName="fas fa-envelope"></i>
        //                         <input type="text" placeholder="Email"></input>
        //                     </div>
        //                     <div classNameName="input-field">
        //                         <i classNameName="fas fa-lock"></i>
        //                         <input type="password" placeholder="Password"></input>
        //                     </div>
        //                     <div classNameName="input-field">
        //                         <i classNameName="fas fa-lock"></i>
        //                         <input type="password" placeholder="Re-type Password"></input>
        //                     </div>

        //                     <div classNameName="subject-select">
        //                         <select>
        //                             <option value="None">What is your favorite course?</option>
        //                         </select>
        //                     </div>

        //                     <input type="submit" value="Signup" classNameName="btn solid"></input>
        //                     <p classNameName="social-text"> Or Sign up with social platforms</p>

        //                 </form>
        //             </div>
        //         </div>
                            
        //         <div classNameName="panels-container">
        //             <div classNameName="panel left-panel">
        //                 <div classNameName="content">
        //                     <h3> New here ?</h3>
        //                     <p> Lorem ipsum dolor sit amet consectetur adipiscing elit. Minus impedit quidem quidisemf </p>
        //                     <button classNameName="btn transparent" ref={this.signUpBtn} onClick={this.handleSignupClick}>Sign up</button>
        //                 </div>

        //                 <img src={signinImg} classNameName="image" alt=""></img>
        //             </div>
        //             <div classNameName="panel right-panel">
        //                 <div classNameName="content">
        //                     <h3> One of us ?</h3>
        //                     <p> Lorem ipsum dolor sit amet consectetur adipiscing elit. Minus impedit quidem quidisemf  </p>
        //                     <button classNameName="btn transparent" ref={this.signInBtn} onClick={this.handleSigninClick}>Sign in</button>
        //                 </div>

        //                 <img src={signupImg} classNameName="image" alt=""></img>
        //             </div>
        //         </div>
        //     </div> */

        

        
        );
    }
}

