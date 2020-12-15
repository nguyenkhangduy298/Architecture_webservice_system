import React, { useState, useEffect, Component } from 'react';

export default function ForgotpasswordForm() {
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label for="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Your email address"></input>
                </div>
                <input name="checkmail" id="checkmail" className="btn btn-block login-btn mb-4 hvr-grow" type="button" value="Send"></input>
            </form>
        </div>
    );
}
