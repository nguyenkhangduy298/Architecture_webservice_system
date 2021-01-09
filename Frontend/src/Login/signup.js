import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './static/style.css'
import signupImg from './img/signup.jpg'
import SignupForm from './forms/signupform.js'

export default class Signup extends Component {
    render() {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            return <Redirect to="/homepage" />
        } 
        return (
            <div>
                <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                    <div className="container">
                        <div className="card login-card">
                            <div className="row no-gutters">
                                
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <p className="login-card-description">Create a new account</p>
                                        <SignupForm/>
                                        <a href="/login" className="back-to-login-text">Back to login page</a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img src={signupImg} alt="login" className="login-card-img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


