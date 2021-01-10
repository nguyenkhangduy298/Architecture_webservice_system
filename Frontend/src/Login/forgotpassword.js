import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './static/style.css'
import fpImg from './img/forgotpassword.jpg';
import ForgotPasswordForm from './forms/forgotpwform.js'


export default class ForgotPassword extends Component {
    render() {
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
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <p className="fp-text">Forgot your password?</p>
                                        <p className="fp-small-text"> We understand, sometimes we are just that forgetful ! Just type in your email and we will send you a request for the new password.</p>
                                        <ForgotPasswordForm/>
                                        
                                        <a href="/login" className="back-to-login-text">Back to login page</a>
                                         
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


