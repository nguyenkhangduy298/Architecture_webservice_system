import React, { useState, useEffect, Component } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';



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
    const { register, handleSubmit, errors, getValues } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group">
                    <div>
                        <label for="name" className="sr-only">Email</label>
                        <input  
                            style={{ border: errors.name ? '1px solid red' : '' }}
                            type="name" 
                            name="name"
                            id="name" 
                            className="form-control" 
                            placeholder="Full name"
                            ref={register({ 
                                required: true,
                                validate: {
                                    validLength: value => value.length > 4 && value.length < 30
                                }
                            })}
                        >
                        </input>
                    </div>
                    {errors.name && errors.name.type ==="required" && <p className="input-error">* This field is required</p>}
                    {errors.name && errors.name.type ==="validLength" && <p className="input-error">* Length must be from 4-30 characters</p>}
                </div>
                <div className="form-group">
                    <div>
                        <label for="email" className="sr-only">Email</label>
                        <input  
                            style={{ border: errors.email ? '1px solid red' : '' }}
                            type="email" 
                            name="email"
                            id="email" 
                            className="form-control" 
                            placeholder="Email address"
                            ref={register({ 
                                required: true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                        >
                        </input>
                    </div>
                    {errors.email && errors.email.type ==="required" && <p className="input-error">* This field is required</p>}
                    {errors.email && errors.email.type ==="pattern" && <p className="input-error">* Your email does not meed the valid format</p>}
                </div>
                <div className="form-group mb-4">
                    <div>
                        <label for="password" className="sr-only">Password</label>
                        <input 
                            style={{ border: errors.password ? '1px solid red' : '' }}
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Password"
                            ref={register({ 
                                required: true, 
                                validate: {
                                    validLength: value => value.length > 4 && value.length < 30
                                }
                            })}
                        >
                        </input>
                    </div>
                    {errors.password && errors.password.type === "required" && <p className="input-error">* This field is required</p>}
                    {errors.password && errors.password.type === "validLength" && <p className="input-error"> * Length must be from 4-30 characters</p>}
                </div>
                <div className="form-group mb-4">
                    <div>
                        <label for="repassword" className="sr-only">Password</label>
                        <input 
                            style={{ border: errors.repassword ? '1px solid red' : '' }}
                            type="password" 
                            name="repassword" 
                            id="repassword" 
                            className="form-control" 
                            placeholder="Re-type the password"
                            ref={register({ 
                                required: true, 
                                validate: {
                                    validPassword: value => value === getValues("password"),
                                    validLength: value => value.length > 4 && value.length < 30
                                }
                            })}
                        >
                        </input>
                    </div>
                    {errors.repassword && errors.repassword.type === "required" && <p className="input-error">* This field is required</p>}
                    {errors.repassword && errors.repassword.type === "validPassword" && <p className="input-error"> * The entered password is not the same</p>}
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
                
                <input name="signup" id="signup" style={{marginTop: "30px"}}className="btn btn-block login-btn mb-4 hvr-grow" type="submit" value="Signup"></input>
            </form>
        </div>
    );
}
