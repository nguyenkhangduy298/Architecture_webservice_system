import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function AddCourseForm() {
    const courseEndPoint = "http://localhost:8080/course"
    const { register, handleSubmit, watch, errors, getValues } = useForm();
    const [ favoriteSubject, setFavoriteSubject ] = useState(null);


    const createCourse = (courseInfo) => {
        fetch(courseEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(courseInfo)
        }).then(data => data.json())
    }


    const onSubmit = (data) => {
        const courseInfo = {name: data.courseName, courseCode: data.code, field: data.field}

        createCourse(courseInfo);
        window.location.reload();
    }

    const onError = (errors) => {
        console.log(errors);
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <div className="form-group">
                    <div>
                        <label htmlFor="courseName" className="sr-only">Course Name</label>
                        <input  
                            style={{ border: errors.courseName ? '1px solid red' : '' }}
                            type="name" 
                            name="courseName"
                            id="courseName" 
                            className="form-control" 
                            placeholder="Course Name"
                            autoFocus={true}
                            ref={register({ 
                                required: true,
                                validate: {
                                    validLength: value => value.length >= 4 && value.length < 30
                                }
                            })}
                        >
                        </input>
                    </div>
                    {errors.courseName && errors.courseName.type ==="required" && <p className="input-error">* This field is required</p>}
                    {errors.courseName && errors.courseName.type ==="validLength" && <p className="input-error">* Length must be from 4-30 characters</p>}
                </div>
                <div className="form-group">
                    <div>
                        <label htmlFor="code" className="sr-only">Course Code</label>
                        <input  
                            style={{ border: errors.code ? '1px solid red' : '' }}
                            type="text" 
                            name="code"
                            id="code" 
                            className="form-control" 
                            placeholder="Course Code"
                            autoComplete="none"
                            ref={register({ 
                                required: true,
                                validate: {
                                    validLength: value => value.length >= 4 && value.length < 30
                                }
                            })}
                        >
                        </input>
                    </div>
                    {errors.code && errors.code.type ==="required" && <p className="input-error">* This field is required</p>}
                    {errors.code && errors.code.type ==="validate" && <p className="input-error">* Length must be from 4-30 characters</p>}

                </div>
                <div className="form-group mb-4">
                    <div>
                        <label htmlFor="field" className="sr-only">Course Field</label>
                        <input 
                            style={{ border: errors.field ? '1px solid red' : '' }}
                            type="text" 
                            name="field" 
                            id="field" 
                            className="form-control" 
                            placeholder="Course Field"
                            ref={register({ 
                                required: true, 
                                validate: {
                                    validLength: value => value.length >= 4 && value.length < 30
                                }
                            })}
                        >
                        </input>
                    </div>
                    {errors.field && errors.field.type === "required" && <p className="input-error">* This field is required</p>}
                    {errors.field && errors.field.type === "validLength" && <p className="input-error"> * Length must be from 4-30 characters</p>}
                </div>
                
                <input name="signup" id="signup" style={{marginTop: "30px"}}className="btn btn-block create-btn mb-4" type="submit" value="Create"></input>
            </form>
        </div>
    );
}
