import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom';
import './static/style.css'
import signupImg from './img/signup.jpg'
import SignupForm from './forms/signupform.js'

export default class Signup extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // state = {
    //     selectedOption: null,
    // };

    // handleSelectChange = selectedOption => {
    //     this.setState( {selectedOption },
    //         () => console.log("Option selected:", this.state.selectedOption));
    // };

    render() {
        // const { selectedOption } = this.state;
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
                                        <Link to="/"><a href="#" className="back-to-login-text">Back to login page</a></Link>
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


