import React, { useState, useEffect, Component } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function LoginForm() {
    const { register, handleSubmit, errors } = useForm();
    const { userData, setUserData } = useState('');
    const userEndPoint = 'http://localhost:8080/user';
    const history = useHistory();

    const fetchLoginUserByEmail = (email) => {
        fetch(userEndPoint + "/" + email)
            .then(response => response.json())
            .then(data => setUserData(data))
    }

    const onSubmit = data => {

        // fetchLoginUserByEmail(data.email)
        console.log(data);


        if ((data.email === 'trandamquan36@gmail.com') && (data.password === '123456')) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userId', 1);
            console.log("Login pressed: " + localStorage.getItem('isLoggedIn'));
            
            history.push("/");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Bad Credentials',
                text: 'Please check your email or password again!',
            })
        }
    }

    return (
        <div>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input 
                            style={{ border: errors.password ? '1px solid red' : '' }}
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Password"
                            ref={register({ required: true})}
                        >
                        </input>
                    </div>
                    {errors.password && <p className="input-error">* This field is required</p>}
                </div>
                <input name="login" id="login" className="btn btn-block login-btn mb-4 hvr-grow" type="submit" value="Login"></input>
            </form>
        </div>
    );
}





