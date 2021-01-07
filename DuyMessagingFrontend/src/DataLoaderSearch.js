import React, { useState, useEffect } from "react";

export default function DataLoader() {
    const [data, setData] = useState([]);
    const endPoint = "http://localhost:8080/students/"
    const [name, setName] = useState('')
    const [parentName, setParentName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [grade, setGrade] = useState(12)
    const [id, setId] = useState(0)

    const load = () => {
        fetch(endPoint+id)
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }
    return (
        <div class="mpanel">
            SearchField:<input type="text" value={name} class="input-field" pattern="^[A-Za-z] [A-Za-z]+$" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <button onClick={()=> fetch()}>Save</button>
            <br/>
            LIST OF STUDENTS By Search Field:
            <ol>
                {data.map(el => (
                    <li key={el.id}>{el.name}&nbsp;&nbsp;&nbsp;&nbsp;{el.grade}&nbsp;&nbsp;&nbsp;&nbsp;{el.parentName}
                        &nbsp;&nbsp;&nbsp;&nbsp;{el.address}&nbsp;&nbsp;&nbsp;&nbsp;{el.phone}&nbsp;&nbsp;&nbsp;&nbsp;{el.email}</li>
                ))}
            </ol>

        </div>
    );
}
