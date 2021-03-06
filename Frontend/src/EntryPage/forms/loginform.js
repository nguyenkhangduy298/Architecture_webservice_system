import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import _default from 'antd/lib/checkbox/Group';


var bcrypt = require('bcryptjs');

export default function LoginForm() {
    const { register, handleSubmit, errors } = useForm();
    const userEndPoint = 'http://localhost:8080/user';
    const courseEndPoint = 'http://localhost:8080/course';
    const history = useHistory();

    const getAvailableCourses = () => {
        fetch(courseEndPoint)
            .then(response => response.json())
            .then(courseList => {
                if (courseList.length > 0) {
                    console.log(courseList);
                    localStorage.setItem("courses", JSON.stringify(courseList));
                } else {
                    localStorage.setItem("courses", []);
                }
            })
    }
    const checkValidUser = (email, password ) => {
        fetch(userEndPoint + "/email/" + email)
            .then(response => response.json())
            .then(data => {
                
                if ((email === data.email) && (bcrypt.compareSync(password, data.password))) {
                    localStorage.setItem("isLoggedIn", "true");
                    localStorage.setItem("userEmail", email);
                    localStorage.setItem("userRole", data.role);
                    getAvailableCourses();
                    
                    history.push({
                        pathname: "/homepage"
                    });
                   
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Bad Credentials',
                        text: 'Please check your email or password again!',
                    })
                }
                
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Bad Credentials',
                    text: 'Please check your email or password again!',
                })
            });
    }

    const onSubmit = user => {
        checkValidUser(user.email, user.password);
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
                            autoComplete="none"
                            autoCorrect="none"
                            autoFocus={true}
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





