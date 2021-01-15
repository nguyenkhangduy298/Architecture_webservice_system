import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        //this.email = this.props.location.state.email !== undefined ? this.props.location.state.email : localStorage.getItem('userEmail');
        // if (typeof(this.props.location.state.email) !== 'undefined') {
        //     this.email = this.props.location.state.email;
        // }

    }

    handleLogout() {
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("userEmail", "");
        this.props.history.push('/login');
    }
    
    render() {
        if (localStorage.getItem("isLoggedIn") === "false") {
            return <Redirect to="/login" />
        }

        return (
            <div>
                <h1> You are in the homepage </h1>
                <h2> Welcome, user: {this.props.location.state.email} </h2>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
}




