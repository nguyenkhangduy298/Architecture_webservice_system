import React, { useState, useEffect } from 'react'

export default function StudentComp() {
    const [editing, setEditing] = useState(false)
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [grade, setGrade] = useState('')
    const [parentName, setParentName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')

    const [id, setId] = useState(0)

    const studentEndPoint = "http://localhost:8080/students"
    

    // Load Student 
    useEffect( () => loadStudent(), [data] )

    const loadStudent = () => {
        fetch(studentEndPoint)
            .then(response => response.json())
            .then(data => setData(data))
    };

    const editStudent = (id, name) => {
        setEditing(true)
        setName(name)
        setId(id)
    }

    
    
    const saveStudent = () => {
        if (editing) {
            fetch(studentEndPoint, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( { name: name, grade: grade, parentName: parentName, address: address, phoneNumber: phoneNumber,
                                    emailAddress: emailAddress })
            })
                .then(data => console.log(data))
            
            setEditing(false)
            
        } else {
            fetch(studentEndPoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( { id: id, name: name, grade: grade, parentName: parentName, address: address, phoneNumber: phoneNumber,
                    emailAddress: emailAddress })
            })
                .then(data => console.log(data))
                
                
        }
    }

    const delStudent = (id, name) => {
        fetch(studentEndPoint, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { id: id, name: name, grade: grade, parentName: parentName, address: address, phoneNumber: phoneNumber,
                emailAddress: emailAddress })

        })
            .then(data => console.log(data))
    }


    return (
        <div>
            List of Students:
            <br/>
            <ul>
                {data.map(el => (
                    <li key= {el.id}> 
                        Name: {el.name}  <br/>
                        Grade: {el.grade}  <br/>
                        Parent Name:{el.parentName}  <br/>
                        Address:{el.address} <br/>
                        Phone Number: {el.phoneNumber}  <br/>
                        Email Address: {el.emailAddress} <br/>
                        <button onClick={() => editStudent(el.id, el.name, el.grade, el.parentName, el.address, el.phoneNumber, el.emailAdderss)}>Edit</button>
                        <button onClick={() => delStudent(el.id, el.name, el.grade, el.parentName, el.address, el.phoneNumber, el.emailAddress)}>Delete</button>
                    </li>
                ))}
            </ul>
            <br/>
            <br/>
            Student Information Form: 
            
            <br/>
            <br/>
            
            Name: 
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            
            Grade:
            <select>
            <option value="1" onChange={(e) => setGrade(e.target.value)}>1</option>
            <option value="2" onChange={(e) => setGrade(e.target.value)}>2</option>
            <option value="3" onChange={(e) => setGrade(e.target.value)}>3</option>
            <option value="4" onChange={(e) => setGrade(e.target.value)}>4</option>
            <option value="5" onChange={(e) => setGrade(e.target.value)}>5</option>
            <option value="6" onChange={(e) => setGrade(e.target.value)}>6</option>
            <option value="7" onChange={(e) => setGrade(e.target.value)}>7</option>
            <option value="8" onChange={(e) => setGrade(e.target.value)}>8</option>
            <option value="9" onChange={(e) => setGrade(e.target.value)}>9</option>
            <option value="10" onChange={(e) => setGrade(e.target.value)}>10</option>
            <option value="11" onChange={(e) => setGrade(e.target.value)}>11</option>
            <option value="12" onChange={(e) => setGrade(e.target.value)}>12</option>
            </select>

            <br/>


            Parent's Name:
            <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)}/>
            <br/>
            
            Address:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <br/>
            
            Phone Number:
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <br/>
            
            Email Address:
            <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
            <br/>

            <button onClick={() => saveStudent()}>Save Student Info</button>
            
        </div>
    );


}