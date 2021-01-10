import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.history.push('/login');
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("userEmail", "");
    }
    
    render() {
        if (localStorage.getItem("isLoggedIn") === "false") {
            return <Redirect to="/login" />
        }

        return (
            <div>
                <h1> You are in the homepage </h1>
                <h2> Welcome, user: {localStorage.getItem("userEmail")}  </h2>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}




