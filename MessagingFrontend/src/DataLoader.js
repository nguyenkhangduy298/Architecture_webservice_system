import React, { useState, useEffect } from "react";

export default function DataLoader() {
    const [data, setData] = useState([]);
    const endPoint = "http://localhost:8080/students"

    useEffect(() => {
        fetch(endPoint)
            .then(response => response.json())
            .then(data => setData(data));
    });
    return (
        <div class="mpanel">
            LIST OF STUDENTS:
            <ol>
                {data.map(el => (
                    <li key={el.id}>{el.name}&nbsp;&nbsp;&nbsp;&nbsp;{el.grade}&nbsp;&nbsp;&nbsp;&nbsp;{el.parentName}
                        &nbsp;&nbsp;&nbsp;&nbsp;{el.address}&nbsp;&nbsp;&nbsp;&nbsp;{el.phone}&nbsp;&nbsp;&nbsp;&nbsp;{el.email}</li>
                ))}
            </ol>
        </div>
    );
}
