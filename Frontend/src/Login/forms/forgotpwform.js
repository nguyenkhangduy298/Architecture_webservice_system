import React, { useState, useEffect, Component } from 'react';
import { useForm } from 'react-hook-form';

export default function ForgotpasswordForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input  
                            style={{ border: errors.email ? '1px solid red' : '' }}
                            type="email" 
                            name="forgot-email"
                            id="forgot-email" 
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
                <input name="checkmail" id="checkmail" className="btn btn-block login-btn mb-4 hvr-grow" type="submit" value="Send"></input>
            </form>
        </div>
    );
}
