import React, { useState, useEffect, Component } from 'react';

export default function LoginForm() {
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label for="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Email address" ></input>
                </div>
                <div className="form-group mb-4">
                    <label for="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password"></input>
                </div>
                <input name="login" id="login" className="btn btn-block login-btn mb-4 hvr-grow" type="button" value="Login"></input>
            </form>
        </div>
    );
}





