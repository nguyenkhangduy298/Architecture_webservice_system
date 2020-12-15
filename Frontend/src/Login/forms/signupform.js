import React, { useState, useEffect, Component } from 'react';
import Select from 'react-select';



const options = [
    { value: 'Computer Science', label: 'Computer Science'},
    { value: 'Engineering', label: 'Engineering'},
    { value: 'Design', label: 'Design'},
    { value: 'Professional Communication', label: 'Professional Communication'},
    { value: 'Fashion', label: 'Fashion'},
    { value: 'International Business', label: 'International Business'},
    { value: 'Human Resources', label: 'Human Resources'}
];

const styles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'grey',
        backgroundColor: state.isSelected ? 'rgb(30,30,46)' : 'white',
        "&:hover": {
            backgroundColor: '#d3d3d3'
        }
    }),
    singleValue: provided => {
        return {
            ...provided,
            marginLeft: '15px',
            fontSize: 14,
            fontFamily: 'Poppins',
        }
    },
    placeholder: provided => {
        return {
            ...provided,
            color: '#919aa3',
            fontWeight: "bold",
            fontSize: 14,
            fontFamily: "Poppins",
            marginLeft: '15px'
        }
    },
    control: provided => {
        return {
            ...provided,
            borderColor: 'rgb(221,223,231)',
            height: '45px',
        }
    }
};

export default function SignupForm() {
    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label for="name" className="sr-only">Email</label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Full name"></input>
                </div>
                <div className="form-group">
                    <label for="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Email address"></input>
                </div>
                <div className="form-group mb-4">
                    <label for="password" className="sr-only">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password"></input>
                </div>
                <div className="form-group mb-4">
                    <label for="repassword" className="sr-only">Re-type Password</label>
                    <input type="password" name="repassword" id="repassword" className="form-control" placeholder="Re-type password"></input>
                </div>
                <Select
                    menuPortalTarget = {document.body}
                    isClearable
                    // onChange={this.handleSelectChange}
                    options={options}
                    placeholder="Select your interest"
                    styles={styles}
                    value=""
                />
                
                <input name="signup" id="signup" style={{marginTop: "30px"}}className="btn btn-block login-btn mb-4 hvr-grow" type="button" value="Signup"></input>
            </form>
        </div>
    );
}
