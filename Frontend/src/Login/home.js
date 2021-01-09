import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.setItem('userId', null);
        this.props.history.push('/login');
        
    }
    
    render() {
        return (
            <div>
                <h1> You are in the homepage </h1>
                <h2> Welcome, user id: {localStorage.getItem('userId')} </h2>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}




