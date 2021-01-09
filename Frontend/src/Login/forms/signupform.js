import React, { useState, useEffect, Component } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';



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
    const userEndPoint = "http://localhost:8080/user"
    const { register, handleSubmit, watch, errors, getValues } = useForm();
    const [ userData, setUserData ] = useState('');
    const [ favoriteSubject, setFavoriteSubject ] = useState(null);
    const history = useHistory();

    console.log("Email: "+ watch("email"));

    const fetchUserByEmail = (email) => {
        fetch(userEndPoint + "/" + email)
            .then(response => response.json())
            .then(data => setUserData(data))
    }

    const emailIsUnique = () => {
        //fetchUserByEmail(email);
        //console.log(userData);
        
        return watch("email") !== "trandamquan36@gmail.com";
    }

    const createUser = (userInfo) => {
        fetch(userEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        }).then(data => data.json())
    }



    const onSubmit = (data) => {
        console.log(data);
        
        if (favoriteSubject !== null) {
            console.log("Form successfully sent");
            //const userInfo = {name: data.name, email: data.email, password: data.password, favoriteSubject: favoriteSubject.value}
            //createUser(userInfo)
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Account created successfully! You can login to your account now.',
                confirmButtonText: 'Understood'
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/login');
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'You forgot to select your favorite subject!',
            })
        }

    }

    const onError = (errors) => {
        console.log(errors);
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <div className="form-group">
                    <div>
                        <label htmlFor="name" className="sr-only">Email</label>
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
                                    validLength: value => value.length >= 4 && value.length < 30
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
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input  
                            style={{ border: errors.email ? '1px solid red' : '' }}
                            type="email" 
                            name="email"
                            id="email" 
                            className="form-control" 
                            placeholder="Email address"
                            autoComplete="none"
                            ref={register({ 
                                required: true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                validate: emailIsUnique
                            })}
                        >
                        </input>
                    </div>
                    {errors.email && errors.email.type ==="required" && <p className="input-error">* This field is required</p>}
                    {errors.email && errors.email.type ==="pattern" && <p className="input-error">* Your email does not meed the valid format</p>}
                    {errors.email && errors.email.type ==="validate" && <p className="input-error">* This email has already been taken.</p>}

                </div>
                <div className="form-group mb-4">
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
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
                                    validLength: value => value.length >= 4 && value.length < 30
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
                        <label htmlFor="repassword" className="sr-only">Password</label>
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
                                    validLength: value => value.length >= 4 && value.length < 30
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
                    onChange={setFavoriteSubject}
                    options={options}
                    placeholder="Select your interest"
                    styles={styles}
                    value={favoriteSubject}
                />
                
                <input name="signup" id="signup" style={{marginTop: "30px"}}className="btn btn-block login-btn mb-4 hvr-grow" type="submit" value="Signup"></input>
            </form>
        </div>
    );
}
