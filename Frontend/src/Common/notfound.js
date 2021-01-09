import React, { Component } from 'react'
import './static/style.css'


export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.history.push('/login');
        localStorage.setItem('isLoggedIn', false)
    }
    
    render() {
        return (
            <div class="mainbox">
                <div class="err">4</div>
                <i class="far fa-question-circle fa-spin"></i>
                <div class="err2">4</div>
                <div class="msg">Error: Not Found <br/>
                    <div class="smaller-msg">Uh oh... The page you requested is not available. Please try another one!</div>
                </div>
                

            </div>
    
        );
    }
}




